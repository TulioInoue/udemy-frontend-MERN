import style from "./Input.module.css";

function Input({ icon, label, placeholder, id, onChangeFunction }) {
  return (
    <div className={style.input}>
      <label htmlFor={id} className={style.input__label}>
        {label}
      </label>
      <div className={style.input__content}>
        <i className={icon} id={id} />
        <input
          type="text"
          placeholder={placeholder}
          onChange={(e) => onChangeFunction(e)}
        />
      </div>
    </div>
  );
}

export default Input;
