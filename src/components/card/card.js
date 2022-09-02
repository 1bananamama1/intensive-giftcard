import style from "./card.module.css";
import Img from "./img/img";
import Text from "./text/text";

const Card = () => {
  return (
    <div className={style.card}>
      <div className={style.wrapper}>
        <Img />
        <Text />
      </div>
    </div>
  );
};

export default Card;
