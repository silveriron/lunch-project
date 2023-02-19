import React from "react";
import Text from "../ui/Text";
import PlaceImage from "./ui/PlaceImage";

const PlaceItem = () => {
  return (
    <li className="flex h-40  justify-between rounded-md bg-primary p-5">
      <PlaceImage />
      <div className="w-32">
        <Text style="text-white">홍콩반점</Text>
        <Text style="text-white">거리 : 1.5Km</Text>
      </div>
    </li>
  );
};

export default PlaceItem;
