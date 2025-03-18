import React from "react";
import { Typewriter } from "react-simple-typewriter";


const TypingEffect = ({style}) => {
  return (
    <div className="flex justify-center items-center h-auto ">
      <h1 style={style} className="md:text-8xl sm:text-7xl text-5xl font-[400] ">
        <Typewriter   words={["Just do it."]} loop={1} cursor={false} typeSpeed={100} // Adjust typing speed
        deleteSpeed={0} // No deleting effect
        delaySpeed={1000} />
        <span className="custom-cursor  font-[100] ">|</span>
      </h1>

    </div>
  );
};

export default TypingEffect;
