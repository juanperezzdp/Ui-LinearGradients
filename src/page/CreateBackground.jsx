import React, { useContext, useState } from "react";
import Check from "../img/check.gif";
import icons from "../img/icons.gif";
import { ColorContext } from "../Context/ContextColor";

function CreateBackground() {
  const [colorfirst, setColorfirst] = useState("Green");
  const [colorsecondary, setColorsecondary] = useState("Blue");
  const [cover, setCover] = useState("");
  const [copied, setCopied] = useState(false);

  const { isHighlighted } = useContext(ColorContext);

  const handleCopie = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 2000);
      })
      .catch((error) => {
        console.error("Error copie", error);
      });
  };

  return (
    <div className="container-generator">
      <div>
        <div className="container-col">
          <div
            className="container-background"
            style={{
              background: `linear-gradient(220.55deg, ${colorfirst} 0%, ${colorsecondary} 100%)`,
            }}
          >
            <p className="Bg-title">Create-Your-Linear-Gradient</p>
          </div>

          <div
            onClick={() => {
              const text = `background: linear-gradient(220.55deg, ${colorfirst} 0%, ${colorsecondary} 100%)`;
              setCover(text);
              handleCopie(text);
            }}
            className="container-footer"
          >
            <p className="footer-title">{`${colorfirst} ➞ ${colorsecondary}`}</p>
            <img className="icons" src={icons} alt="GIF animado" />
          </div>
        </div>
      </div>

      <div className="container-text-generator">
        <h2
          className="title-generator"
          style={{ color: isHighlighted === false ? "white" : "black" }}
        >
          Unleash your creativity and immerse yourself in a world of color with
          our custom linear gradient generator. Create stunning color
          combinations in the blink of an eye. Design your path to visually
          captivating beauty. Explore and create now, and discover an infinite
          palette of possibilities that will inspire you in every creative
          project!
        </h2>

        <div className="generator-text-center">
          <div
            onClick={() => {
              const text = `background: linear-gradient(220.55deg, ${colorfirst} 0%, ${colorsecondary} 100%)`;
              setCover(text);
              handleCopie(text);
            }}
            className="container-generator-text"
          >
            <p>{`background: linear-gradient(220.55deg, ${colorfirst} 0%, ${colorsecondary} 100%);`}</p>
          </div>
          <div className="container-select">
            <select
              value={colorfirst}
              onChange={(e) => {
                setColorfirst(e.target.value);
              }}
            >
              <option value="Red">Red</option>
              <option value="Blue">Blue</option>
              <option value="Yellow">Yellow</option>
              <option value="Green">Green</option>
              <option value="Orange">Orange</option>
              <option value="Purple">Purple</option>
              <option value="Pink">Pink</option>
              <option value="Brown">Brown</option>
              <option value="Black">Black</option>
              <option value="White">White</option>
            </select>

            <select
              value={colorsecondary}
              onChange={(e) => {
                setColorsecondary(e.target.value);
              }}
            >
              <option value="Red">Red</option>
              <option value="Blue">Blue</option>
              <option value="Yellow">Yellow</option>
              <option value="Green">Green</option>
              <option value="Orange">Orange</option>
              <option value="Purple">Purple</option>
              <option value="Pink">Pink</option>
              <option value="Brown">Brown</option>
              <option value="Black">Black</option>
              <option value="White">White</option>
            </select>
          </div>
        </div>
      </div>

      {copied && (
        <div className="copie-modal">
          <p className="copie-title">
            <img className="icons-modal" src={Check} alt="check" />
            Text copied to clipboard.
          </p>
        </div>
      )}
    </div>
  );
}

export default CreateBackground;
