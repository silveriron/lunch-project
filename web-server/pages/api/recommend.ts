import { KAKAO_CATEGORY_API, KAKAO_KEYWORD_API } from "@/constants/api";
import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { address, lat, lng } = req.body.body;
  const result = await axios.get(
    KAKAO_CATEGORY_API +
      `?category_group_code=FD6&x=${lng}&y=${lat}&radius=500`,
    {
      headers: {
        Authorization: `KakaoAK ${process.env.NEXT_PUBLIC_KAKAO_API_KEY}`,
      },
    }
  );

  const placeList = result.data.documents;

  res.status(200).json({ placeList });
}
