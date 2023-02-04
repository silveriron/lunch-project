import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import MainViewComponent from "./components/WebView/MainViewComponent";
import RecommendViewComponent from "./components/WebView/RecommendViewComponent";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "map") {
              iconName = focused ? "map" : "map-outline";
            } else if (route.name === "Settings") {
              iconName = focused ? "ios-thumbs-up" : "ios-thumbs-up-outline";
            }
            if (iconName) {
              return <Ionicons name={iconName} size={size} color={color} />;
            }
          },
          tabBarActiveTintColor: "#0367A6",
          tabBarInactiveTintColor: "gray",
          headerShown: false,
        })}
      >
        <Tab.Screen
          name="map"
          component={MainViewComponent}
          options={{
            title: "Map",
            headerTitleAlign: "center",
            tabBarShowLabel: false,
          }}
        />
        <Tab.Screen
          name="Settings"
          component={RecommendViewComponent}
          options={{
            headerTitleAlign: "center",
            tabBarShowLabel: false,
          }}
        />
      </Tab.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
