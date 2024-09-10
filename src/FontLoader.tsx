import React, { useEffect } from 'react';
import { useFontConfig } from './context/FontProvider';

const FontLoader: React.FC = () => {
  const { fontConfig } = useFontConfig();

  useEffect(() => {
    if (!fontConfig) return;

    const style = document.createElement('style');
    document.head.appendChild(style);

    const loadFonts = (font: any) => {
      style.innerHTML += `
        @font-face {
          font-family: '${font.name}';
          src: url('/fonts/${font.file}') format('woff2');
          font-weight: ${font.weight || 'normal'};
          font-style: normal;
        }
      `;
    };

    loadFonts(fontConfig.defaultFont);
    loadFonts(fontConfig.specificFont);

    document.body.style.fontFamily = fontConfig.defaultFont.name;

    return () => {
      document.head.removeChild(style);
    };
  }, [fontConfig]);

  return null;
};

export default FontLoader;