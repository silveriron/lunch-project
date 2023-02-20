import { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import Title from "@/components/ui/Title";
import Text from "@/components/ui/Text";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import useAddress from "@/hooks/useAddress";
import ChangeAddressModal from "@/components/modal/ChangeAddressModal";

export default function Home() {
  const router = useRouter();
  const { latitude, longitude } = router.query;
  const [address, setAddress] = useAddress(
    typeof latitude === "string" ? latitude : "0",
    typeof longitude === "string" ? longitude : "0"
  );
  const [isModal, setIsModal] = useState(false);

  const toggleModal = () => setIsModal((prev) => !prev);

  const goToRecommendPage = () => {
    router.push("/recommend");
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Title>오늘 뭐먹지?</Title>
        <Text>
          오늘 뭐먹지? 는 직장인의 최대 고민 거리🤔
          <br /> 점심 메뉴 걱정을 해결 해드립니다.
        </Text>
        <Text>
          접속하신 위치를 기반으로 주변 맛집 3곳을 <br />
          랜덤으로 추천 해드립니다.
        </Text>
        <Text>
          아래 주소를 확인해주세요. <br />
          주소가 정확하지 않은 경우 직접 수정해주세요.
        </Text>
        <Text>{`주소 : ${address.address}`}</Text>
        <div className="mt-8 text-center">
          <Button style="mr-4" onClick={toggleModal}>
            주소 변경
          </Button>
          <Button onClick={goToRecommendPage}>점심 찾기</Button>
        </div>
        {isModal && <ChangeAddressModal toggleModal={toggleModal} />}
      </Container>
    </>
  );
}
