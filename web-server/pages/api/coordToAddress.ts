import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { KAKAO_COORD2ADDRESS_API } from "@/constants/api";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const coord = req.body.coord;
  const result = await axios.get(
    KAKAO_COORD2ADDRESS_API + `?x=${coord.longitude}&y=${coord.latitude}`,
    {
      headers: {
        Authorization: `KakaoAK ${process.env.NEXT_PUBLIC_KAKAO_API_KEY}`,
      },
    }
  );

  const address = result.data.documents;

  res.status(200).json({ address });
}
