import React, { useState } from "react";
import Navigation from "./components/Navigation";
import AnimationList from "./components/AnimationList";
import AnimationPreview from "./components/AnimationPreview";
import CodeSnippet from "./components/CodeSnippet";

const App = () => {
  const [category, setCategory] = useState("entrances");
  const [selectedAnimation, setSelectedAnimation] = useState(null);

  return (
    <div className="p-6">
      <Navigation setCategory={setCategory} />
      <AnimationList category={category} setSelectedAnimation={setSelectedAnimation} />
      <AnimationPreview animation={selectedAnimation} />
      <CodeSnippet animation={selectedAnimation} />
    </div>
  );
};

export default App;
