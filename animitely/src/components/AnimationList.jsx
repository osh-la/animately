import React, { useEffect, useState } from "react";
import { fetchAnimations } from "../data/fetchAnimations";

const AnimationList = ({ category, setSelectedAnimation }) => {
  const [animations, setAnimations] = useState([]);

  useEffect(() => {
    if (category) {
      fetchAnimations(category).then(setAnimations);
    }
  }, [category]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">{category.toUpperCase()} Animations</h2>
      <ul className="flex flex-wrap gap-4 mt-2">
        {animations.map((anim) => (
          <li
            key={anim.id}
            className="cursor-pointer px-4 py-2 bg-gray-200 rounded"
            onClick={() => setSelectedAnimation(anim)}
          >
            {anim.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AnimationList;
