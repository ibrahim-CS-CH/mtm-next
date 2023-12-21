// // themeContext.tsx
// import React, { createContext, useContext, ReactNode, useState } from 'react';

// interface ThemeContextProps {
//   darkMode: boolean;
//   toggleTheme: () => void;
// }

// const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

// interface ThemeProviderProps {
//   children: ReactNode;
// }

// export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
//   const [darkMode, setDarkMode] = useState(false);

//   const toggleTheme = () => {
//     setDarkMode((prevMode) => !prevMode);
//   };

//   return (
//     <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// export const useTheme = (): ThemeContextProps => {
//   const context = useContext(ThemeContext);

//   if (!context) {
//     throw new Error('useTheme must be used within a ThemeProvider');
//   }

//   return context;
// };
