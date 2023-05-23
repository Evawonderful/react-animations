import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// import "./style.css";

gsap.registerPlugin(ScrollTrigger);



const ColorChange = () => {
  let revealsRef = useRef([]);
  revealsRef.current = [];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      revealsRef.current.forEach((el, idx) => {
        const color = el.dataset.bgcolor;
        const text = el.dataset.text;

        const prevBg =
          idx === 0 ? "" : revealsRef.current[idx - 1].dataset.bgcolor;

        gsap.to(el, {
          backgroundColor: color,
          color: "white",
          duration: 3,
          scrollTrigger: {
            scrub: true,
            markers: true,
            start: "top 50%",
            trigger: el,
            // onEnter: () =>
            //   gsap.to(el, {
            //     backgroundColor: color,
            //   }),
            // onLeaveBack: () =>
            //   gsap.to(el, {
            //     backgroundColor: prevBg,
            //   }),
          },
        })

        gsap.to(".frolic-pepe", {
          scrollTrigger: {
            trigger: ".frolic-pepe",
            toggleActions: "restart pause resume none",
          },
          rotation: 360,
          duration: 2,
          onComplete: function() {
            gsap.to(".frolic-pepe", {
              x: -100,
              duration: 3,
            });
          }
        });
      });
    });
    return () => ctx.revert();
  }, []);

  const addToRef = (el) => {
    if (el && !revealsRef.current.includes(el)) {
      revealsRef.current.push(el);
    }
  };

  return (
    <div>
      <div
        data-bgcolor="#ea580c"
        data-text=""
        ref={addToRef}
        value="yellow"
        className="h-screen w-full pannel text-violet-900 justify-center items-center flex text-5xl "
      >
        Section heading
      </div>
      <div
        data-bgcolor="#b45309"
        data-text=""
        ref={addToRef}
        className="h-screen w-full pannel text-pink-900 justify-center items-center flex text-5xl "
      >
        Section heading 1
      </div>

      <div
        data-bgcolor="#b45309"
        data-text=""
        className="h-screen w-full pannel text-pink-900 justify-center items-center flex text-5xl "
      >
        <div>
          <h1 className="font-bold text-2xl">Meals love pepe </h1>
          <span>...pepper it up</span>
        </div>

        <img
          src="assets/frolicpepe.png"
          width="600"
          height="600"
          className="frolic-pepe"
        />
      </div>
    </div>
  );
};

export default ColorChange;
