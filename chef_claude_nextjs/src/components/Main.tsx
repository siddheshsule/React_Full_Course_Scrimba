'use client'

import { FormEvent } from "react";
import { useState } from "react";


const Main = () => {

  const[ingredients, setIngredients] = useState<string[]>([]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget as HTMLFormElement);
    const newIngredient = formData.get("ingredient") as string;
    if(newIngredient === "") {
      alert("Please enter an ingredient.");
      return;
    }
    if(!ingredients.includes(newIngredient)) {
      setIngredients([...ingredients, newIngredient]);

    } else {
      alert("This ingredient is already on the list.");
      return;
    }
    console.log(ingredients);
  }

  const handleReset = () => {
    setIngredients([]); 

  }
  return (
    <div className="mt-16 flex flex-col items-center align-center p-5">
      <div className="flex flex-col">
        <form className="flex flex-row gap-3" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="e.g. oregano"
            className="border p-2 rounded-lg min-w-[400px]"
            name="ingredient"
          />
          <button className="bg-black text-blue-50 py-2 text-lg px-8 rounded-lg">
            + Add ingredient
          </button>
          <button onClick={handleReset} className="bg-white text-black border-2 hover:bg-gray-200 transition-all duration-500 py-2 text-lg px-8 rounded-lg">
            Reset
          </button>
        </form>

        <div className="ml-5">
          <h2 className="text-3xl font-semibold mt-5">Ingredients on hand:</h2>
          <ul className="space-y-3 text-lg ml-5 mt-5">
            {ingredients.map((item, index) => (
              <li key={index} className="my-2 list-disc">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Main;
