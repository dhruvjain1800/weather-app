import React, {createContext, useContext, useState} from 'react';
import {Palette, themeScheme} from './theme';

const ThemeContext = createContext({
  isDark: false,
  theme: themeScheme.light,
  toggleTheme: () => {},
});

export const useTheme = () => {
  const theme = useContext(ThemeContext);
  return theme;
};

function ThemeProvider({children}: any) {
  const [dark, setDark] = useState(false);
  const appTheme: Palette = dark ? themeScheme.dark : themeScheme.light;
  return (
    <ThemeContext.Provider
      value={{
        isDark: dark,
        theme: appTheme,
        toggleTheme: () => {
          setDark(!dark);
        },
      }}>
      {children}
    </ThemeContext.Provider>
  );
}

export {ThemeProvider, ThemeContext};
export type {Palette};
