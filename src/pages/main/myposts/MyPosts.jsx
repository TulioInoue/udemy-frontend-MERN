import style from "./MyPosts.module.css";

import axios from "axios";
import { useEffect, useState } from "react";

function MyPosts() {
  const [places, setPlaces] = useState();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/places/user`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response);
        setPlaces(response.data.places);
      })
      .catch((err) => console.log(err));
  }, []);

  function handleDelete(id) {
    console.log("id:", id);
    axios
      .delete(`${import.meta.env.VITE_BACKEND_URL}/places/delete`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        data: { id: id },
      })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  }

  return (
    <section id={style.myposts}>
      {places === undefined ? (
        <p>No content yet</p>
      ) : (
        places.map((place) => (
          <div key={place.id}>
            <img src={place.imageUrl} alt={place.place} />
            <p>{place.place}</p>
            <p>{place.description}</p>
            <p>{place.rating}</p>
            <button onClick={() => handleDelete(place.id)}>Delete</button>
          </div>
        ))
      )}
    </section>
  );
}

export default MyPosts;
