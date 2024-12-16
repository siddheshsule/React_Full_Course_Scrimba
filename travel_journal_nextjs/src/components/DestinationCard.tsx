import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";

interface Props {
  img: {
    src: string;
    alt: string;
  };
  country: string;
  googleMapsLink: string;
  title: string;
  dates: string;
  text: string;
}

const DestinationCard = ( {img,
    country,
    googleMapsLink,
    title,
    dates,
    text}:Props) => {
  return (
    <div className="flex">
      <div className="flex flex-row items-center gap-5">
        <div className="w-[200px] h-[220px] flex-shrink-0 overflow-hidden rounded-2xl ml-5 mr-2">
          <img
            className="h-[100%] w-[100%] object-cover"
            src={img.src}
            alt={img.alt}
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-row items-center gap-2">
            <span className="text-rose-600">
              <FaLocationDot />
            </span>
            <span className="uppercase font-medium tracking-wider">
              {country}
            </span>
            <Link
              href={googleMapsLink}
              className="ml-2 underline text-gray-400"
            >
              View on Google Maps
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold mb-2 mt-0">{title}</h1>
            <span className="font-bold">
              {dates}
            </span>
            <article>{text}</article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
