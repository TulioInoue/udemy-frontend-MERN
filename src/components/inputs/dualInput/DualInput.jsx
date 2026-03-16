import style from "./DualInput.module.css";

function DualInput({
  icon,
  label,
  type1,
  type2,
  placeholder1,
  placeholder2,
  id1,
  id2,
  onChangeFunction1,
  onChangeFunction2,
}) {
  return (
    <div className={style.input}>
      <label htmlFor={id1} className={style.input__label}>
        {label}
      </label>
      <div className={style.input__content}>
        <i className={icon} />
        <input
          className={style.input__content_first}
          id={id1}
          type={type1}
          placeholder={placeholder1}
          onChange={(e) => onChangeFunction1(e)}
        />
        <input
          className={style.input__content_second}
          id={id2}
          type={type2}
          placeholder={placeholder2}
          onChange={(e) => onChangeFunction2(e)}
        />
      </div>
    </div>
  );
}

export default DualInput;
