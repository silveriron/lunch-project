import PlaceList from "@/components/place/PlaceList";
import Container from "@/components/ui/Container";
import Title from "@/components/ui/Title";
import React from "react";

const Index = () => {
  return (
    <Container>
      <Title>오늘의 메뉴</Title>
      <PlaceList />
    </Container>
  );
};

export default Index;
