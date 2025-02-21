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
   <>
   <div className="py-10">
    <h1 className="font-black text-5xl"><a href="/">Animately</a></h1>
   </div>
    <div className="flex justify-between">
      <AnimationList categories={categories} onSelect={setSelectedAnimation} />
      <AnimationPreview animation={selectedAnimation} />
      <CodeSnippet animation={selectedAnimation} />
    </div>
   </>
  );
}

export default App;
