import PlaceList from "@/components/place/PlaceList";
import Container from "@/components/ui/Container";
import Title from "@/components/ui/Title";
import getRandomPlace from "@/lib/recommend/getRandomPlace";
import placeListState from "@/store/placeListState";
import React from "react";
import { useRecoilValue } from "recoil";

const Index = () => {
  const placeList = useRecoilValue(placeListState);

  const randomPlaceList = getRandomPlace(placeList, 3);

  return (
    <Container>
      <Title>오늘의 메뉴</Title>
      <PlaceList placeList={randomPlaceList} />
    </Container>
  );
};

export default Index;
