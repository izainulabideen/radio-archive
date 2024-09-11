import { useEffect, useState } from "react";
import { AboutPage as AboutPageProps } from "../../interfaces/about";
import { getAboutData } from "../../lib/about";
import AboutContent from "./AboutContent";
import AboutHero from "./AboutHero";

function About() {
  const [data, setData] = useState<AboutPageProps>();

  useEffect(() => {
    (async () => {
      const data = await getAboutData();
      if (data) {
        setData(data);
      }
    })();
  }, []);
  console.log(data);
  
  return (
    <>
      <AboutHero heroImage={data?.heroImage} headingText={data?.title} />
      <AboutContent content={data?.content} />
    </>
  );
}

export default About;
