import React from 'react';
import css from "./featur.module.css";
import { Link } from "react-router-dom";

const Features = () => {
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
        <div className={css.midle}>
          <div className={css.divMidle}>
            <h1 className={css.midleText}>Cover your page.</h1>
            <div className={css.midleDivText}>
             Это Featur
            </div>
            <button className={css.btn}>Learn more</button>
          </div>
        </div>
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
      </div>
    );
};

export default Features;