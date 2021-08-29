import React from "react";


function DesPoints(props) {
  let pointsArray = props.points;
  console.log(pointsArray);

  return (
    <div>
    {pointsArray.map((point, index) => {
      if (index % 2 === 0) {
        return(
          <h3 key={index}>
            {point}
          </h3>
        )
      } else if (index % 2 === 1) {
        return(
          <p key={index}>
            {point}
          </p>
        )
      }


    })}
    </div>
  )
}

export default DesPoints;