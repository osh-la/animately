import React, { useState, useEffect, useRef } from "react";
import AnimationPreview from "./components/AnimationPreview";
import AnimationList from "./components/AnimationList";
import CodeSnippet from "./components/CodeSnippet";

interface AnimationData {
  id: string;
  name: string;
  css: string;
}

const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms));

const App: React.FC = () => {
  const [selectedAnimation, setSelectedAnimation] = useState<AnimationData | null>(null);
  const [loading, setLoading] = useState(true);
  const [lines, setLines] = useState<string[]>(["", "", "", ""]);
  const [typingDone, setTypingDone] = useState(false);
  const startedRef = useRef(false);

  const fullLines = [
    "Hi, my name is Oshla",
    "I'm a Frontend Engineer or Fullstack developer if you would let me write my beloved PHP 😄",
    "And today, i come bearing gifts ... here you go",
    "Anim8ly",
  ];

  useEffect(() => {
    if (startedRef.current) return; // prevent double-run in Strict Mode
    startedRef.current = true;

    const runTyping = async () => {
      const typingSpeed = 100; // ms per char (adjust)
      const betweenLinesPause = 700; // ms between lines (adjust)
      for (let li = 0; li < fullLines.length; li++) {
        const lineText = fullLines[li];
        // type each character
        for (let ci = 0; ci < lineText.length; ci++) {
          setLines((prev) => {
            const copy = [...prev];
            // Ensure we don't accidentally read undefined index
            if (li >= copy.length) {
              // if fullLines is longer than lines state, extend safely
              copy.length = li + 1;
            }
            copy[li] = (copy[li] || "") + lineText.charAt(ci);
            return copy;
          });
          await sleep(typingSpeed);
        }
        // finished a line, small pause before next line
        await sleep(betweenLinesPause);
      }

      // all lines typed
      setTypingDone(true);
      // wait a bit so user reads the last line, then hide intro
      await sleep(1200);
      setLoading(false);
    };

    runTyping().catch((e) => {
      console.error("Typing intro failed:", e);
      // if anything goes wrong, ensure we don't block the app
      setTypingDone(true);
      setLoading(false);
    });
  }, []);

  // safely compute the index of the line currently typing (or -1 if none)
  const currentTypingIndex = lines.findIndex((l, i) => {
    return typeof fullLines[i] === "string" && l.length < fullLines[i].length;
  });

  return (
    <div className="relative h-screen bg-black font-mono">
      {/* Intro (typewriter) */}
      <div
        className={`fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-center bg-black transition-transform duration-1000 ease-in-out ${
          loading ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="text-center text-amber-50 space-y-4 px-6">
          {lines.map((line, i) => (
            <h1
              key={i}
              className={`whitespace-pre-wrap ${
                i === fullLines.length - 1
                  ? "text-2xl md:text-3xl font-extrabold italic tracking-wider"
                  : "text-2xl md:text-3xl"
              }`}
            >
              {line}
              {((!typingDone && i === currentTypingIndex) ||
                (typingDone && i === fullLines.length - 1))}
            </h1>
          ))}
        </div>
      </div>

      {/* Main App Content */}
      <div className={`transition-opacity duration-1000 ${loading ? "opacity-0" : "opacity-100"}`}>
        <div>
          <AnimationList onSelectAnimation={setSelectedAnimation} />
          <AnimationPreview animation={selectedAnimation} />
          <CodeSnippet animation={selectedAnimation} />
        </div>
      </div>

      <div className="flex justify-center mt-6">
        <p className="font-semibold text-sm text-white">© Osh_la</p>
      </div>
    </div>
  );
};

export default App;
