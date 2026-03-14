import style from "./Alert.module.css";
import { createPortal } from "react-dom";
import { useEffect } from "react";

function Alert({ alert, setAlert }) {
  useEffect(() => {
    const timeoutFunction = setTimeout(
      () => setAlert({ isActive: false, message: "", type: "" }),
      5000,
    );
    return () => clearTimeout(timeoutFunction);
  }, [alert.isActive]);

  const port = document.getElementById("alert-portal");
  const alertContent = (
    <aside id={style.alert}>
      <div
        id={style.alert__icon}
        className={
          alert.type === "success"
            ? style.alert__icon_success
            : style.alert__icon_error
        }
      >
        {alert.type === "success" ? (
          <i className="fi fi-br-check-circle"></i>
        ) : (
          <i className="fi fi-br-exclamation"></i>
        )}
      </div>
      <div className={style.alert__content}>{alert.message}</div>
    </aside>
  );

  return createPortal(alertContent, port);
}

export default Alert;
