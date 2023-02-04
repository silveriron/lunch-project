import { WebView } from "react-native-webview";
import * as Location from "expo-location";
import { useState, useEffect } from "react";

export default function MainViewComponent() {
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

  if (isLoading) {
    return;
  } else {
    return (
      <WebView
        source={{
          uri: `http://10.0.2.2:3000?latitude=${location.latitude}&longitude=${location.longitude}`,
        }}
      />
    );
  }
}
