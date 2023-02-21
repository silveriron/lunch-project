import Place from "@/types/place";
import { useRouter } from "next/router";
import React from "react";
import Text from "../ui/Text";
import PlaceImage from "./ui/PlaceImage";

interface PlaceItemProps {
  place: Place;
}

const PlaceItem = ({ place }: PlaceItemProps) => {
  return (
    <li className="flex h-40  justify-between rounded-md bg-primary p-5">
      <PlaceImage category={place.category_name} />
      <div className="w-32">
        <Text style="text-white">{place.place_name}</Text>
        <Text style="text-white">{`거리 : ${place.distance}m`}</Text>
      </div>
    </li>
  );
};

export default PlaceItem;
