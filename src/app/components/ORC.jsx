"use client";

import React from "react";
import { useState } from "react";
import Display from "./Display.jsx";

const ORC = () => {
  const temp =
    "At dawn, the city pauses between dreams and duty. Tea stalls hiss awake, stray dogs stretch lazily, and newspapers slap softly onto doorsteps. For a moment, time feels negotiable, as if the day is asking permission before fully beginning.";
  const [passage, setPassage] = useState(temp);

  return (
    <div className="">
      <Display passage={passage} />
      <textarea
        name=""
        id=""
        value={passage}
        onChange={(e) => {
          setPassage(e.target.value);
        }}
        className="flex mx-auto w-full max-w-4xl h-32 focus:outline-none border px-2 py-1 "
      ></textarea>
    </div>
  );
};

export default ORC;
