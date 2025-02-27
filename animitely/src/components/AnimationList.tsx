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
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);

  useEffect(() => {
    fetch("/Animations.json") 
      .then((response) => response.json())
      .then((data) => setCategories(data.categories))
      .catch((error) => console.error("Error loading animations.json:", error));
  }, []);

  return (
    <div className="p-4 w-80 border-r border-gray-300">
      <h2 className="text-lg font-bold mb-4">Animation Categories</h2>
      {categories.map((category) => (
        <div key={category.name} className="mb-2">
          <h3 
            className="text-md font-semibold cursor-pointer hover:text-blue-500"
            onClick={() => setSelectedCategory(category.name === selectedCategory ? null : category.name)}
          >
            {category.name}
          </h3>
          {selectedCategory === category.name && (
            <div className="ml-4">
              {category.subcategories.map((sub) => (
                <h4 
                  key={sub.name} 
                  className="text-sm font-medium text-gray-600 cursor-pointer hover:text-blue-500"
                  onClick={() => setSelectedSubcategory(sub.name === selectedSubcategory ? null : sub.name)}
                >
                  {sub.name}
                </h4>
              ))}
              {selectedSubcategory && (
                <ul className="ml-4">
                  {category.subcategories.find(sub => sub.name === selectedSubcategory)?.animations.map((anim) => (
                    <li
                      key={anim.id}
                      className="cursor-pointer text-blue-500 hover:underline"
                      onClick={() => onSelectAnimation(anim)}
                    >
                      {anim.name}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AnimationList;
