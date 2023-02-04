import { WebView } from "react-native-webview";
import { View } from "react-native";
import useLocation from "../../hooks/useLocation";

export default function MainViewComponent() {
  const { location, isLoading } = useLocation();

  if (isLoading) {
    return <View></View>;
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
