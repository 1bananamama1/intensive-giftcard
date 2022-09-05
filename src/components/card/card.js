import { useContext } from "react";
import { imgContext } from "../../context/img-context";
import style from "./card.module.css";
import ImgCard from "./img-card/img-card";
import Text from "./text/text";
import CardBG from "../../img/card-bg.png";

const Card = () => {
  const { urlImg } = useContext(imgContext);

  return (
    <div className={style.card}>
      <div className={style.wrapper}>
        <div className={style.image}>
          <ImgCard style={style.img} image={urlImg || CardBG} />
          <Text style={style.text} />
        </div>
      </div>
    </div>
  );
};

export default Card;
