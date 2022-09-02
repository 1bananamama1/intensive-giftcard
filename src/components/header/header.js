import Container from "../container/container";
import Choices from "./choices/choices";
import style from "./header.module.css";

const Header = () => {
  return (
    <header className={style.header}>
      <Container>
        <div className={style.wrapper}>
          <div className={style.buttons}>
            <button className={style.button}> поменять поздравление</button>
            <button className={style.button}> поменять фон</button>
          </div>
          <Choices />
        </div>
      </Container>
    </header>
  );
};

export default Header;
