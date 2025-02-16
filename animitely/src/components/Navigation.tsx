interface categoryProp {
  setCategory: (category:string)=>void;
}

const Navigation:React.FC<categoryProp> = ({ setCategory }) => {
  return (
    <nav className="flex gap-4 p-4">
      {["entrances", "exits", "background", "attention_seekers", "Text"].map((cat) => (
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
