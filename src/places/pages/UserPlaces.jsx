import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire state building",
    description: "One of the most famous sky scrapers in the world",
    imageUrl:
      "https://static.wikia.nocookie.net/whitecollar/images/c/c7/Empire_State_Building_from_the_Top_of_the_Rock.jpg/revision/latest/scale-to-width-down/284?cb=20130305214707",
    address: "20 W 34th St., New York, NY 10001, Estados Unidos",
    location: {
      lat: 40.7484405,
      lon: -73.9882393,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Taj Mahal",
    description: "One of most famous building around the world.",
    imageUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepRWjZhrfDiTQvySopS3pnwgP7DDrdNeaZNs7xlCjCUJJ-7jC-Oz5TXQEuG6lyJ91YgAbNqME4-nulZ_euWFQOlvgw7tcXV_5d-0BmLWob5NUJPRh246JcxXcxh1wY9GW2auLdp=w408-h544-k-no",
    address:
      "Dharmapuri, Forest Colony, Tajganj, Agra, Uttar Pradesh 282001, Índia",
    location: {
      lat: 27.1749509,
      lon: 78.039403,
    },
    creator: "u2",
  },
];

const UserPlaces = (props) => {
  return <PlaceList items={DUMMY_PLACES} />;
};

export default UserPlaces;
