import { FaArrowDown } from "react-icons/fa6";
import { useFontConfig } from "../context/FontProvider";

function Demo() {
  const { fontConfig } = useFontConfig();
  
  return (
    <div className="px-4 md:px-10 py-12">
      <div className="max-w-7xl max-md:max-w-lg mx-auto">
        <h2 className="flex justify-center items-center gap-4 uppercase text-4xl text-center" style={{fontFamily: `${fontConfig?.specificFontName}`}}>
          Demo
          <FaArrowDown />
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">
          <div className="bg-color1 cursor-pointer rounded-2xl overflow-hidden group shadow-xl">
            <iframe src="https://www.youtube.com/embed/pKTcJOP4IgE"  className="w-full md:h-96 min-h-80 max-h-96 "></iframe>
          </div>
          <div className="bg-color1 cursor-pointer rounded-2xl overflow-hidden group shadow-xl">
            <iframe src="https://www.youtube.com/embed/-1IiP2OSIjE" className="w-full md:h-96 min-h-80 max-h-96"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Demo;
