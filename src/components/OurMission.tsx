import { mission1, mission2 } from "../assets/images";
import { GoArrowDownRight } from "react-icons/go";
import { scrollToSection } from "../lib/scroll";
import { useFontConfig } from "../context/FontProvider";
import { getImageSrc } from "../lib/set-image-src";

function OurMission(data: {
  data: {
    missionTopHeading: string;
    missionHeading: string;
    missionDetails: {
      missionContentHeading: string;
      missionContent: string;
      buttonText: string;
      buttonLink: string;
      missionImage1: string;
      missionImage2: string;
    };
  };
}) {
  const { fontConfig } = useFontConfig();
  return (
    <div className="py-12 px-4 md:px-10">
      <div
        className="max-w-lg mx-auto"
        style={{ fontFamily: `${fontConfig?.specificFontName}` }}
      >
        <div className="flex justify-center items-center gap-2">
          <GoArrowDownRight />
          <span>{data?.data?.missionTopHeading || "Our Mission"}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-light text-center">
          {data?.data?.missionHeading ||
            "we are revolutionizing the way radio history is preserved and accessed"}
        </h2>
      </div>
      <div className="flex max-lg:flex-col px-4 my-12 gap-12">
        <div className="flex-[1]">
          <h2
            className="text-3xl mb-6"
            style={{ fontFamily: `${fontConfig?.specificFontName}` }}
          >
            {data?.data?.missionDetails?.missionContentHeading ||
              "A Time Machine For Radio"}
          </h2>
          <p className="text-sm leading-relaxed">
            {data?.data?.missionDetails?.missionContent &&
              "Imagine having the power to tune into any AM or FM channel, not just live, but at any moment from the past decade. With our groundbreaking technology, you can shift through time by adjusting the year, month, day, hour, and minute, all while staying on your chosen channel. Need to find a specific moment? Perform a text search across years of broadcasts to instantly locate and play back any phrase from programs, advertisements, or news."}
          </p>
          <div className="mt-8 flex max-sm:flex-col text-center sm:space-x-4 max-sm:space-y-6">
            <div
              onClick={() =>
                scrollToSection(
                  `${data?.data?.missionDetails?.buttonLink || "products"}`
                )
              }
              className="cursor-pointer px-6 py-3 text-sm font-semibold text-color1 bg-color2 rounded-full hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105 focus:ring-2 focus:ring-color2 focus:outline-none focus:ring-opacity-50"
            >
              {data?.data?.missionDetails?.buttonText || "Learn More"}
            </div>
          </div>
        </div>
        <div className="flex-[2] grid sm:grid-cols-2 gap-8 max-md:max-w-lg mx-auto">
          <div className="rounded-2xl">
            <img
              src={getImageSrc(data?.data?.missionDetails?.missionImage1, mission1)}
              alt="Mission 1"
              width={200}
              height={200}
              className="w-full h-full max-h-80 object-cover rounded-2xl shadow-xl"
            />
          </div>

          <div className="rounded-2xl">
            <img
              src={getImageSrc(data?.data?.missionDetails?.missionImage2, mission2)}
              alt="Mission 2"
              width={200}
              height={200}
              className="w-full h-full max-h-80 object-cover rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurMission;
