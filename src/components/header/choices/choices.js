import React, { useState } from "react";
import style from "./choices.module.css";

const holidays = {
  newYear: "Новый год",
  birthdayM: "День рождения М",
  birthdayF: "День рождения Ж",
  womansDay: "8 марта",
  sepFirst: "День знаний",
};

const Choices = () => {
  const [isOpen, setOpen] = useState(false);
  const [holiday, setHoliday] = useState("Выбрать праздник");

  const toggleChoices = () => {
    setOpen(!isOpen);
  };

  const changeHoliday = (title) => {
    setHoliday(title);
    toggleChoices(!isOpen)
  };

  return (
    <div classname={style.wrapper}>
      <button className={style.button} onClick={toggleChoices}>
        {holiday}
      </button>
      {isOpen && (
        <ul className={style.list}>
          {Object.entries(holidays).map((i) => {
            return (
              <li
                key={i[0]}
                className={style.item}
                onClick={() => changeHoliday(i[1])}
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
