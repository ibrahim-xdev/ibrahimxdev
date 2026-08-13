import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function AuroraBackground() {
  const containerRef = useRef(null);

  useEffect(() => {
    const blobs = containerRef.current?.querySelectorAll(".aurora-blob");
    if (!blobs) return;

    const ctx = gsap.context(() => {
      blobs.forEach((blob, i) => {
        gsap.to(blob, {
          x: `random(-100, 100)`,
          y: `random(-80, 80)`,
          duration: 18 + i * 4,
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
      {/* Purple Glow */}
      <div
        className="aurora-blob absolute -top-48 left-[5%] h-[38rem] w-[38rem] rounded-full opacity-25 blur-[180px]"
        style={{
          background:
            "radial-gradient(circle, var(--accent-1) 0%, transparent 70%)",
        }}
      />

      {/* Cyan Glow */}
      <div
        className="aurora-blob absolute top-[30%] right-[-5%] h-[34rem] w-[34rem] rounded-full opacity-20 blur-[180px]"
        style={{
          background:
            "radial-gradient(circle, var(--accent-2) 0%, transparent 70%)",
        }}
      />

      {/* Bottom Purple Glow */}
      <div
        className="aurora-blob absolute bottom-[-10%] left-[25%] h-[36rem] w-[36rem] rounded-full opacity-15 blur-[200px]"
        style={{
          background:
            "radial-gradient(circle, var(--accent-1) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}
