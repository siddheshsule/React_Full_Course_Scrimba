"use client";

import React, { useEffect, useState } from "react";
import Dice from "./Dice";
import { nanoid } from "nanoid";
import Confetti from "./Confetti";

const Main = () => {
  const [dice, setDice] = useState([]);

  let gameWon = dice.every((die) => die.value === dice[0].value);

  useEffect(() => {
    setDice(generateAllNewDice());
  }, []);

  const generateAllNewDice = () => {
    return new Array(10).fill(0).map(() => ({
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    }));
  };

  const rollDice = () => {
    if (gameWon) {
      setDice(generateAllNewDice());
      return;
    }
    setDice((oldDice) =>
      oldDice.map((die) =>
        die.isHeld ? die : { ...die, value: Math.ceil(Math.random() * 6) }
      )
    );
  };

  const diceElements = dice.map((dieObj) => {
    return (
      <Dice
        key={dieObj.id}
        value={dieObj.value}
        isHeld={dieObj.isHeld}
        hold={() => hold(dieObj.id)}
      />
    );
  });

  const hold = (id) => {
    setDice((oldDice) =>
      oldDice.map((die) =>
        die.id === id ? { ...die, isHeld: !die.isHeld } : die
      )
    );
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-[360px] max-h-[379px] bg-[#0B2434] h-screen">
        <div className="flex flex-col mx-5 my-8 items-center max-w-[320px] max-h-[320px] rounded-xl bg-[#F5F5F5] h-screen">
          <div className="flex flex-col items-center mx-10">
            <h1 className="font-bold text-2xl mt-8 text-[#2B283A]">Tenzies</h1>
            <p className="flex text-sm text-center text-[#4A4E74]">
              Roll until all dice are the same. Click each die to freeze it at
              its current value between rolls.
            </p>
          </div>
          {
            gameWon &&
            <><Confetti /><div className="flex text-center text-[#4A4E74] mt-4">
              <h1 className="font-bold text-2xl">You Win!</h1>
            </div></>


          }
          <div className="grid grid-cols-5 gap-4 my-auto">{diceElements}</div>
          <div className="mb-6">
            <button
              onClick={rollDice}
              className="flex text-center bottom-0 hover:bg-[#5e46fa] text-white px-8 py-1 rounded-md bg-[#5035FF]"
            >
              {gameWon ? "Play Again" : "Roll"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
