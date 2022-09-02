import { createContext, useState } from "react";
export const holidayContext = createContext({});
export const HolidayContext = ({ children }) => {
  const [holiday, setHoliday] = useState("");
  return (
    <holidayContext.Provider value={{ holiday, setHoliday }}>
      {children}
    </holidayContext.Provider>
  );
};
