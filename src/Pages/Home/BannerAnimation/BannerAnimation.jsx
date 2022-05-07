import { useLottie } from "lottie-react";
import groovyWalkAnimation from "../../../assets/banner/23662-laptop-animation-pink-navy-blue-white.json";

const BannerAnimation = () => {
  const options = {
    animationData: groovyWalkAnimation,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options);

  return View;
};

export default BannerAnimation;
