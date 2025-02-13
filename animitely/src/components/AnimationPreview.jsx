import React, { useEffect } from "react";

const AnimationPreview = ({ animation }) => {
  useEffect(() => {
    if (animation) {
      const style = document.createElement("style");
      style.innerHTML = animation.css;
      document.head.appendChild(style);

      return () => {
        document.head.removeChild(style);
      };
    }
  }, [animation]);

  return (
    <div className="p-10 flex justify-center items-center min-h-[200px]">
      {animation ? (
        <div className={`w-32 h-32 bg-blue-400 ${animation.id}`}></div>
      ) : (
        <p>Select an animation</p>
      )}
    </div>
  );
};

export default AnimationPreview;
