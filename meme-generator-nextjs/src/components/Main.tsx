"use client";

import React, { useState } from "react";

const Main = () => {
  const [meme, setMeme] = useState({
    topText: "One does not simply",
    bottomText: "Walk into Mordor",
    imgUrl: "http://i.imgflip.com/1bij.jpg",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setMeme((prevMeme) => ({ ...prevMeme, [name]: value }));
  };

  return (
    <main className="flex flex-col align-middle justify-center items-center p-5">
      <div className="grid grid-cols-2 py-2 ">
        <label className="grid ">
          Top Text
          <input
            type="text"
            placeholder="One does not simply"
            name="topText"
            className="border rounded-md py-1 mr-8"
            onChange={handleChange}
          />
        </label>

        <label className="grid">
          Bottom Text
          <input
            type="text"
            placeholder="Walk into Mordor"
            name="bottomText"
            className="border rounded-md py-1 mr-8"
            onChange={handleChange}
          />
        </label>
        <button className="col-span-2 my-6 bg-purple-500 py-2 px-3 text-white font-semibold rounded-md ">
          Get a new meme image
        </button>
      </div>
      <div className="relative flex flex-col justify-center items-center">
        <img src="http://i.imgflip.com/1bij.jpg" />
        <span className="absolute top-0 text-center my-4 px-1 font-impact text-4xl uppercase text-white tracking-wide [text-shadow:2px_2px_0_#000,-2px_-2px_0_#000,2px_-2px_0_#000,-2px_2px_0_#000,0_2px_0_#000,2px_0_0_#000,0_-2px_0_#000,-2px_0_0_#000]">
          {meme.topText}
        </span>
        <span className="absolute bottom-0 text-center my-4 px-1 font-impact text-4xl uppercase text-white tracking-wide [text-shadow:2px_2px_0_#000,-2px_-2px_0_#000,2px_-2px_0_#000,-2px_2px_0_#000,0_2px_0_#000,2px_0_0_#000,0_-2px_0_#000,-2px_0_0_#000]">
          {meme.bottomText}
        </span>
      </div>
    </main>
  );
};

export default Main;
