import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { AuthProvider } from "./hooks/useAuth";
import { LogBox } from "react-native";
LogBox.ignoreLogs(["Setting a timer"]);

LogBox.ignoreAllLogs();
import StackNavigator from "./StackNavigator";



export default function App() {
  return (
    <NavigationContainer>
     
      <AuthProvider>
     

        <StackNavigator />
      </AuthProvider>
    </NavigationContainer>

   
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
