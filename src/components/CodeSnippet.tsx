import React, { useState } from "react";

interface CodeSnippetProps {
  animation: { id: string; name: string; css: string } | null;
}

const CodeSnippet: React.FC<CodeSnippetProps> = ({ animation }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (!animation) return;

    navigator.clipboard.writeText(animation.css).then(() => {
      setCopied(true);

      // Reset text after 1.5 seconds
      setTimeout(() => setCopied(false), 1500);
    });
  };

  return (
    <div className="p-4 bg-gray-900 text-white rounded-md">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-bold text-sm md:text-base">CSS Code</h3>
        <button
          onClick={handleCopy}
          className="mt-4 text-sm md:text-base bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition active:bg-gray-900 active:scale-95"
        >
          {copied ? "Copied!" : "Copy Class"}
        </button>
      </div>

      {animation ? (
        <pre className="overflow-x-auto p-2 text-sm md:text-base rounded">
          <code>{animation.css}</code>
        </pre>
      ) : (
        <p className="text-sm md:text-base text-gray-400">
          Select an animation to view its code.
        </p>
      )}

     <div className="flex justify-center">
     <button className="mt-4 text-sm md:text-base bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition">
        Generate Tailwind coming soon...
      </button>
     </div>
    </div>
  );
};

export default CodeSnippet;
