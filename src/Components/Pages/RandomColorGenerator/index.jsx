import React, { useState } from "react";
import Layouts from "../../Layouts";

function ColorGenerator() {
  const [colorType, setColorType] = useState("hex");

  const [colorValue, setColorValue] = useState("");

  const handleColorType = (color) => {
    setColorType(color);

    if (color === "hex") {
      setColorValue("#fff");
    } else {
      setColorValue("rgb(0,0,0)");
    }
  };

  const randomUtility = (length) => {
    return Math.floor(Math.random() * length);
  };

  const handleColorGenerate = () => {
    if (colorType === "hex") {
      let hex = "#";
      const value = [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
      ];

      for (let i = 0; i < 6; i++) {
        hex = hex + `${value[randomUtility(value.length)]}`;
      }
      setColorValue(hex);
    } else {
      let r = randomUtility(256);
      let g = randomUtility(256);
      let b = randomUtility(256);
      setColorValue(`rgb(${r},${g},${b})`);
    }
  };

  return (
    <Layouts>
      <div className="flex flex-col justify-center items-center gap-5">
        <div className="flex gap-2">
          <button
            className="p-2 text-white font-bold bg-red-400 w-40 rounded-md"
            onClick={() => handleColorType("hex")}
          >
            Hex Color
          </button>
          <button
            className="p-2 text-white font-bold bg-red-400 w-40 rounded-md"
            onClick={() => handleColorType("rgb")}
          >
            RGB Color
          </button>
          <button
            className="p-2 text-white font-bold bg-red-400 w-40 rounded-md"
            onClick={handleColorGenerate}
          >
            Generate Color
          </button>
        </div>
        <div className="text-5xl font-bold bg-white p-2 rounded-md">
          {colorType === "hex" ? "HEX COLOR" : "RGB COLOR"}
        </div>
        <div className="text-2xl font-bold bg-white p-2 rounded-md">
          {colorValue}
        </div>
        <div
          className={`w-[400px] h-[300px]`}
          style={{ background: colorValue }}
        ></div>
      </div>
    </Layouts>
  );
}

export default ColorGenerator;
