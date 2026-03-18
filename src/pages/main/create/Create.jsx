import style from "./Create.module.css";

import axios from "axios";

import { useState, useRef } from "react";

import SingleInput from "../../../components/inputs/singleInput/SingleInput";

function Create() {
  const [form, setForm] = useState({ place: "", description: "", rating: "" });
  const imageRef = useRef();
  function changeForm(key, e) {
    setForm((object) => {
      const lastObject = { ...object };
      lastObject[key] = e.target.value;
      return lastObject;
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Axios precisa serializar um arquivo somente dentro de um formData:
    const formData = new FormData();
    formData.append("place", form.place);
    formData.append("description", form.description);
    formData.append("rating", form.rating);
    formData.append("image", imageRef.current.files[0]);

    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/places/create`, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)} id={style.create}>
      <div className={style.create__header}>
        <h2>Create</h2>
      </div>
      <div className={style.create__body}>
        <input type="file" name="image" id="image" required ref={imageRef} />
        <SingleInput
          id="place"
          icon="fi fi-br-map-marker"
          label="Place name:"
          placeholder="Digit place name"
          type="text"
          onChangeFunction={(e) => changeForm("place", e)}
        />
        <SingleInput
          id="description"
          icon="fi fi-br-text"
          label="Description:"
          placeholder="Inform a description"
          type="text"
          onChangeFunction={(e) => changeForm("description", e)}
        />
        <SingleInput
          id="rating"
          icon="fi fi-br-star"
          label="Rating"
          placeholder="0"
          type="number"
          onChangeFunction={(e) => changeForm("rating", e)}
        />
        <div className={style.create__footer}>
          <button type="submit">Create</button>
          <button type="reset">Reset</button>
        </div>
      </div>
    </form>
  );
}

export default Create;
