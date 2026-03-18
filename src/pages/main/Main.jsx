import style from "./Main.module.css";

import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";

function Main() {
  return (
    <section id={style.main}>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </section>
  );
}

export default Main;
