import React, { useState, useEffect } from "react";
import { IoMdPlay } from "react-icons/io";
import { IoMdPause } from "react-icons/io";
import { IoSquareSharp } from "react-icons/io5";

export function useCharWidth() {
  const [width, setWidth] = useState(12);

  useEffect(() => {
    const updateWidth = () => {
      setWidth(window.innerWidth <= 768 ? 6 : 10);
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return width;
}

const Display = ({ passage }) => {
  const [idx, setIdx] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [wpm, setWpm] = useState(300);

  const words = passage.split(/[.,\s]+/);

  const width = useCharWidth();

  const getPivot = (word) => {
    if (word.length <= 2) return 0;
    if (word.length <= 5) return 1;
    if (word.length <= 9) return 2;
    return Math.floor(word.length * 0.35);
  };

  const highlight = (word) => {
    if (word.length <= 0) return null;
    const pivot = getPivot(word);
    return word.split("").map((ch, i) => (
      <span
        key={i}
        style={{ width: `${width * 4}px` }}
        className={`inline-block text-center flex-none ${
          i === pivot ? "text-red-500 font-bold border" : ""
        }`}
      >
        {ch}
      </span>
    ));
  };

  const wordWidth = 4 * width;
  const offset = (word) => {
    return getPivot(word) * wordWidth + wordWidth / 2;
  };

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setIdx((prev) => {
        if (prev >= words.length - 1) {
          clearInterval(interval);
          setIsRunning(false);
          return prev;
        }
        return prev + 1;
      });
    }, 60000 / wpm);

    return () => clearInterval(interval);
  }, [isRunning, wpm, words.length]);

  return (
    <section className="flex flex-col pb-16">
      <div className="flex flex-col w-full">
        <div className="font-bold lg:text-6xl text-4xl w-1/2 border py-10 relative ml-auto font-mono">
          <div
            className="absolute  top-1/2 -translate-y-1/2 w-screen"
            style={{ transform: `translateX(-${offset(words[idx])}px)` }}
          >
            {highlight(words[idx])}
          </div>
        </div>
      </div>
      <div className="flex flex-col mx-auto items-center gap-10 mt-16">
        <div className="flex gap-10">
          {isRunning ? (
            <button
              className="border-2 px-4 py-2 hover:bg-white hover:cursor-pointer hover:text-black"
              onClick={() => {
                setIsRunning(false);
              }}
            >
              <IoMdPause />
            </button>
          ) : (
            <button
              className="border-2 px-4 py-2 hover:bg-white hover:cursor-pointer hover:text-black"
              onClick={() => {
                setIsRunning(true);
              }}
            >
              <IoMdPlay />
            </button>
          )}

          <button
            className="border-2 px-4 py-2 hover:bg-white hover:cursor-pointer hover:text-black"
            onClick={() => {
              setIsRunning(false);
              setIdx(0);
            }}
          >
            <IoSquareSharp />
          </button>
        </div>

        <input
          type="range"
          min={100}
          max={800}
          step={50}
          value={wpm}
          onChange={(e) => setWpm(Number(e.target.value))}
          className="w-64 accent-red-500 cursor-pointer"
        />
        <p>{wpm} WPM</p>
      </div>
    </section>
  );
};

export default Display;
