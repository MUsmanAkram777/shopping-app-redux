import React from "react";
import StarFill from "./StarFill";

function Review({ rate, count, color = null }) {
  const filledStars = Math.floor(rate);
  const halfStar = rate - filledStars >= 0.5;
  
  return (
    <div className="my-4 flex items-center">
      <span className="flex items-center space-x-1">
        {[...Array(filledStars)].map((_, index) => (
          <StarFill key={index} filled />
        ))}

        {halfStar && <StarFill key="half" filled />}
        {[...Array(5 - filledStars - (halfStar ? 1 : 0))].map((_, index) => (
          <StarFill key={index} />
        ))}

        <span className={`ml-3 inline-block text-white font-bold text-xs ${color}`}>
          {count} Reviews
        </span>
      </span>
    </div>
  );
}

export default Review;
