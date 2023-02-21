import Place from "@/types/place";
import React from "react";
import PlaceItem from "./PlaceItem";

interface PlaceListProps {
  placeList: Place[];
}

const PlaceList = ({ placeList }: PlaceListProps) => {
  return (
    <ul className="mt-7 flex w-10/12 flex-col gap-5">
      {placeList.map((place) => (
        <PlaceItem key={place.id} place={place} />
      ))}
    </ul>
  );
};

export default PlaceList;
