import React, { useContext, useEffect, useState } from "react";
import Sun from "../img/sun.gif";
import Moon from "../img/moon.gif";
import Logo from "../img/logo.png";
import { ColorContext } from "../Context/ContextColor";

function Home() {
  const [changeBody, setChangeBody] = useState(false);
  const { setIsHighlighted } = useContext(ColorContext);

  useEffect(() => {
    const body = document.body;
    body.style.background = changeBody ? "black" : "#f0e9fd";
    setIsHighlighted(changeBody);
  }, [changeBody, setIsHighlighted]);

  const handleChangeBody = () => {
    setChangeBody(!changeBody);
  };

  return (
    <div>
      <div className="container-logo">
        <div className="container-logo">
          <img className="logo" src={Logo} alt="logo" />
          <h1
            style={{ color: changeBody === false ? "black" : "white" }}
            className="logo"
          >
            LinearGradients
          </h1>
        </div>
        <button className="changebody" onClick={handleChangeBody}>
          {changeBody ? (
            <div className="container-icon-body">
              <img className="icon-body" src={Sun} alt="" />
              Light
            </div>
          ) : (
            <div className="container-icon-body">
              <img className="icon-body" src={Moon} alt="moon" />
              Dark
            </div>
          )}
        </button>
      </div>
    </div>
  );
}

export default Home;
