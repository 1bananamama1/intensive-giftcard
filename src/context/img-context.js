import { createContext, useState } from "react";
export const imgContext = createContext({});
export const ImgContext = ({ children }) => {
  const [img, setImg] = useState("");
  return (
    <imgContext.Provider value={{ img, setImg }}>
      {children}
    </imgContext.Provider>
  );
};
