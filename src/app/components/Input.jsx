import React, { use } from "react";
import { useState } from "react";

const Input = ({ setPassage, temp }) => {
  const [textInput, setTextInput] = useState(temp);
  return (
    <div className="mb-8 mx-auto w-3xl flex flex-col">
      {/* <label htmlFor="">Input</label> */}
      <textarea
        value={textInput}
        onChange={(e) => {
          setTextInput(e.target.value);
        }}
        className="my-4 border-gray-400 h-32 border-2 p-2 focus:outline-none focus:border-gray-200"
      />
      <button
        className="border-2 border-blue-600 w-fit px-8 py-2 hover:cursor-pointer hover:bg-blue-600 active:bg-blue-700 active:border-blue-700"
        onClick={() => {
          setPassage(textInput);
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default Input;
