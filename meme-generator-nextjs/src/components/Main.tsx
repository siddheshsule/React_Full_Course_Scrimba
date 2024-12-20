"use client";

import React, { useEffect, useState } from "react";

interface Meme {
  topText: string;
  bottomText: string;
  url: string;
}

const Main = () => {
  const [meme, setMeme] = useState<Meme>({
    topText: "One does not simply",
    bottomText: "Walk into Mordor",
    url: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemes, setAllMemes] = useState<Meme[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setMeme((prevMeme) => ({ ...prevMeme, [name]: value }));
  };

  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * allMemes.length);
    const randomMeme = allMemes[randomIndex];
    console.log(randomMeme);
    setMeme((prevMeme) => ({
      ...prevMeme,
      url: randomMeme.url,
    }));
  };


  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(data => {setAllMemes(data.data.memes);
    // console.log(allMemes);
    });
  }, []);

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
        <button onClick={handleClick} className="col-span-2 my-6 bg-purple-500 py-2 px-3 text-white font-semibold rounded-md ">
          Get a new meme image
        </button>
      </div>
      <div className="relative flex flex-col justify-center items-center">
        <img src={meme.url} />
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
