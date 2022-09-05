import React, { useEffect, useState } from "react";
import style from "./choices.module.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchHolidays } from "../../../store/holidays-slice";
import { fetchText } from "../../../store/text-slice";
import { fetchImage } from "../../../store/img-slice";
import { NavLink, useParams } from "react-router-dom";

const Choices = () => {
  const [isOpen, setOpen] = useState(false);
  const {  holidays, loading } = useSelector((state) => state.holidays);
  const dispatch = useDispatch();
  const {holiday} = useParams()

  const toggleChoices = () => {
    if (loading !== "success") return;
    setOpen(!isOpen);
  };

  useEffect(() => {
    dispatch(fetchHolidays());
    if (holiday) {
      dispatch(fetchText(holiday));
      dispatch(fetchImage(holiday))
    }
  }, [dispatch, holiday]);

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
                  toggleChoices();
                }}
              >
                <NavLink
                  to={`card/${i[0]}`}
                  className={({ isActive }) =>
                    (isActive ? style.linkActive : "")
                  }
                >
                  {i[1]}
                </NavLink>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Choices;
