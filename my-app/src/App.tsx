import React, { useState } from 'react';
import './App.css';
import ProfilePic from './ProfilePic/ProflePic';
import Main from './Main/Main';
import { createContext } from 'react';


interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | null>(null)

const App: React.FC = ()=> {

  const [theme, setTheme] = useState<string>("light")

  const toggleTheme = () =>{
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'))
  }

  return (
    <>
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div className="darkTheme">
            <button onClick={toggleTheme} className="dark-mode-toggle" id={theme}></button>
        </div>
        <div className="App" id={theme}>
          <ProfilePic/>
          <br/>
          <Main/>
        </div>
      </ThemeContext.Provider>
    </>
    
  );
}

export default App;
