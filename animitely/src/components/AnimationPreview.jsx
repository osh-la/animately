import { useEffect, useState } from "react";

const AnimationPreview = ({ animation }) => {
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    if (animation) {
      const existingStyle = document.getElementById("dynamic-animation-style");
      if (existingStyle) {
        existingStyle.remove();
      }

      const style = document.createElement("style");
      style.id = "dynamic-animation-style";
      style.innerHTML = animation.css;
      document.head.appendChild(style);

      setAnimationClass("");
      setTimeout(() => setAnimationClass(animation.id), 10);

      return () => {
        style.remove();
      };
    }
  }, [animation]);

  return (
    <div className={`p-10 flex justify-center items-center min-h-[200px] ${animationClass}`}>
      {animation ? (
        <div className="w-32 h-32 bg-blue-400"></div>
      ) : (
        <p>Select an animation</p>
      )}
    </div>
  );
};

export default AnimationPreview;
