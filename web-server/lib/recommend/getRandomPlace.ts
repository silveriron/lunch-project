import Place from "@/types/place";

const getRandomPlace = (placeList: Place[], count: number): Place[] => {
  const newPlaceList: any[] = [];
  const randomNumberList: number[] = [];

  const getRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * placeList.length);
    if (randomNumberList.find((num) => num === randomNumber)) {
      getRandomNumber();
    } else {
      randomNumberList.push(randomNumber);
    }
  };

  for (let i = 0; i < count; i++) {
    getRandomNumber();
  }

  randomNumberList.forEach((num) => newPlaceList.push(placeList[num]));

  return newPlaceList;
};

export default getRandomPlace;
