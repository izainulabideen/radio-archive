// src/context/FontProvider.tsx
import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface FontContextProps {
  fontConfig: {
    defaultFontName: string,
    defaultFontWeight: string,
    defaultFontFilename: string,
    specificFontName: string,
    specificFontWeight: string,
    specificFontFilename: string,

  } | null;
}

const FontContext = createContext<FontContextProps>({ fontConfig: null });

interface FontProviderProps {
  children: ReactNode;
}

export const FontProvider: React.FC<FontProviderProps> = ({ children }) => {
  const [fontConfig, setFontConfig] = useState<FontContextProps | any>();

  useEffect(() => {
    const loadFontConfig = async () => {
      try {
        const response = await fetch(`${import.meta.env.BASE_URL}_common/font.json`);
        const data = await response.json();
        setFontConfig(data);
      } catch (error) {
        console.error('Error loading font configuration:', error);
      }
    };

    loadFontConfig();
  }, []);

  return (
    <FontContext.Provider value={{ fontConfig }}>
      {children}
    </FontContext.Provider>
  );
};

export const useFontConfig = () => useContext(FontContext);
