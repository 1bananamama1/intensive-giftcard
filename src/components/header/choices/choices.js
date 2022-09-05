import React, { useEffect, useState } from "react";
import style from "./choices.module.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchHolidays, setHoliday } from "../../../store/holidays-slice";
import { fetchText } from "../../../store/text-slice";

const Choices = () => {
  const [isOpen, setOpen] = useState(false);
  const { holiday, holidays, loading } = useSelector((state) => state.holidays);
  const dispatch = useDispatch();

  const toggleChoices = () => {
    if (loading !== "success") return;
    setOpen(!isOpen);
  };

  useEffect(() => {
    dispatch(fetchHolidays());
  }, [dispatch]);

  return (
    <div className={style.wrapper}>
      <button className={style.button} onClick={toggleChoices}>
        {loading !== "success"
          ? "Загрузка ..."
          : holidays[holiday] || "Выбрать праздник"}
      </button>
      {isOpen && (
        <ul className={style.list}>
          {Object.entries(holidays).map((i) => {
            return (
              <li
                key={i[0]}
                className={style.item}
                onClick={() => {
                  dispatch(setHoliday(i[0]));
                  dispatch(fetchText(i[0]))
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
