import React, { useEffect, useRef, useState } from "react";
import gsap, { Power3 } from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDownLong } from "@fortawesome/free-solid-svg-icons";


const FollowMouseButton = () => {
  const buttonRef = useRef(null);
  const defaultPosition = { x: 0, y: 0 };
  const range = 5;

  const [arrowColor, setArrowColor] = useState('white');

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
        backgroundColor: "white",
        duration: 0.3,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(button, {
        x: defaultPosition.x,
        y: defaultPosition.y,
        duration: 0.3,
        backgroundPosition: "top",
        backgroundColor: "#231F20",
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
        className="btnFf p-6 px-8 rounded-full border border-white my-8"
        onMouseOver={()=> setArrowColor('#231F20')} onMouseLeave={()=> setArrowColor('white')}
      >
       <FontAwesomeIcon icon={faArrowDownLong} style={{color: arrowColor}}/>
      </button>
    </div>
  );
};

const HeroSection = () => {
  const ease = Power3.easeIn();
  const gRef = useRef();



  useEffect(()=>{
    let ctx = gsap.context(()=>{
      gRef.current = gsap.timeline()
      .from(".heroBigText", 0.8, {
        opacity: 0,
        y: -10,
        skewY: 3,
        stagger: {
          amount: 0.8
        }, 
      }, '+=.5')
      
    });

    return () => ctx.revert();
  },[])


  return (
    <div className="h-screen bg-[#231F20] flex justify-center items-center">
      <div>
        <p className="heroBigText text-white text-8xl my-2 text-center font-helvetica font-bold">Women have</p>
        <p className="heroBigText text-white text-8xl my-2 text-center font-helvetica font-bold">changed design </p>
        <div className="flex justify-center items-center">
          <FollowMouseButton/>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
