import { Link } from "react-router-dom";
import { logo } from "../assets/images";
import { useEffect, useState } from "react";
import { getSixProductNameSlug } from "../lib/product";
import { scrollToSection } from "../lib/scroll";
import { Footer as FooterProps } from "../interfaces/footer";
import { getFooterData } from "../lib/footer";
import { getImageSrc } from "../lib/set-image-src";

function Footer() {
  const [data, setData] = useState<FooterProps>();
  const [productNames, setProductNames] = useState([
    {
      title: "",
      slug: "",
    },
  ]);

  useEffect(() => {
    const fetchProductSlugs = async () => {
      try {
        const data = await getSixProductNameSlug();
        setProductNames(data);
      } catch (error) {
        console.error("Error fetching product slugs:", error);
      }
    };

    fetchProductSlugs();
  }, []);

  useEffect(() => {
    (async () => {
      const data = await getFooterData();
      if (data) {
        setData(data);
      }
    })();
  }, []);

  return (
    <footer className="bg-color1 border-t-2 border-color2 border-opacity-60 py-12 px-4 md:px-10 tracking-wide relative">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
          <span className="text-color2 text-md uppercase mb-4 block">
            {data?.navigationHeading || "Navigate"}
          </span>
          <ul className="space-y-4">
            {data?.navigation?.map((item, i) => (
              <li key={i}>
                <Link
                  to={item.url}
                  onClick={() => scrollToSection("top")}
                  className="text-color5 text-sm transition-all"
                >
                  {item.linkText}
                </Link>
              </li>
            ))}
            {productNames.map((p) => (
              <li key={p.slug}>
                <Link
                  to={`/product/${p.slug}`}
                  onClick={() => scrollToSection("top")}
                  className="text-color5 text-sm transition-all"
                >
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4 sm:items-end lg:justify-start">
          <Link to="/" onClick={() => scrollToSection("top")}>
            <img
              src={getImageSrc(data?.logo!, logo)}
              alt="logo"
              width={200}
              height={200}
              className="w-60"
            />
          </Link>
          <p className="font-light text-sm text-color5">
            {data?.emailHeading}:{" "}
            <Link
              to={`mailto:${data?.email}`}
              className="font-light text-sm uppercase underline"
            >
              {data?.email}
            </Link>
          </p>
        </div>
      </div>

      <hr className="my-8 border-color1 border-opacity-60" />

      <div className="flex sm:justify-between flex-wrap gap-6">
        <p className="text-color5 text-sm">
          {data?.copyright}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
