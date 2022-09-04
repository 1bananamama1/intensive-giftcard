import { createContext, useContext  } from "react";
import { useText } from "../hooks/useText";
import {holidayContext} from '../context/holiday-context'
export const textContext = createContext({});

export const TextContext = ({ children }) => {
  const {holiday} = useContext(holidayContext)
  const [text] = useText(holiday);
  return (
    <textContext.Provider value={{ text  }}>
      {children}
    </textContext.Provider>
  );
};
