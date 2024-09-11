import { FaArrowDown } from "react-icons/fa6";
import { useFontConfig } from "../context/FontProvider";
import { Demo as DemoProps } from "../interfaces/demo";
import { useEffect, useState } from "react";
import { getDemoData } from "../lib/demo";
import ReactPlayer from "react-player";

function Demo() {
  const { fontConfig } = useFontConfig();
  const [data, setData] = useState<DemoProps>();

  useEffect(() => {
    (async () => {
      const data = await getDemoData();
      if (data) {
        setData(data);
      }
    })();
  }, []);

  return (
    <div className="px-4 md:px-10 py-12">
      <div className="max-w-7xl max-md:max-w-lg mx-auto">
        <h2
          className="flex justify-center items-center gap-4 uppercase text-4xl text-center"
          style={{ fontFamily: `${fontConfig?.specificFontName}` }}
        >
          {data?.demoHeading}
          <FaArrowDown />
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">
          {data?.videoList?.map((video) => (
            <div className="bg-color1 cursor-pointer rounded-2xl overflow-hidden group shadow-xl">
              <ReactPlayer
                url={video.video}
                className="w-full md:h-96 min-h-80 max-h-96"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Demo;
