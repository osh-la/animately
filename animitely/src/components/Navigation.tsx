import React from "react";

const Navigation = ({ setCategory }) => {
  return (
    <nav className="flex gap-4 p-4">
      {["entrances", "exits"].map((cat) => (
        <button
          key={cat}
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => setCategory(cat)}
        >
          {cat.toUpperCase()}
        </button>
      ))}
    </nav>
  );
};

export default Navigation;
