import React, { useState, useEffect } from 'react';
import MyImageLight from '../assets/images/icon.png'
import MyImageDark from '../assets/images/icondark.png'

const myImageWrapperStyle = {
    display: 'grid',
}

const myImageStyle = {
    width: '96px',
    height: '96px',
    alignSelf: 'center',
}


const ToggleMode = () => {
  let websiteTheme;
  if (typeof window !== `undefined`) {
    websiteTheme = window.__theme;
  }
  useEffect(() => {
    setTheme(window.__theme);
  }, []);

  const [theme, setTheme] = useState(websiteTheme);

  const ThemeToggle = () => {
    window.__setPreferredTheme(websiteTheme === 'dark' ? 'light' : 'dark');
    setTheme(websiteTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="persoImage" style={myImageWrapperStyle} onClick={ThemeToggle}>
      {theme === 'dark' ? (
        <img src={MyImageDark} alt="Dark mode" style={myImageStyle}  />
      ) : (
        <img src={MyImageLight} alt="Light mode" style={myImageStyle} />

      )}
    </div>
  );
};

export default ToggleMode;