'use client'

const Main = () => {
  const ingredients = [
    "Chicken breasts",
    "Beef",
    "Pork",
    "Fish",
    "Vegetables",
    "Fruits",
    "Spices",
    "Herbs",
  ];

  const handleButtonClick = () => {
    console.log("Button clicked");
  }
  return (
    <div className="mt-16 flex flex-col items-center align-center p-5">
      <div className="flex flex-col">
        <form action="submit" className="flex flex-row gap-3">
          <input
            type="text"
            placeholder="e.g. oregano"
            className="border p-2 rounded-lg min-w-[400px]"
          />
          <button onClick={handleButtonClick} className="bg-black text-blue-50 py-2 text-lg px-8 rounded-lg">
            + Add ingredient
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
