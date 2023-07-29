import React, { useRef } from "react";
import { useInView } from "framer-motion";

const Container = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section ref={ref}>
      <span
        style={{
          display: "block",
          transform: isInView ? "translateX(0px)" : "translateX(-400px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s",
        }}
      >
        {children}
      </span>
    </section>
  );
};

export default Container;
