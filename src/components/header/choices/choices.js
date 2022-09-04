import React, { useContext, useState } from "react";
import style from "./choices.module.css";
import { holidayContext } from "../../../context/holiday-context";

const Choices = () => {
  const [isOpen, setOpen] = useState(false);
  const { holidays, holiday, changeHoliday } = useContext(holidayContext);

  const toggleChoices = () => {
    setOpen(!isOpen);
  };

  return (
    <div className={style.wrapper}>
      <button className={style.button} onClick={toggleChoices}>
        {holidays[holiday] || "Выбрать праздник"}
      </button>
      {isOpen && (
        <ul className={style.list}>
          {Object.entries(holidays).map((i) => {
            return (
              <li
                key={i[0]}
                className={style.item}
                onClick={() => {
                  changeHoliday(i[0]);
                  toggleChoices();
                }}
              >
                {i[1]}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Choices;
