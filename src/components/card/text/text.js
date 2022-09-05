import { useSelector } from "react-redux";

const Text = ({ style }) => {
  const { text, loading } = useSelector((state) => state.text);

  return (
    <p className={style}>
      {loading === "loading"
        ? "загрузка "
        : text === ""
        ? "Выберите повод для поздравления "
        : text}
    </p>
  );
};

export default Text;
