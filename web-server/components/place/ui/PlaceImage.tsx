import getImage from "@/lib/recommend/getImage";
import Image from "next/image";
import React from "react";

interface PlaceImageProps {
  category: string;
}

const PlaceImage = ({ category }: PlaceImageProps) => {
  category = category.split(">")[1].trim();

  const image = getImage(category);
  return (
    <div className="overflow-hidden rounded-md">
      <Image src={image} width={120} height={120} alt="burger" />
    </div>
  );
};

export default PlaceImage;
