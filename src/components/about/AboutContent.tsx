import { Link } from "react-router-dom";
import { useFontConfig } from "../../context/FontProvider";

function AboutContent() {
  const { fontConfig } = useFontConfig();
  return (
    <div className="px-4 md:px-10 py-12">
      <div className="max-w-2xl mx-auto">
        <div>
          <h2 className="text-4xl font-extrabold text-color2 mb-4 text-center" style={{fontFamily: `${fontConfig?.specificFontName}`}}>
            Our Mission
          </h2>
          <p className="text-color2 text-center text-xl mt-4" style={{fontFamily: `${fontConfig?.specificFontName}`}}>
            At Radio Archive, we are revolutionizing the way radio history is
            preserved and accessed. Our innovative technology empowers you to
            explore the rich heritage of radio broadcasts, offering a seamless
            journey through time.
          </p>
        </div>
        {/* <hr className="my-10" /> */}
        <div className="grid gap-16 py-12">
          <div>
            <h3 className="text-center text-3xl font-bold text-color2" style={{fontFamily: `${fontConfig?.specificFontName}`}}>
              Development Timeline
            </h3>
            <div className="mt-4">
              <ul className="py-4 ms-6 list-disc">
                <li className="text-lg">
                  <span className="font-bold">2015: </span>Began research into
                  full-spectrum radio collector design.
                </li>
                <li className="text-lg">
                  <span className="font-bold">2019: </span>Software engineering
                  commences.
                </li>
                <li className="text-lg">
                  <span className="font-bold">2020: </span>Deployed first FM
                  prototype collectors in Los Angeles and Orange County.
                </li>
                <li className="text-lg">
                  <span className="font-bold">2021: </span>AM radio collectors
                  completed and deployed.
                </li>
                <li className="text-lg">
                  <span className="font-bold">2022: </span>Doubled recording
                  channel density, improved collector uptime to 99.998%.
                </li>
                <li className="text-lg">
                  <span className="font-bold">2023: </span>Introduced GPU-based
                  real-time speech-to-text transcription with advanced search
                  capabilities.
                </li>
                <li className="text-lg">
                  <span className="font-bold">2024: </span>Refined collector
                  hardware for improved durability, scalability, and reduced
                  size.
                </li>
              </ul>
            </div>
          </div>
          <div className="max-w-lg mx-auto">
            <h3 className="text-center text-3xl font-bold text-color2" style={{fontFamily: `${fontConfig?.specificFontName}`}}>
              Contact Us
            </h3>
            <div className="mt-4">
              <p className="text-color2 text-center text-lg" style={{fontFamily: `${fontConfig?.specificFontName}`}}>
                Interested in accessing our archives, licensing our technology,
                or sponsoring a new geographic area?
              </p>
              <p className="text-color2 text-center text-lg mt-6" style={{fontFamily: `${fontConfig?.specificFontName}`}}>
                Email us at{" "}
                <Link to="mailto:admin@radio-archive.org" className="underline">
                  admin@radio-archive.org
                </Link>{" "}
                Or connect with us on{" "}
                <Link
                  to="https://www.linkedin.com/company/radio-archive-org"
                  className="underline"
                >
                  LinkedIn
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutContent;
