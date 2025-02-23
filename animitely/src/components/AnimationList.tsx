import React, { useEffect, useState } from "react";

interface Animation {
  id: string;
  name: string;
  css: string;
}

interface Subcategory {
  name: string;
  animations: Animation[];
}

interface Category {
  name: string;
  subcategories: Subcategory[];
}

interface AnimationListProps {
  onSelectAnimation: (animation: Animation) => void;
}

const AnimationList: React.FC<AnimationListProps> = ({ onSelectAnimation }) => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    fetch("/Animations.json") // Fetch from public folder
      .then((response) => response.json())
      .then((data) => setCategories(data.categories))
      .catch((error) => console.error("Error loading animations.json:", error));
  }, []);

  return (
    <div className="p-4 w-80 border-r border-gray-300">
      <h2 className="text-lg font-bold mb-4">Animation Categories</h2>
      {categories.map((category) => (
        <div key={category.name} className="mb-4">
          <h3 className="text-md font-semibold">{category.name}</h3>
          {category.subcategories.map((sub) => (
            <div key={sub.name} className="ml-4">
              <h4 className="text-sm font-medium text-gray-600">{sub.name}</h4>
              <ul>
                {sub.animations.map((anim) => (
                  <li
                    key={anim.id}
                    className="cursor-pointer text-blue-500 hover:underline"
                    onClick={() => onSelectAnimation(anim)}
                  >
                    {anim.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default AnimationList;
