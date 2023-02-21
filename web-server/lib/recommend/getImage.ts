import { StaticImageData } from "next/image";
import pastaImage from "../../public/images/pasta.jpg";
import chineseImage from "../../public/images/chinese.jpg";
import burgerImage from "../../public/images/burger.jpg";

const getImage = (category: string): StaticImageData => {
  switch (category) {
    case "양식":
      return pastaImage;
    case "중식":
      return chineseImage;
    default:
      return burgerImage;
  }
};

export default getImage;
