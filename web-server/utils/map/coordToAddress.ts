export const coordToAddress = (latitude: string, longitude: string): string => {
  let address = "";
  const geocoder = new kakao.maps.services.Geocoder();

  geocoder.coord2Address(+latitude, +longitude, (result, status) => {
    if (
      status === kakao.maps.services.Status.OK &&
      result[0].road_address?.address_name
    ) {
      address = result[0].road_address?.address_name;
    }
  });

  return address;
};
