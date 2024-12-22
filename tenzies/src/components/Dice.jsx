"use client";
import React from "react";

const Dice = (props) => {
  return (
    <button className="flex justify-center items-center h-10 w-10 bg-white shadow-md rounded-md">
      {props.value}
    </button>
  );
};

export default Dice;
