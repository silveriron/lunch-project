import React from "react";
import PlaceItem from "./PlaceItem";

const PlaceList = () => {
  return (
    <ul className="mt-7 flex w-10/12 flex-col gap-5">
      <PlaceItem />
      <PlaceItem />
      <PlaceItem />
    </ul>
  );
};

export default PlaceList;
