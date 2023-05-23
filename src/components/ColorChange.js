import React, { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Fade, Slide } from "react-reveal";

// import "./style.css";

gsap.registerPlugin(ScrollTrigger);

const ColorChange = () => {
  let revealsRef = useRef([]);
  revealsRef.current = [];

  let animRef = useRef();

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
        });

        // gsap.to(".frolic-pepe", {
        //   scrollTrigger: {
        //     trigger: ".frolic-pepe",
        //     toggleActions: "restart pause resume none",
        //   },
        //   rotation: 360,
        //   duration: 2,
        //   onComplete: function () {
        //     gsap.to(".frolic-pepe", {
        //       x: -100,
        //       duration: 3,
        //     });
        //   },
        // });

        // gsap.to(".frolic-pepe", {
        //   rotation: 360,
        //   scrollTrigger: {
        //     trigger: ".frolic-pepe",
        //     toggleActions: "restart pause resume none",
        //     start: "top 80%",
        //     end: "bottom 20%",
        //     onEnter: function () {
        //       gsap.to(".frolic-pepe", { x: -100, duration: 3 });
        //     },
        //     onLeaveBack: function () {
        //       gsap.to(".frolic-pepe", { x: -100, duration: 0 });
        //     },
        //     onLeave: function () {
        //       gsap.to(".frolic-pepe", { x: 100, duration: 0 });
        //     },
        //   },
        //   duration: 2,
        // });
      });
    });
    return () => ctx.revert();
  }, []);

  const newRef = useRef();

  useEffect(() => {
    let ctx = gsap.context(() => {
      newRef.current = gsap.timeline().to(".frolic-pepe", {
        rotation: 360,
        scrollTrigger: {
          trigger: ".frolic-pepe",
          toggleActions: "restart pause resume none",
          start: "top 80%",
          end: "bottom 20%",
          onEnter: function () {
            gsap.to(".frolic-pepe", { x: -100, duration: 3 });
          },
          onLeaveBack: function () {
            gsap.to(".frolic-pepe", { x: -100, duration: 0 });
          },
          onLeave: function () {
            gsap.to(".frolic-pepe", { x: 100, duration: 0 });
          },
        },
        duration: 2,
      });
    });

    return () => ctx.revert();
  }, []);

  function animateFrolicPepe() {
    gsap.to(".frolic-pepe", {
      rotation: 360,
      scrollTrigger: {
        trigger: ".frolic-pepe",
        toggleActions: "restart pause resume none",
        start: "top 80%", // Adjust the value as needed
        end: "bottom 20%", // Adjust the value as needed
        onEnter: function () {
          gsap.to(".frolic-pepe", { x: -100, duration: 3 });
        },
        onLeaveBack: function () {
          gsap.to(".frolic-pepe", { x: -100, duration: 0 });
        },
        onLeave: function () {
          gsap.to(".frolic-pepe", { x: 100, duration: 0 });
        },
      },
      duration: 2,
    });
  }

  // animateFrolicPepe()

  // Call the function to trigger the animation
  animateFrolicPepe();

  useEffect(() => {});

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
        className="h-screen w-10/12 mx-auto pannel text-pink-900 justify-center items-center flex text-5xl "
      >
        <div>
          <Fade left cascade>
            <h1 className="font-bold text-2xl">Meals love pepe </h1>
            <span className="text-6xl">...pepper it up</span>
          </Fade>
        </div>

        <div>
          <Slide top>
            <img
              src="assets/frolicpepe.png"
              width="600"
              height="600"
              className="frolic-pepe"
            /></Slide>
        </div>
      </div>
    </div>
  );
};

export default ColorChange;
