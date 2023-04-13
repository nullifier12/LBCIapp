import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import User from "./screens/User";
import LoadingScreen from "./screens/LoadingScreen";
import Scanner from "./screens/Scanner";
import Login from "./screens/Login";
import GoodReceives from "./screens/GoodReceives";
import Tracking from "./components/Tracking";
import TrackingPage from "./screens/TrackingPage";
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const Tabs = () => {
  return (
    <Tab.Navigator
      // initialRouteName="GoodReceives"
      screenOptions={{
        tabBarActiveTintColor: "#EB455F",
        headerStyle: {
          backgroundColor: "#d00149",
        },
        headerTintColor: "white",
        headerShown: false,
        // tabBarInactiveBackgroundColor: "#EDF1D6",
      }}
    >
      <Tab.Screen
        name="Scanner"
        component={Scanner}
        options={{
          title: "Scanner",
          tabBarIcon: ({ color, size }) => {
            return (
              <MaterialIcons name="qr-code-scanner" size={size} color={color} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Account"
        component={User}
        options={{
          title: "Account",
          headerShown: true,
          tabBarIcon: ({ color, size }) => {
            return <AntDesign name="user" size={size} color={color} />;
          },
        }}
      />
      {/* <Tab.Screen
        name="GoodReceives"
        component={GoodReceives}
        options={{
          title: "Goods Receive",
          tabBarIcon: ({ color, size }) => {
            return <MaterialIcons name="inventory" size={size} color={color} />;
          },
        }}
      /> */}
    </Tab.Navigator>
  );
};
export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#d00149",
            },
            headerTintColor: "#fff",
            headerShown: false,
          }}
        >
          <Stack.Screen name="Loading" component={LoadingScreen} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Information" component={TrackingPage} />
          <Stack.Screen
            name="GoodReceives"
            component={GoodReceives}
            // options={{ headerShown: true }}
          />
          {/* <Stack.Screen name="Scanner" component={Scanner} /> */}
          <Stack.Screen name="Maintab" component={Tabs} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
