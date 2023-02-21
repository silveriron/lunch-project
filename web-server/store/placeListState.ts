import Place from "@/types/place";
import axios from "axios";
import { selector } from "recoil";
import addressState from "./addressState";

const placeListState = selector<Place[]>({
  key: "placeListState",
  get: async ({ get }) => {
    const { address, lat, lng } = get(addressState);

    const result = await axios.post("/api/recommend", {
      body: {
        address,
        lat,
        lng,
      },
    });

    return result.data.placeList;
  },
});

export default placeListState;
