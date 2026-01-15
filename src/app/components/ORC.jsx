"use client";

import React from "react";
import { useState } from "react";
import Display from "./Display.jsx";
import Input from "./Input.jsx";

const ORC = () => {
  const temp =
    "At dawn, the city pauses between dreams and duty. Tea stalls hiss awake, stray dogs stretch lazily, and newspapers slap softly onto doorsteps. For a moment, time feels negotiable, as if the day is asking permission before fully beginning.";
  const [passage, setPassage] = useState(temp);

  return (
    <div className="">
      <Display passage={passage} />
      <Input setPassage={setPassage} temp={temp} />
    </div>
  );
};

export default ORC;
