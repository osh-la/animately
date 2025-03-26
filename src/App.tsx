import React, { useState } from "react";
import AnimationPreview from "./components/AnimationPreview";
import AnimationList from "./components/AnimationList";
import CodeSnippet from "./components/CodeSnippet"

const App: React.FC = () => {
  const [selectedAnimation, setSelectedAnimation] = useState<{
    id: string;
    name: string;
    css: string;
  } | null>(null);

  return (
    <div className="h-screen">
      <nav className="flex justify-between p-6">
        <h1 className="text-4xl font-extrabold">Animately</h1>
      </nav>
   
      <AnimationList onSelectAnimation={setSelectedAnimation} />
    
      <div className="">
        <AnimationPreview animation={selectedAnimation} />
        <CodeSnippet animation={selectedAnimation} />
      </div>
    </div>
  );
};

export default App;
