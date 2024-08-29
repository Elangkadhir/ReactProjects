import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import Layouts from "../../Layouts";

function StarRater({ noOfStar = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (getCurrentIndex) => {
    console.log("index", getCurrentIndex);
    setRating(getCurrentIndex);
  };

  const handleMouseEnter = (getCurrentIndex) => {
    console.log("index", getCurrentIndex);
    setHover(getCurrentIndex);
  };
  const handleMouseLeave = (getCurrentIndex) => {
    console.log("index", getCurrentIndex);
    setHover(getCurrentIndex);
  };

  return (
    <Layouts>
      <div className="star-rating flex">
        {[...Array(noOfStar)].map((_, index) => {
          index += 1;
          return (
            <FaStar
              size={40}
              key={index}
              onClick={() => handleClick(index)}
              onMouseMove={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              className={
                index <= (hover || rating) ? "text-yellow-500" : "text-white"
              }
            />
          );
        })}
      </div>
    </Layouts>
  );
}

export default StarRater;
