import { WebView } from "react-native-webview";

export default function MainViewComponent() {
  return <WebView source={{ uri: "http://10.0.2.2:3000" }} />;
}
