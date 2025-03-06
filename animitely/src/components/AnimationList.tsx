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
    <div className="w-full">
     
      <div className="flex justify-start bg-black gap-4 mb-6 border-b p-6">
        {categories.map((category) => (
          <button
            key={category.name}
            className={`px-6 py-2 rounded-full text-lg font-semibold transition-all duration-300 ${
              selectedCategory === category.name ? "bg-black text-white" : "bg-gray-200 hover:bg-gray-300"
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
        <div className="flex gap-4 mb-6">
          {categories.find((cat) => cat.name === selectedCategory)?.subcategories.map((sub) => (
            <button
              key={sub.name}
              className={`px-6 py-12 rounded-full text-lg font-medium transition-all duration-300 ${
                selectedSubcategory === sub.name ? "bg-black text-white" : "bg-gray-200 hover:bg-gray-300"
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
        <div className="grid grid-cols-6 gap-4">
          {categories
            .find((cat) => cat.name === selectedCategory)
            ?.subcategories.find((sub) => sub.name === selectedSubcategory)
            ?.animations.map((anim) => (
              <button
                key={anim.id}
                className="p-4 rounded-lg transition text-lg font-medium"
                onClick={() => onSelectAnimation(anim)}
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