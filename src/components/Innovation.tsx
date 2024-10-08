import { getSixProducts } from "../lib/product";
import { useEffect, useState } from "react";
import { FaArrowDown, FaArrowRight, FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { scrollToSection } from "../lib/scroll";
import { useFontConfig } from "../context/FontProvider";
import { getImageSrc } from "../lib/set-image-src";

function Innovation(data: { data: { innovationHeading: string } }) {
  const { fontConfig } = useFontConfig();
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      const data = await getSixProducts();
      if (data) {
        setProducts(data);
      }
    })();
  }, []);
  
  return (
    <div id="products" className="px-4 md:px-10 py-12">
      <div className="max-w-7xl max-md:max-w-lg mx-auto">
        <h2
          className="flex justify-center items-center gap-4 uppercase text-4xl text-center"
          style={{ fontFamily: `${fontConfig?.specificFontName}` }}
        >
          {data?.data?.innovationHeading || "OUR INNOVATION"}
          <FaArrowDown />
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {products.length > 0 &&
            products.map((p: any, i: number) => (
              <div
                key={i}
                className="flex flex-col justify-between bg-color1 border-2 border-color2 rounded-2xl overflow-hidden group"
              >
                <div className="p-6">
                  <FaStar />
                  <h3
                    className="text-xl font-bold py-4"
                    style={{ fontFamily: `${fontConfig?.specificFontName}` }}
                  >
                    {p.title}
                  </h3>
                  <Link
                    to={`/product/${p.slug}`}
                    onClick={() => scrollToSection("top")}
                    className="flex uppercase justify-start items-center gap-2 text-white text-sm tracking-wider hover:text-opacity-80"
                  >
                    See More
                    <FaArrowRight />
                  </Link>
                </div>
                <div className="relative overflow-hidden">
                  <img
                    src={getImageSrc(p.coverImage, "")}
                    width={200}
                    height={200}
                    alt={`Innovation ${i + 1}`}
                    className="w-full h-32 object-cover group-hover:scale-125 transition-all duration-300"
                  />
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Innovation;
