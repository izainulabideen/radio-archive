import { aboutUs } from "../../assets/images";
import { useFontConfig } from "../../context/FontProvider";

function AboutHero() {
  const { fontConfig } = useFontConfig();
  return (
    <div className="relative before:absolute before:w-full before:h-full before:inset-0 before:bg-black/50 before:z-10">
      <img
        src={aboutUs}
        alt={"About Us"}
        width={400}
        height={400}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="min-h-[280px] px-4 md:px-10 relative z-40 h-full flex flex-col justify-center items-center text-center p-6">
        <div className="bg-color2 p-4 rounded-xl text-center max-w-md w-full">
          <h1 className="text-color1 sm:text-3xl uppercase text-2xl font-bold" style={{fontFamily: `${fontConfig?.specificFontName}`}}>
            About Us
          </h1>
        </div>
      </div>
    </div>
  );
}

export default AboutHero;
