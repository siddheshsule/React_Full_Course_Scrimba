"use client";
import React from "react";

const Dice = (props) => {   


  return (
    <button onClick={props.hold} className={`flex justify-center items-center h-10 w-10 shadow-md rounded-md ${props.isHeld ? "bg-[#59E391]" : "bg-white"} `}>
      {props.value}
    </button>
  );
};

export default Dice;
