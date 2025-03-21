import React, { useEffect } from "react";

interface Animation {
  id: string;
  name: string;
  css: string;
}

interface AnimationPreviewProps {
  animation: Animation | null;
}

const AnimationPreview: React.FC<AnimationPreviewProps> = ({ animation }) => {
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
    <div className="p-10 flex flex-col items-center justify-center min-h-[300px]">
      {animation ? (
        <>
          <div className={` ${animation.id}`}> animation</div>
          <p className="mt-4 text-lg font-bold">{animation.name}</p>
        </>
      ) : (
        <p className="text-gray-500">Select an animation</p>
      )}
    </div>
  );
};

export default AnimationPreview;
