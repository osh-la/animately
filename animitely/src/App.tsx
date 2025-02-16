import { useState, useEffect } from "react";
import AnimationList from "./components/AnimationList";
import AnimationPreview from "./components/AnimationPreview";
import CodeSnippet from "./components/CodeSnippet";

function App() {
  const [categories, setCategories] = useState([]);
  const [selectedAnimation, setSelectedAnimation] = useState(null);

  useEffect(() => {
    fetch("/Animations.json")
      .then((res) => res.json())
      .then((data) => setCategories(data.categories))
      .catch((err) => console.error("Error loading animations:", err));
  }, []);

  return (
    <div className="flex space-x-4">
      <AnimationList categories={categories} onSelect={setSelectedAnimation} />
      <AnimationPreview animation={selectedAnimation} />
      <CodeSnippet animation={selectedAnimation} />
    </div>
  );
}

export default App;
