import style from "./Login.module.css";

import Input from "../../../components/input/Input";

import { Link } from "react-router-dom";
import { useState } from "react";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  function updateForm(target, e) {
    setForm((object) => {
      const lastObject = { ...object };
      lastObject[target] = e.target.value;
      return lastObject;
    });
  }

  function onSubmit(e) {
    e.preventDefault();
  }

  return (
    <section id={style.login}>
      <aside className={style.login__aside}>
        <img src="/public/magic-book.png" alt="rememorize logo" />
        <span>Rememorize</span>
        <span>
          <hr />
        </span>
        <span>Login</span>
        <div>
          <Link to="../register">← Do not have an account?</Link>
        </div>
      </aside>
      <form className={style.login__form} onSubmit={(e) => onSubmit(e)}>
        <h2>Welcome</h2>
        <div className={style.login__form__inputs}>
          <Input
            icon="fi fi-br-at"
            id="email"
            label="Inform your email:"
            placeholder="user@email.com"
            onChangeFunction={(e) => updateForm("email", e)}
          />
          <Input
            icon="fi fi-br-lock"
            id="password"
            label="Inform your password:"
            placeholder="**********"
            onChangeFunction={(e) => updateForm("password", e)}
          />
        </div>
        <div className={style.login__form__fotter}>
          <button type="submit">login</button>
          <button type="reset">reset</button>
        </div>
      </form>
    </section>
  );
}

export default Login;
