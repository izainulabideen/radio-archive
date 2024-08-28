import { Link } from "react-router-dom";
import { logo } from "../assets/images";
import { useEffect, useState } from "react";
import { getSixProductNameSlug } from "../lib/api";

function Footer() {
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
  return (
    <footer className="bg-color1 border-t-2 border-color2 border-opacity-60 py-12 px-4 md:px-10 tracking-wide relative">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
          <h2 className="text-color2 text-md uppercase mb-4">Navigate</h2>
          <ul className="space-y-4">
            <li>
              <Link to="/about" className="text-color5 text-sm transition-all">
                About Us
              </Link>
            </li>
            {productNames.map((p) => (
              <li key={p.slug}>
                <Link
                  to={`/product/${p.slug}`}
                  className="text-color5 text-sm transition-all"
                >
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4 sm:items-end lg:justify-start">
          <Link to="/">
            <img
              src={logo}
              alt="logo"
              width={200}
              height={200}
              className="w-60"
            />
          </Link>
          <p className="font-light text-sm text-color5">
            E:{" "}
            <Link
              to="mailto:admin@radio-archive.org"
              className="font-light text-sm uppercase underline"
            >
              admin@radio-archive.org
            </Link>
          </p>
        </div>
      </div>

      <hr className="my-8 border-color1 border-opacity-60" />

      <div className="flex sm:justify-between flex-wrap gap-6">
        <p className="text-color5 text-sm">
          ©2024 Radio Archiv.org, All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
