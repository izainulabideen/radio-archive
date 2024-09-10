import React, { useEffect } from "react";
import { useFontConfig } from "./context/FontProvider";

const FontLoader: React.FC = () => {
  const { fontConfig } = useFontConfig();

  useEffect(() => {
    if (!fontConfig) return;

    const style = document.createElement("style");
    document.head.appendChild(style);

    const loadFonts = (font: any) => {
      style.innerHTML += `
        @font-face {
          font-family: '${font.fontname}';
          src: url('/assets/fonts/${font.filename}') format('woff2');
          font-weight: ${font.weight || "normal"};
          font-style: normal;
        }
      `;
    };

    loadFonts({
      fontname: fontConfig.defaultFontName,
      filename: fontConfig.defaultFontFilename,
      weight: fontConfig.defaultFontWeight,
    });
    loadFonts({
      fontname: fontConfig.specificFontName,
      filename: fontConfig.specificFontFilename,
      weight: fontConfig.specificFontWeight,
    });

    document.body.style.fontFamily = fontConfig.defaultFontName;

    return () => {
      document.head.removeChild(style);
    };
  }, [fontConfig]);

  return null;
};

export default FontLoader;