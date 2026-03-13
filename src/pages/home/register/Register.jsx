import style from "./Register.module.css";

import SingleInput from "../../../components/inputs/singleInput/SingleInput";
import DualInput from "../../../components/inputs/dualInput/DualInput";

import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password1: "",
    password2: "",
  });
  const [isMatchPassword, setIsMatchPassword] = useState(true);

  function updateForm(target, e) {
    setForm((object) => {
      const lastObject = { ...object };
      lastObject[target] = e.target.value;
      return lastObject;
    });

    if (target === "password2") {
      if (e.target.value !== form.password1 & e.target.value !== "") {
        setIsMatchPassword(false);
      } else {
        setIsMatchPassword(true);
      }
    }
  }

  function onSubmit(e) {
    e.preventDefault();

    axios.post(import.meta.env.VITE_BACKEND_URL);
  }

  return (
    <section id={style.register}>
      <aside className={style.register__aside}>
        <img src="/public/magic-book.png" alt="rememorize logo" />
        <span>Rememorize</span>
        <span>
          <hr />
        </span>
        <span>Register</span>
        <div>
          <Link to="../login">→ Already have an account?</Link>
        </div>
      </aside>
      <form className={style.register__form} onSubmit={(e) => onSubmit(e)}>
        <h2>Sign in</h2>
        <div className={style.register__form__inputs}>
          <DualInput
            icon="fi fi-br-user"
            id1="firstName"
            id2="lastName"
            label="Digit your names:"
            placeholder1="first name"
            placeholder2="last name"
            onChangeFunction1={(e) => updateForm("firstName", e)}
            onChangeFunction2={(e) => updateForm("lastName", e)}
          />
          <SingleInput
            icon="fi fi-br-at"
            id="email"
            label="Inform your email:"
            placeholder="user@email.com"
            onChangeFunction={(e) => updateForm("email", e)}
          />
          <DualInput
            icon="fi fi-br-lock"
            id1="password1"
            id2="password2"
            label="Create your password:"
            placeholder1="password"
            placeholder2="confirm password"
            onChangeFunction1={(e) => updateForm("password1", e)}
            onChangeFunction2={(e) => updateForm("password2", e)}
          />
        </div>
        <div>{isMatchPassword || <p>Passwords do not match.</p>}</div>
        <div className={style.register__form__fotter}>
          <button type="submit">register</button>
          <button type="reset">reset</button>
        </div>
      </form>
    </section>
  );
};

export default Register;
