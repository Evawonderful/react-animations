import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const FollowMouseButton = () => {
  const buttonRef = useRef(null);
  const defaultPosition = { x: 0, y: 0 };
  const range = 5;

  useEffect(() => {
    const button = buttonRef.current;

    const handleMouseMove = (e) => {
      const rect = button.getBoundingClientRect();
      const xPos = e.clientX - rect.left - rect.width / 2;
      const yPos = e.clientY - rect.top - rect.height / 2;

      gsap.to(button, {
        x: gsap.utils.clamp(-range, range, xPos),
        y: gsap.utils.clamp(-range, range, yPos),
        duration: 0.9,
      });
    };

    const handleMouseEnter = () => {
      gsap.to(button, {
        backgroundPosition: "bottom",
        backgroundColor: "green",
        duration: 0.3,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(button, {
        x: defaultPosition.x,
        y: defaultPosition.y,
        duration: 0.3,
        backgroundPosition: "top",
        backgroundColor: "#ffffff",
      });
    };

    button.addEventListener("mouseenter", handleMouseEnter);
    button.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      button.removeEventListener("mouseenter", handleMouseEnter);
      button.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="my-8">
      <button
        ref={buttonRef}
        className="btnFf px-8 py-4 rounded-full border-2 "
      >
        Discover
      </button>
    </div>
  );
};

export default FollowMouseButton;
