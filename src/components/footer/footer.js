import React from "react";
import Container from "../container/container.js";
import style from "./footer.module.css";
import { ReactComponent as VKIcon } from "../../img/vk.svg";
import { ReactComponent as TGIcon } from "../../img/tg.svg";
import { ReactComponent as PinterestIcon } from "../../img/pinterest.svg";
import { ReactComponent as SUIcon } from "../../img/stumbleupon.svg";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <Container>
        <div className={style.wrapper}>
          <div className={style.contacts}>
            <p>
              design <a href="https://t.me">Anastasia</a>
            </p>
            <p> coder: me</p>
            <p> HB card 2022</p>
          </div>
          <ul className={style.social}>
            <li className={style.item}>
              <a href="https://vk.com" className={style.link}>
                <VKIcon />
              </a>
            </li>
            <li className={style.item}>
              <a href="https://t.me" className={style.link}>
                <TGIcon />
              </a>
            </li>
            <li className={style.item}>
              <a href="https://pinerest.com" className={style.link}>
                <PinterestIcon />
              </a>
            </li>
            <li className={style.item}>
              <a href="https://stumbleupon.com" className={style.link}>
                <SUIcon />
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
