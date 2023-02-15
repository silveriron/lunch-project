import addressState from "@/store/addressState";
import axios from "axios";
import React, { useEffect } from "react";
import { SetterOrUpdater, useRecoilState } from "recoil";

const useAddress = (
  latitude: string,
  longitude: string
): [string, SetterOrUpdater<string>] => {
  const [address, setAddress] = useRecoilState(addressState);

  useEffect(() => {
    (async () => {
      // if (latitude && longitude) {
      const address = await axios.post("/api/address", {
        body: {
          coord: JSON.stringify({
            latitude,
            longitude,
          }),
        },
      });
      setAddress(
        address.data.address[0].road_address.address_name
          ? address.data.address[0].road_address.address_name
          : "잘못된 주소입니다."
      );
      // }
    })();
  }, []);

  return [address, setAddress];
};

export default useAddress;
