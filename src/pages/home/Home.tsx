import { useEffect, useState } from 'react';
import PhraseDisplay from '../../components/PhraseDisplay';
import NavBar from '../../components/NavBar';
import { addThemeClassToBody, getCurrentTheme } from '../../utils/helpers';
import { ThemeTypes } from '../../utils/types';
import './Home.css';

function Home(): JSX.Element {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const currentTheme = getCurrentTheme();
    setIsDark(currentTheme === ThemeTypes.dark);
    localStorage.setItem('theme', currentTheme);
    addThemeClassToBody(currentTheme);
  }, []);

  const toggleTheme = () => {
    //Check if current theme is dark/light and sets the opposite
    const theme = isDark ? ThemeTypes.light : ThemeTypes.dark;
    localStorage.setItem('theme', theme);
    addThemeClassToBody(theme);
    setIsDark(!isDark);
  };

  return (
    <>
      <NavBar isDark={isDark} toggleTheme={toggleTheme} />
      <main className="main-container">
        <h3 className="main-title">Am I Procrastinating?</h3>
        <PhraseDisplay />
      </main>
    </>
  );
}

export default Home;
