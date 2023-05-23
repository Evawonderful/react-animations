import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faInstagramSquare,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { useEffect, useRef } from "react";
import gsap, { Power3 } from "gsap";
import ColorChange from "./components/ColorChange";

function App() {
  const ease = Power3.easeOut;
  const newRef = useRef();

  useEffect(() => {
    let ctx = gsap.context(() => {
      newRef.current = gsap
        .timeline()
        .from(
          ".logoItem",
          1,
          {
            opacity: 0,
            x: -20,
          },
          "+=.1"
        )
        .from(
          [".menuItems", ".menuItemIcon"],
          0.5,
          {
            opacity: 0,
            y: -20,
            stagger: {
              amount: 0.5,
            },
          },
          "+=.1"
        )
        .from(
          [".heroTexts"],
          0.5,
          {
            opacity: 0,
            y: 15,
            skewX: 10,
            stagger: {
              amount: 0.7,
              ease: ease,
            },
            ease: ease,
          },
          "+=.1"
        )
        .from(
          ".imgCon",
          0.5,
          {
            opacity: 0,
            x: 20,
            ease,
          },
          "+=.1"
        )
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="w-10/12 mx-auto">
      <nav className="p-5">
        <div className="flex justify-between items-center">
          <img
            src="assets/logo.png"
            width="100"
            height="100"
            className="logoItem"
          />

          <ul className="flex justify-between gap-5 mt-3 text-lg font-medium">
            <li className="menuItems">Products</li>
            <li className="menuItems">Our Story</li>
            <li className="menuItems">Blog</li>
            <li className="menuItems">Find Store</li>
          </ul>

          {/* icon caontainer */}
          <span className="flex justify-between gap-2 h-fit ">
            <span className="border border-black rounded-full w-9 h-9 text-center menuItemIcon">
              <FontAwesomeIcon icon={faFacebookF} className="p-2" />
            </span>
            <span className="border border-black rounded-full w-9 h-9 text-center menuItemIcon">
              <FontAwesomeIcon icon={faTwitter} className="p-2" />
            </span>
            <span className="border border-black rounded-full w-9 h-9 text-center menuItemIcon">
              <FontAwesomeIcon icon={faYoutube} className="p-2 " />
            </span>
            <span className="border border-black rounded-full w-9 h-9 text-center menuItemIcon">
              <FontAwesomeIcon icon={faInstagram} className="p-2" />
            </span>
          </span>
        </div>
      </nav>

      <div className="flex justify-between items-center py-[5%]">
        <div className="w-[60%]">
          <p className="text-4xl heroTexts">At Welch’s®,</p>
          <p className="text-8xl font-bold heroTexts">
            {" "}
            We Put The Fruit <br /> In Fruit Snacks®
          </p>
          <p className="text-xl flex flex-col gap-2 my-7">
            <span className="heroTexts">
              Welch’s® are America’s Favorite Fruit
            </span>
            <span className="heroTexts">
              Snacks®, made with Real Fruit delivering
            </span>
            <span className="heroTexts">
              delicious taste the whole family loves.
            </span>
          </p>
        </div>

        <div className="w-[40%] imgCon ">
          <img src="assets/frolic2.png" />
        </div>
      </div>
      <ColorChange/>
    </div>
  );
}

export default App;
