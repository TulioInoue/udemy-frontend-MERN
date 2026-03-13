import style from "./Hero.module.css";

import { Link } from "react-router-dom";

function Hero() {
  return (
    <>
      <div className={style.hero__header}>
        <h1>Rememorize</h1>
        <h2>Start writing your own memories</h2>
      </div>
      <div className={style.hero__body}>
        <Link to={"./login"}>Enter</Link>
      </div>
    </>
  );
}

export default Hero;
