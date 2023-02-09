import React, { useState } from "react";

import { useAppThemeContext } from "../AppThemeProvider";

const Logo = (props) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const {width = windowWidth <= 820 ? "24" : "156", height = windowWidth <= 820 ? "34" : "36"} = props;
  const {appTheme} = useAppThemeContext();
  const mainFillColor = appTheme === "dark" ? "white" : "#0A2C40";

  window.addEventListener('resize', () => {
    setWindowWidth(window.innerWidth);
  });

  return (
    <>
      <img
        className={className}
        src='/images/logo.png'
        height='16.6px'
      />
    </>
  );
};

export default Logo;
