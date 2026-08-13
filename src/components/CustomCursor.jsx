import { useEffect, useRef } from "react";

const TRAIL_LENGTH = 12;

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const trailRefs = useRef([]);

  const mouse = useRef({
    x: 0,
    y: 0,
  });

  const positions = useRef(
    Array.from({ length: TRAIL_LENGTH }, () => ({
      x: 0,
      y: 0,
    })),
  );

  useEffect(() => {
    // Disable custom cursor on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const cursor = cursorRef.current;
    const trails = trailRefs.current;

    if (!cursor) return;

    let animationFrame;

    // -----------------------------
    // Mouse Move
    // -----------------------------
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      // IMPORTANT:
      // Show cursor as soon as mouse moves
      cursor.style.opacity = "1";

      trails.forEach((trail) => {
        if (trail) {
          trail.style.opacity = "1";
        }
      });
    };

    // -----------------------------
    // Mouse Leave
    // -----------------------------
    const handleMouseLeave = () => {
      cursor.style.opacity = "0";

      trails.forEach((trail) => {
        if (trail) {
          trail.style.opacity = "0";
        }
      });
    };

    // -----------------------------
    // Hover Detection
    // -----------------------------
    const handleMouseOver = (e) => {
      const target = e.target;

      const interactive = target.closest(
        "a, button, input, textarea, select, [role='button']",
      );

      if (interactive) {
        cursor.classList.add("cursor-hover");

        trails.forEach((trail) => {
          if (trail) {
            trail.classList.add("trail-hover");
          }
        });
      } else {
        cursor.classList.remove("cursor-hover");

        trails.forEach((trail) => {
          if (trail) {
            trail.classList.remove("trail-hover");
          }
        });
      }
    };

    // -----------------------------
    // Animation
    // -----------------------------
    const animate = () => {
      // Main cursor
      const current = positions.current[0];

      current.x += (mouse.current.x - current.x) * 0.25;
      current.y += (mouse.current.y - current.y) * 0.25;

      cursor.style.transform = `translate3d(${current.x}px, ${current.y}px, 0)`;

      // Trail
      for (let i = 1; i < TRAIL_LENGTH; i++) {
        const previous = positions.current[i - 1];
        const position = positions.current[i];

        position.x += (previous.x - position.x) * 0.35;
        position.y += (previous.y - position.y) * 0.35;

        const trail = trails[i];

        if (trail) {
          trail.style.transform = `translate3d(${position.x}px, ${position.y}px, 0)`;
        }
      }

      animationFrame = requestAnimationFrame(animate);
    };

    // -----------------------------
    // Event Listeners
    // -----------------------------
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseLeave);
    document.addEventListener("mouseover", handleMouseOver);

    animationFrame = requestAnimationFrame(animate);

    // -----------------------------
    // Cleanup
    // -----------------------------
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseLeave);
      document.removeEventListener("mouseover", handleMouseOver);

      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <>
      {/* Cursor Trail */}
      <div
        aria-hidden="true"
        className="custom-cursor-layer pointer-events-none fixed inset-0 z-[9998]"
      >
        {Array.from({ length: TRAIL_LENGTH }).map((_, index) => (
          <span
            key={index}
            ref={(element) => {
              trailRefs.current[index] = element;
            }}
            className="cursor-trail"
            style={{
              width: `${10 - index * 0.5}px`,
              height: `${10 - index * 0.5}px`,
            }}
          />
        ))}
      </div>

      {/* Main Cursor */}
      <div
        ref={cursorRef}
        aria-hidden="true"
        className="custom-cursor pointer-events-none fixed left-0 top-0 z-[9999]"
      >
        <span className="custom-cursor-dot" />
      </div>
    </>
  );
}
