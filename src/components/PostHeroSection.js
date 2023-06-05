import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";
import FollowMouseButton from "./FollowMouseButton";
import Wrapper from "./Wrapper";

gsap.registerPlugin(ScrollTrigger);


const PostHeroSection = () => {
    let newRef = useRef();

    useEffect(()=>{
let ctx = gsap.context(()=>{
gsap.from('postPtext', 0.5,{
    scrollTrigger: {
        trigger: '.postSection'
    },
    opacity: 0,
    stagger: {
        amount: 0.3
    }
})
});

return () => ctx.revert()
    }, [])


  return (
    <div className="bg-white h-[80vh] py-[5em] postSection">
      <Wrapper>
        <div className="flex justify-between items-center">
          <div className="w-1/2">
            <p className="text-[#ff5000] mb-[1.8vh] postPtext">ABOUT</p>
            <p className="text-[#231F20] leading-[130%] text-5xl  postPtext">
              The Designed by Women project encourages a deeper understanding of
              women's contributions to design.
            </p>          

            <FollowMouseButton/>
          </div>
          <div className="w-1/3">
            <p className="postPtext">It presents the design contributions of women from around the world. Works date from 1900 to the present and are drawn from the Stewart Collection, formed under the leadership of philanthropist Liliane Stewart. This website is developed in collaboration with the Montreal Museum of Fine Arts, which is organizing the exhibition Parall(Elles): A History of Women in Design, on view from February 18 – May 28, 2023.</p>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default PostHeroSection;
