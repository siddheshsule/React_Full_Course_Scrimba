import React from "react";
import Markdown from "react-markdown";

const RecipeCode = (props: { recipe: string}) => {
    // const markdownExample = "# Parsley Butter Baked Fish ## Ingredients: - 4 fillets of fish (such as cod, tilapia, or salmon) - 1/2 cup unsalted butter, softened - 2 tablespoons fresh parsley, finely chopped - 1/2 teaspoon salt - 1/4 teaspoon black pepper ## Instructions: 1. Preheat your oven to 400°F (200°C). 2. In a small bowl, combine the softened butter, chopped parsley, salt, and black pepper. Mix well until fully incorporated. 3. Place the fish fillets in a baking dish. Spread the parsley butter evenly over the top of the fish. 4. Bake the fish for 15-20 minutes, or until it flakes easily with a fork and is cooked through. 5. Serve the parsley butter baked fish immediately, garnished with additional fresh parsley if desired. Enjoy with a side of your choice, such as steamed vegetables or a salad. This recipe utilizes the milk, butter, and parsley you have available, and pairs them with a simple yet flavorful baked fish dish. The parsley butter adds a lovely bright and savory element to the fish, making for a delicious and easy-to-prepare meal."
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-5">Chef Claude Recommends:</h2>
      <article className="text-[#475467] text-lg" aria-live="polite">
        {/* {props.recipe} */}
        <Markdown>{props.recipe}</Markdown>
      </article>
    </section>
  );
};

export default RecipeCode;
