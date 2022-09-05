import style from "./empty-card.module.css";

const EmptyCard = () => {

  return (
    <div className={style.card}>
      <div className={style.wrapper}>
        <p> Выберите повод для поздравления </p>
      </div>
    </div>
  );
};

export default EmptyCard;
