import { Ref } from "react";

interface Props {
  handleAction: () => void;
  ref?: Ref<HTMLDivElement>;
}

const CallToAction = ({ handleAction, ref }: Props) => {
  return (
    <div ref={ref} className="flex flex-row items-center justify-center mx-8  bg-gray-200 p-5 rounded-lg space-x-10">
      <div className="flex flex-col space-y-4">
        <h2 className="font-medium text-xl">Ready for a receipe?</h2>
        <p className="text-gray-400">Generate a receipe from your list of ingredients.</p>
      </div>
      <div>
        <button onClick={handleAction} className="bg-amber-600 hover:bg-amber-500 text-blue-50 py-2 px-8 rounded-lg">
          Get a receipe
        </button>
      </div>
    </div>
  );
};

export default CallToAction;
