import React from "react";

interface CodeSnippetProps {
  animation: { id: string; name: string; css: string } | null;
}

const CodeSnippet: React.FC<CodeSnippetProps> = ({ animation }) => {
  return (
    <div className="p-4 bg-gray-900 text-white rounded-md">
      <h3 className="text-lg font-bold mb-2">CSS Code</h3>
      {animation ? (
        <pre className="overflow-x-auto p-2 bg-gray-800 rounded">
          <code>{animation.css}</code>
        </pre>
      ) : (
        <p className="text-gray-400">Select an animation to view its code.</p>
      )}
    </div>
  );
};

export default CodeSnippet;
