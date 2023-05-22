import React, { useContext, useEffect, useState } from "react";
import Sun from "../img/sun.gif";
import Moon from "../img/moon.gif";
import { ColorContext } from "../Context/ContextColor";

function Home() {
  const [changeBody, setChangeBody] = useState(false);
  const { setIsHighlighted } = useContext(ColorContext);

  useEffect(() => {
    const body = document.body;
    body.style.background = changeBody ? "black" : "#f0e9fd";
    setIsHighlighted(changeBody); // Actualiza el estado isHighlighted en el contexto
  }, [changeBody, setIsHighlighted]);

  const handleChangeBody = () => {
    setChangeBody(!changeBody);
  };

  return (
    <div>
      <div className="container-logo">
        <h1
          style={{ color: changeBody === false ? "black" : "white" }}
          className="logo"
        >
          Ui-LinearGradients
        </h1>
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
