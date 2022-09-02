import { useContext } from "react";
import { imgContext } from "../../../context/img-context";

const ImgCard = ({ style, image }) => {
  useContext(imgContext)
  return <img src={image} alt="background" className={style} />;
};

export default ImgCard;
