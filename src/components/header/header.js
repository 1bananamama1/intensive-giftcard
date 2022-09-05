import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchImage } from "../../store/img-slice";
import { fetchText } from "../../store/text-slice";
import Container from "../container/container";
import Choices from "./choices/choices";
import style from "./header.module.css";

const Header = () => {
  const dispatch = useDispatch();
  const { holiday } = useParams();

  return (
    <header className={style.header}>
      <Container>
        <div className={style.wrapper}>
          <div className={style.buttons}>
            <button
              className={style.button}
              disabled={!holiday}
              onClick={() => {
                dispatch(fetchText(holiday));
              }}
            >
              {" "}
              поменять поздравление
            </button>
            <button
              className={style.button}
              onClick={() => {
                dispatch(fetchImage(holiday))
              }}
            > поменять фон</button>
          </div>
          <Choices />
        </div>
      </Container>
    </header>
  );
};

export default Header;
