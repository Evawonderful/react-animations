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
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import PostHeroSection from "./components/PostHeroSection";

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
    <div>
      <NavBar/>      
      <HeroSection/>
      <PostHeroSection/>
    </div>
  );
}

export default App;
