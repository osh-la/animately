import React from "react";

const CodeSnippet = ({ animation }) => {
  return animation ? (
    <pre className="bg-gray-900 text-white p-4 rounded mt-4">
      <code>{animation.css}</code>
    </pre>
  ) : null;
};

export default CodeSnippet;
