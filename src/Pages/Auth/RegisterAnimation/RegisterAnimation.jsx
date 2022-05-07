import { useLottie } from "lottie-react";
import groovyWalkAnimation from "../../../assets/contact/78355-contact-us-lottie.json";

const RegisterAnimation = () => {
  const options = {
    animationData: groovyWalkAnimation,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options);

  return View;
};

export default RegisterAnimation;
