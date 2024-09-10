import { useEffect, useState } from "react";
import Demo from "../components/Demo";
import Hero from "../components/Hero";
import Innovation from "../components/Innovation";
import OurMission from "../components/OurMission";
import { getHomeData } from "../lib/home";
import { HomePage } from "../interfaces/home";

export default function Home() {
  const [data, setData] = useState<HomePage>();

  useEffect(() => {
    (async () => {
      const data = await getHomeData();
      if (data) {
        setData(data);
      }
    })();
  }, []);
  
  return (
    <>
      <Hero heading={data?.heading} buttonText={data?.buttonText} buttonLink={data?.buttonLink} heroImage={data?.heroImage} />
      <OurMission data={data?.sections?.mission} />
      <Innovation />
      <Demo />
    </>
  );
}
