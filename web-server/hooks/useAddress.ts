import addressState from "@/store/addressState";
import AddressType from "@/types/address";
import axios from "axios";
import React, { useEffect } from "react";
import { SetterOrUpdater, useRecoilState } from "recoil";

const useAddress = (
  latitude: string,
  longitude: string
): [AddressType, SetterOrUpdater<AddressType>] => {
  const [address, setAddress] = useRecoilState(addressState);

  useEffect(() => {
    (async () => {
      const address = await axios.post("/api/address", {
        body: {
          coord: JSON.stringify({
            latitude,
            longitude,
          }),
        },
      });
      setAddress({
        address: address.data.address[0]?.road_address?.address_name
          ? address.data.address[0].road_address.address_name
          : "잘못된 주소입니다.",
        lat: latitude ? +latitude : 0,
        lng: longitude ? +longitude : 0,
      });
      // }
    })();
  }, [latitude, longitude, setAddress]);

  return [address, setAddress];
};

export default useAddress;
