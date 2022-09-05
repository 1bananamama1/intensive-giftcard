import style from "./card.module.css";
import ImgCard from "./img-card/img-card";
import Text from "./text/text";
import CardBG from "../../img/card-bg.png";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchTextId } from "../../store/text-slice";
import { fetchImageId } from "../../store/img-slice";

const Card = () => {
  const { urlImg } = useSelector((state) => state.image);
  const { idText, idImg } = useParams();
  const dispatch = useDispatch(); 

  useEffect(() => {
    if (idText && idImg) {
      dispatch(fetchTextId(idText));
      dispatch(fetchImageId(idImg));
    }
  });

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
