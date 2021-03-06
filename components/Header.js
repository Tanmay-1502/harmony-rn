import React from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import tw from "tailwind-rn";
import { Foundation, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";



const Header = ({ title, callEnabled }) => {
  const navigation = useNavigation();

  return (
    <View style={tw("p-2 flex-row items-center justify-between")}>
      <View style={tw("flex flex-row items-center")}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={tw("p-2")}>
           <Ionicons name="chevron-back-outline" size={34} color="black" /> 
           {/* #FF5864  */}
        </TouchableOpacity>
        <Text style={tw("text-2xl font-bold pl-2")}>{title}</Text>
      </View>
      {callEnabled && (
        <TouchableOpacity
          style={tw("rounded-full mr-4 p-3 bg-red-500")}
          // onPress={() =>
          //   Alert.alert("Thanks for Tuning!", "Nearby Wheelchair Accessible Places Suggestions coming soon!")
          // }
          onPress={() => navigation.navigate("Places")}>
        
          <MaterialIcons name="place" size={20} color="white" style={tw("")} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;
