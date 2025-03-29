import React from "react";

interface CodeSnippetProps {
  animation: { id: string; name: string; css: string } | null;
}

const CodeSnippet: React.FC<CodeSnippetProps> = ({ animation }) => {
    const handleCopy = () => {
      if (animation) {
        navigator.clipboard.writeText(animation.css);
      }
    };
  return (
    <div className="p-4 bg-gray-900 text-white rounded-md">
     <div className="flex justify-between items-center mb-2 ">
     <h3 className=" font-bold text-sm md:text-base">CSS Code</h3>
      <button
            onClick={handleCopy}
            className="mt-4 text-sm md:text-base bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
          >
            Copy Class
          </button>
     </div>
      {animation ? (
        <pre className="overflow-x-auto p-2 text-sm md:text-base rounded">
          <code>{animation.css}</code>
        </pre>
      ) : (
        <p className="text-sm md:text-base text-gray-400">Select an animation to view its code.</p>
      )}
    </div>
  );
};

export default CodeSnippet;
