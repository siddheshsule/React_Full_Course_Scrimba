import { travelData } from "@/data/travel-data";
import Link from "next/link";
import React from "react";
import { FaLocationDot } from "react-icons/fa6";

const MainContent = () => {
  return (
    <div className="flex gap-4 mt-5 max-w-[900px] items-center justify-center">
      {travelData.map((item, index) => (
        <div className="flex flex-row items-center gap-5" key={index}>
          <div className="w-[150px] h-[220px] overflow-hidden rounded-2xl ml-5">
            <img
              src={item.image}
              alt={item.location}
              className="h-[100%] w-[100%] object-cover"
            />
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-row items-center gap-2">
              <span className="text-rose-600">
                <FaLocationDot />
              </span>
              <span className="uppercase font-medium tracking-wider">{item.location}</span>
              <Link
                href={item.googleMapsLink}
                className="ml-2 underline text-gray-400"
              >
                View on Google Maps
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-bold mb-2 mt-0">
                {item.destination}
              </h1>
              <span className="font-bold">
                {item.dateFrom} - {item.dateTo}
              </span>
              <article>{item.description}</article>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainContent;
