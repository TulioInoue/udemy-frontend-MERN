import style from "./Home.module.css";

import { Outlet, useLocation } from "react-router-dom";

import Hero from "./hero/Hero";

function Home() {
  const path = useLocation().pathname;
  console.log(path);
  return (
    <main id={style.home}>
      <section id={style.home__background}>
        <span className={style.home__background_gif}></span>
        <span className={style.home__background_color}></span>
      </section>
      <section id={style.home__content}>
        {path === "/home" ? <Hero /> : <Outlet />}
      </section>
    </main>
  );
}

export default Home;
