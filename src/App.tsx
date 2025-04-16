import React, { useState, useEffect } from "react";
import AnimationPreview from "./components/AnimationPreview";
import AnimationList from "./components/AnimationList";
import CodeSnippet from "./components/CodeSnippet";

const App: React.FC = () => {
  const [selectedAnimation, setSelectedAnimation] = useState<{
    id: string;
    name: string;
    css: string;
  } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);
const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : 100));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen">
      
      <div
        className={`fixed p-6 top-0 left-0 w-full h-screen bg-black flex flex-col items-center justify-around transition-transform duration-1000 ease-in-out ${
          loading ? "translate-y-0" : "-translate-y-full"
        }`}
      >
          <h1 className=" tracking-in-contract text-6xl font-extrabold italic text-amber-50">Animately</h1>
        <div className="mt-4 text-4xl text-amber-50 font-bold">{progress}%</div>
      </div>

      
      <div className={`transition-opacity duration-1000 ${loading ? "opacity-0" : "opacity-100"}`}>
       

        <div className="">
          <AnimationList onSelectAnimation={setSelectedAnimation} />
          <AnimationPreview animation={selectedAnimation} />
          <CodeSnippet animation={selectedAnimation} />
        </div>
      </div>
      <div className="flex justify-center">
        <p className="font-semibold">©Osh_la </p>
      </div>
    </div>
  );
};

export default App;
