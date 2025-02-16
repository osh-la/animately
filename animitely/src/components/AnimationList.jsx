const AnimationList = ({ categories, onSelect }) => {
  return (
    <div className="w-60 p-4 bg-white shadow-md h-screen">
      <h2 className="text-xl font-semibold mb-4">Select an Animation</h2>
      {categories.map((category) => (
        <div key={category.name} className="mb-4">
          <h3 className="font-semibold text-gray-600">{category.name}</h3>
          <ul>
            {category.animations.map((anim) => (
              <li
                key={anim.id}
                className="p-2 cursor-pointer hover:bg-gray-200 rounded-md"
                onClick={() => onSelect(anim)}
              >
                {anim.name}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default AnimationList;
