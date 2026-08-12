import { useEffect, useRef } from "react";
import gsap from "gsap";

// A slow-drifting mesh of gradient blobs behind the glass panels —
// evokes neural / signal activity, tying the AI-engineer identity
// to the glassmorphism surfaces without being literal about it.
export default function AuroraBackground() {
  const containerRef = useRef(null);

  useEffect(() => {
    const blobs = containerRef.current?.querySelectorAll(".aurora-blob");
    if (!blobs) return;

    const ctx = gsap.context(() => {
      blobs.forEach((blob, i) => {
        gsap.to(blob, {
          x: `random(-60, 60)`,
          y: `random(-50, 50)`,
          duration: 14 + i * 3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div
        className="aurora-blob absolute -top-40 left-[10%] h-[32rem] w-[32rem] rounded-full opacity-40 blur-[110px]"
        style={{
          background:
            "radial-gradient(circle, var(--accent-1) 0%, transparent 70%)",
        }}
      />
      <div
        className="aurora-blob absolute top-1/3 right-[5%] h-[26rem] w-[26rem] rounded-full opacity-30 blur-[100px]"
        style={{
          background:
            "radial-gradient(circle, var(--accent-2) 0%, transparent 70%)",
        }}
      />
      <div
        className="aurora-blob absolute bottom-0 left-[25%] h-[30rem] w-[30rem] rounded-full opacity-20 blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, var(--accent-1) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}
