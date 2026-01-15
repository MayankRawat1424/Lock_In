import React, { useEffect, useState } from "react";

const Display = ({ passage }) => {
  const [index, setIndex] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const words = passage.split(/[.,\s]+/);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setIndex((prev) => {
        if (prev >= words.length - 1) {
          clearInterval(interval);
          setIsRunning(false);
          return prev;
        }
        return prev + 1;
      });
    }, 300);

    return () => clearInterval(interval);
  }, [isRunning, words.length]);

  return (
    <div className="mb-8 mx-auto w-3xl flex flex-col">
      <p className="font-bold text-8xl">{words[index]}</p>
      <p>{passage}</p>
      <button
        className="border-2 border-blue-600 w-fit px-8 py-2 hover:cursor-pointer hover:bg-blue-600 active:bg-blue-700 active:border-blue-700"
        onClick={() => {
          setIndex(0);
          setIsRunning(true);
        }}
      >
        Start
      </button>
    </div>
  );
};

export default Display;
