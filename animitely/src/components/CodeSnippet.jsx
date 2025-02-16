import { useEffect, useState } from "react";

const CodeSnippet = ({ animation }) => {
  const [code, setCode] = useState("");

  useEffect(() => {
    if (animation) {
      setCode(animation.css);
    }
  }, [animation]);

  return (
    <div className="w-96 bg-gray-900 text-white p-4 rounded-md shadow-md">
      <h3 className="text-lg font-semibold mb-2">CSS Code</h3>
      <pre className="overflow-auto p-2 bg-gray-800 rounded-md text-sm">
        <code>{code || "Select an animation to see its CSS"}</code>
      </pre>
    </div>
  );
};

export default CodeSnippet;
