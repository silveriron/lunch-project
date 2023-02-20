import { KAKAO_ADDRESS2COORD_API } from "@/constants/api";
import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const address = req.body.address;

  const result = await axios.get(
    KAKAO_ADDRESS2COORD_API + `?query=${address}`,
    {
      headers: {
        Authorization: `KakaoAK ${process.env.NEXT_PUBLIC_KAKAO_API_KEY}`,
      },
    }
  );

  console.log(result.data.documents[0].road_address);

  res.status(200).json({ address: result.data.documents[0].road_address });
}
