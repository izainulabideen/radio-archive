import { hero } from "../assets/images";
import { useFontConfig } from "../context/FontProvider";
import { scrollToSection } from "../lib/scroll";

function Hero({
  heading,
  buttonText,
  buttonLink,
  heroImage,
}: {
  heading: string| undefined;
  buttonText: string | undefined;
  buttonLink: string | undefined;
  heroImage: string | undefined;
}) {
  const { fontConfig } = useFontConfig();

  return (
    <div className="grid md:grid-cols-2 px-4 md:px-10 py-12 items-center md:gap-8 gap-6 mx-auto">
      <div className="max-md:order-1 max-md:text-center">
        <h1
          className="lg:text-6xl md:text-5xl text-4xl lg:leading-[5rem] md:leading-[4rem] font-extrabold text-color2 mb-4"
          style={{ fontFamily: `${fontConfig?.specificFontName}` }}
        >
          {heading || "Preserving Radio Heritage with Cutting-Edge Technology"}
        </h1>
        <div className="mt-8 flex max-sm:flex-col sm:space-x-4 max-sm:space-y-6">
          <div
            onClick={() => scrollToSection(buttonLink || "product")}
            className="cursor-pointer px-6 py-3 text-sm font-semibold text-color1 bg-color2 rounded-full hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105 focus:ring-2 focus:ring-color2 focus:outline-none focus:ring-opacity-50"
          >
            {buttonText || "Learn about our Products"}
          </div>
        </div>
      </div>
      <div className="md:h-[450px] max-h-[450px]">
        <img
          src={heroImage || hero}
          className="w-full h-full max-h-[450px] object-cover rounded-lg shadow-xl"
          width={400}
          height={400}
          alt="Dining Experience"
        />
      </div>
    </div>
  );
}

export default Hero;
