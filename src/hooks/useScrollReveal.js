import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Fades + rises children matching `selector` into view as the section
// containing them enters the viewport.
export default function useScrollReveal(selector, options = {}) {
  const rootRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const targets = gsap.utils.toArray(selector);
      targets.forEach((el, i) => {
        gsap.from(el, {
          opacity: 0,
          y: 28,
          duration: 0.7,
          ease: "power3.out",
          delay: i * (options.stagger ?? 0.08),
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });
    }, rootRef);
    return () => ctx.revert();
  }, [selector, options.stagger]);

  return rootRef;
}
