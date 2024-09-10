import { useFontConfig } from "../context/FontProvider";

export default function NotFound() {
  const { fontConfig } = useFontConfig();
    return (
      <div className="min-h-screen px-4 md:px-10 py-10 flex justify-center items-center">
        <div className="text-5xl" style={{fontFamily: `${fontConfig?.specificFontName}`}}>Page not found</div>
      </div>
    );
  }
  