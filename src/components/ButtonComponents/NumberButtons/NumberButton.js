import React from "react";

const NumberButton = (props) => {
  // console.log(numberState);
  // console.log();
  if (props.button === "0") {
    return (    
    <button >
    {props.button}
  </button>)
  }
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */
      }
      <button>
        {props.button}
        </button>
    </>
  );
};
export default NumberButton;