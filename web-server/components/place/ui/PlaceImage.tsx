import Image from "next/image";
import React from "react";
import burgerImage from "../../../public/images/burger.jpg";

const PlaceImage = () => {
  return (
    <div className="overflow-hidden rounded-xl">
      <Image src={burgerImage} width={120} height={120} alt="burger" />
    </div>
  );
};

export default PlaceImage;
