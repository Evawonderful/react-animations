import React from "react";
import FollowMouseButton from "./FollowMouseButton";
import Wrapper from "./Wrapper";



const PostHeroSection = () => {
const DiscoverBtn = "Discover"

  return (
    <div className="bg-white h-[80vh] py-[5em]">
      <Wrapper>
        <div className="flex justify-between items-center">
          <div className="w-1/2">
            <p className="text-[#ff5000] mb-[1.8vh]">ABOUT</p>
            <p className="text-[#231F20] leading-[130%] text-5xl ">
              The Designed by Women project encourages a deeper understanding of
              women's contributions to design.
            </p>          

            <FollowMouseButton content={DiscoverBtn}/>
          </div>
          <div className="w-1/3">
            <p>It presents the design contributions of women from around the world. Works date from 1900 to the present and are drawn from the Stewart Collection, formed under the leadership of philanthropist Liliane Stewart. This website is developed in collaboration with the Montreal Museum of Fine Arts, which is organizing the exhibition Parall(Elles): A History of Women in Design, on view from February 18 – May 28, 2023.</p>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default PostHeroSection;
