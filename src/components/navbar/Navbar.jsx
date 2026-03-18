import style from "./Navbar.module.css";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav id={style.navbar}>
      <Link to="create">Create</Link>
      <Link to="gallery">Gallery</Link>
      <Link to="my-posts">My posts</Link>
    </nav>
  );
}

export default Navbar;
