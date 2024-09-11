import { Link } from "react-router-dom";
import { useFontConfig } from "../context/FontProvider";
import { Testimonial as TestimonialProps } from "../interfaces/testimonial";
import { useEffect, useState } from "react";
import { getTestimonialData } from "../lib/testimonial";

function Testimonial() {
  const { fontConfig } = useFontConfig();
  const [data, setData] = useState<TestimonialProps>();

  useEffect(() => {
    (async () => {
      const data = await getTestimonialData();
      if (data) {
        setData(data);
      }
    })();
  }, []);
  return (
    <div className="mx-4 md:mx-10 my-12 px-4 py-16 rounded-xl relative bg-gradient-to-r bg-color2">
      <div className="absolute inset-0 overflow-hidden">
        {/* <img src="https://readymadeui.com/cardImg.webp" alt="Background Image" className="w-full h-full object-cover opacity-50" /> */}
        <p
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center text-color1 font-extrabold w-full h-full object-cover opacity-5 text-9xl sm:text-[12rem] md:text-[16rem] min-w-max -rotate-12"
          style={{ fontFamily: `${fontConfig?.specificFontName}` }}
        >
          {data?.backgroundText}
        </p>
      </div>

      <div className="relative max-w-3xl mx-auto px-8 z-10 text-center text-white">
        <h3
          className="text-2xl md:text-3xl font-extrabold leading-tight mb-6 text-color1"
          style={{ fontFamily: `${fontConfig?.specificFontName}` }}
        >
          {data?.testimonialText}
        </h3>
        <div className="flex items-center justify-center">
          <Link
            to={data?.buttonLink || "/"}
            className="max-w-fit bg-color1 hover:bg-color4 text-white text-xs sm:text-base tracking-wide px-6 py-3 rounded-full transition duration-300 ease-in-out shadow-lg hover:shadow-xl uppercase"
          >
            {data?.buttonText}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
