import React from "react";
import css from "./contacts.module.css";
import { Link } from "react-router-dom";
import { YMaps, Map, Placemark } from "react-yandex-maps";

const Contacts = () => {
  return (
    <div className={css.main}>
      <div className={css.header}>
        <div className={css.divHeader}>
          <div className={css.cover}>Cover</div>
          <div className={css.li}>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/feater">Features</Link>
              </li>
              <li>
                <Link to="/contacts">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={css.cart}>
        <YMaps>
          <Map
            width={"100%"}
            height={"610px"}
            defaultState={{
              center: [43.318366, 45.692421],
              zoom: 13,
            }}
          >
            <Placemark geometry={[43.318366, 45.692421]} />
          </Map>
        </YMaps>
      </div>
      <footer>
      <div className={css.footer}>
        Cover template for{" "}
        <a className={css.bootstrap} href="">
          Bootstrap
        </a>
        , by{" "}
        <a className={css.mdo} href="">
          @mdo
        </a>
      </div>

      </footer>
    </div>
  );
};

export default Contacts;
