import { logo } from "../assets/images";
import { useState } from "react";
import ProductMenu from "./menu/Product";
import { Link } from "react-router-dom";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const pathname = window.location.pathname || "/";

  return (
    <header className="flex bg-color1 min-h-[70px] tracking-wide relative z-50">
      <div className="flex flex-wrap items-center justify-between px-4 md:px-10 py-3 gap-4 w-full">
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            height={200}
            width={200}
            className="w-36"
          />
        </Link>

        <div
          id="collapseMenu"
          className="max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50"
          style={{ display: openMenu ? "block" : "none" }}
        >
          <button
            id="toggleClose"
            className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-color3 fill-color2 p-3"
            onClick={() => setOpenMenu(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4"
              viewBox="0 0 320.591 320.591"
            >
              <path
                d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                data-original="#000000"
              ></path>
              <path
                d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                data-original="#000000"
              ></path>
            </svg>
          </button>

          <ul className="lg:flex uppercase lg:gap-x-10 max-lg:space-y-3 max-lg:fixed max-lg:bg-color3 max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
            <li
              className="mb-6 hidden max-lg:block"
              onClick={() => setOpenMenu(false)}
            >
              <Link to="/">
                <img
                  src={logo}
                  alt="logo"
                  height={70}
                  width={120}
                  className="w-36"
                />
              </Link>
            </li>
            <li
              className="max-lg:border-b max-lg:py-3"
              onClick={() => setOpenMenu(false)}
            >
              <Link
                to="/"
                className={`hover:text-opacity-80 text-color2 text-sm ${
                  pathname === "/" ? "font-bold" : ""
                } block`}
              >
                Home
              </Link>
            </li>
            <ProductMenu
              pathname={pathname}
              handleMenu={() => setOpenMenu(false)}
            />
            <li
              className="max-lg:border-b max-lg:py-3"
              onClick={() => setOpenMenu(false)}
            >
              <Link
                to="/about"
                className={`hover:text-opacity-80 text-color2 text-sm ${
                  pathname === "/about" ? "font-bold" : ""
                } block`}
              >
                About
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center space-x-8 max-lg:ml-auto">
          <Link to="mailto:admin@radio-archive.org">
            <span className="flex text-sm uppercase justify-start items-center gap-2">
              <span className="w-3 h-3 bg-white block rounded-full"></span>
              Get In Touch
            </span>
          </Link>

          <button
            id="toggleOpen"
            className="lg:hidden fill-color2"
            onClick={() => setOpenMenu(true)}
          >
            <svg
              className="w-7 h-7"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
