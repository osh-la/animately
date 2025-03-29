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
  const [animationKey, setAnimationKey] = useState<number>(0); 

  useEffect(() => {
    fetch("/Animations.json")
      .then((response) => response.json())
      .then((data) => setCategories(data.categories))
      .catch((error) => console.error("Error loading animations.json:", error));
  }, []);

  return (
    <div className="w-full">
      <div className="flex justify-start bg-black gap-4 border-b py-4 md:p-6 overflow-x-auto md:overflow-hidden">
        {categories.map((category) => (
          <button
            key={category.name}
            className={`px-6 py-2 rounded-md text-sm md:text-lg font-semibold transition-all duration-300 ${
              selectedCategory === category.name ? "bg-black text-white" : "bg-gray-500 text-white hover:bg-gray-300"
            }`}
            onClick={() => {
              setSelectedCategory(category.name === selectedCategory ? null : category.name);
              setSelectedSubcategory(null);
            }}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Subcategory Selection */}
      {selectedCategory && (
        <div className="flex gap-4 text-sm p-6 bg-black overflow-auto md:overflow-hidden">
          {categories.find((cat) => cat.name === selectedCategory)?.subcategories.map((sub) => (
            <button
              key={sub.name}
              className={`rounded-md px-4 py-2 transition-all duration-300 ${
                selectedSubcategory === sub.name ? "bg-gray-600 text-white" : "bg-gray-200 hover:bg-gray-300"
              }`}
              onClick={() => setSelectedSubcategory(sub.name === selectedSubcategory ? null : sub.name)}
            >
              {sub.name}
            </button>
          ))}
        </div>
      )}

      {/* Animation List */}
      {selectedSubcategory && (
        <div className="flex gap-2 text-sm bg-gray-600 text-white flex-nowrap md:flex-wrap md:p-6 overflow-auto md:overflow-hidden">
          {categories
            .find((cat) => cat.name === selectedCategory)
            ?.subcategories.find((sub) => sub.name === selectedSubcategory)
            ?.animations.map((anim) => (
              <button
                key={`${anim.id}-${animationKey}`} 
                className="p-4 transition text-sm"
                onClick={() => {
                  setAnimationKey((prev) => prev + 1);
                  onSelectAnimation(anim);
                }}
              >
                {anim.name}
              </button>
            ))}
        </div>
      )}
    </div>
  );
};

export default AnimationList;
