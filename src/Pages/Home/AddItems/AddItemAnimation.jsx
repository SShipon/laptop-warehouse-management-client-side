import { useLottie } from "lottie-react";
import groovyWalkAnimation from "../../../assets/laptop/36368-isometric-laptop-development-data.json";

const AddItemAnimation = () => {
  const options = {
    animationData: groovyWalkAnimation,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options);

  return View;
};

export default AddItemAnimation ;
