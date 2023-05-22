import React, { createContext, useState } from "react";

// Creamos el contexto
const ColorContext = createContext();

// Creamos el proveedor del contexto
const ColorProvider = ({ children }) => {
  const [isHighlighted, setIsHighlighted] = useState(false);

  return (
    <ColorContext.Provider value={{ isHighlighted, setIsHighlighted }}>
      {children}
    </ColorContext.Provider>
  );
};

export { ColorContext, ColorProvider };
