import style from "./SingleInput.module.css";

function SingleInput({ icon, label, type, placeholder, id, onChangeFunction }) {
  return (
    <div className={style.input}>
      <label htmlFor={id} className={style.input__label}>
        {label}
      </label>
      <div className={style.input__content}>
        <i className={icon} />
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          onChange={(e) => onChangeFunction(e)}
        />
      </div>
    </div>
  );
}

export default SingleInput;
