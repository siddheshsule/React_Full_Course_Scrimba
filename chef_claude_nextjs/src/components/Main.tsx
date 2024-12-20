"use client";

import { FormEvent } from "react";
import { useState } from "react";
import CallToAction from "./CallToAction";
import { getRecipeFromChefClaude, getRecipeFromMistral } from "@/lib/ai";
import ReceipeCode from "./ReceipeCode";

const Main = () => {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [recipe, setRecipe] = useState<string>("")

  const addIngredient = (formData: FormData) => {
    const newIngredient = formData.get("ingredient") as string;
    if (!newIngredient) {
      alert("Please enter an ingredient.");
      return;
    }
    if (!ingredients.includes(newIngredient)) {
      setIngredients((prev) => [...prev, newIngredient]);
    } else {
      alert("This ingredient is already on the list.");
    }
  };

  const handleRecipe = async () => {
    const recipeMarkdown = await getRecipeFromChefClaude(ingredients);
    setRecipe(recipeMarkdown);
    console.log(recipeMarkdown);
  };

  const handleReset = () => {
    setIngredients([]);
    setRecipe("");
  };

  return (
    <div className="mt-16 flex flex-col items-center align-center p-5">
      <div className="flex flex-col">
        <form
          className="flex flex-row gap-3"
          onSubmit={(e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            addIngredient(formData);
            e.currentTarget.reset();
          }}
        >
          <input
            type="text"
            placeholder="e.g. oregano"
            className="border p-2 rounded-lg min-w-[400px]"
            name="ingredient"
          />
          <button className="bg-black hover:bg-gray-700 text-blue-50 py-2 px-8 rounded-lg">
            + Add ingredient
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              handleReset();
            }}
            className="bg-white text-black border-2 hover:bg-gray-200 transition-all duration-500 py-2 px-8 rounded-lg"
          >
            Reset
          </button>
        </form>

        {ingredients.length > 0 && (
          <section className="m-5">
            <h2 className="text-3xl font-semibold mt-5">Ingredients on hand:</h2>
            <ul className="space-y-3 text-lg ml-5 mt-5">
              {ingredients.map((item, index) => (
                <li key={index} className="my-2 list-disc text-gray-500">
                  {item}
                </li>
              ))}
            </ul>
            {ingredients.length > 3 && (
              <div className="mt-12">
                <CallToAction handleAction={handleRecipe} />
              </div>
            )}
          </section>
        )}

        {recipe && (
          <div className="mt-12">
            <ReceipeCode recipe={recipe} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Main;
