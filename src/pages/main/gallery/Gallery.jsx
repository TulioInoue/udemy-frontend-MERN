import style from "./Gallery.module.css";

import axios from "axios";
import { useEffect, useState } from "react";

function Gallery() {
  const [places, setPlaces] = useState();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/places/all`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        setPlaces(response.data.places);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <section>
      {places === undefined ? (
        <p>No places created</p>
      ) : (
        places.map((place) => (
          <div key={place.id}>
            <img src={place.imageUrl} alt={place.place} />
            <p>{place.place}</p>
            <p>{place.description}</p>
            <p>{place.rating}</p>
          </div>
        ))
      )}
    </section>
  );
}

export default Gallery;
