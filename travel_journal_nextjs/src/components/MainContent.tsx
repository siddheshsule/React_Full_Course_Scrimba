import travelData from "@/data/travel-data";
import DestinationCard from "./DestinationCard";

const MainContent = () => {
  return (
    <div className="relative gap-4 space-y-5 mt-5 max-w-[900px] justify-center mx-auto">
      {travelData.map((entry, index) => (
        <DestinationCard key={index} {...entry} />
      ))}
    </div>
  );
};

export default MainContent;
