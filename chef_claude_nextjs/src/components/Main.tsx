
const Main = () => {
  return (
    <div className="mt-16 flex flex-col items-center justify-center ">
      <form action="submit" className="flex flex-row gap-3">
        <input
          type="text"
          placeholder="e.g. oregano"
          className="border p-2 rounded-lg min-w-[400px]"
        />
        <button className="bg-black text-blue-50 py-2 text-lg px-8 rounded-lg">
          + Add ingredient
        </button>
      </form>
    </div>
  );
};

export default Main;
