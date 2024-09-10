// src/context/FontProvider.tsx
import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface FontConfig {
  name: string;
  file: string;
  weight?: string;
}

interface FontContextProps {
  fontConfig: {
    defaultFont: FontConfig;
    specificFont: FontConfig;
  } | null;
}

const FontContext = createContext<FontContextProps>({ fontConfig: null });

interface FontProviderProps {
  children: ReactNode; // Specify that children is a ReactNode
}

export const FontProvider: React.FC<FontProviderProps> = ({ children }) => {
  const [fontConfig, setFontConfig] = useState<{ defaultFont: FontConfig; specificFont: FontConfig } | null>(null);

  useEffect(() => {
    const loadFontConfig = async () => {
      try {
        const response = await fetch(`${import.meta.env.BASE_URL}fonts/fontConfig.json`);
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
