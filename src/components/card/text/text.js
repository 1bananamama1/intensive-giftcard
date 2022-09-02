import { useContext } from "react";
import { textContext } from "../../../context/text-context";

const Text = ({ style }) => {
  const { text } = useContext(textContext);
  return <p className={style}>{text}</p>;
};

export default Text;
