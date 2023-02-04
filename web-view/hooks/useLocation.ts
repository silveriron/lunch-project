import React, { useState, useEffect } from "react";
import * as Location from "expo-location";

interface Location {
  latitude: number;
  longitude: number;
}

interface LocationState {
  location: Location;
  isLoading: boolean;
}

const useLocation = (): LocationState => {
  const [location, setLocation] = useState({ latitude: 0, longitude: 0 });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      setLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
      setIsLoading(false);
    })();
  }, []);

  return { location, isLoading };
};

export default useLocation;
