import { atom } from "recoil";

const addressState = atom({
  key: "addressState",
  default: {
    address: "",
    lat: 0,
    lng: 0,
  },
});

export default addressState;
