import React from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import tw from "tailwind-rn";
import { Foundation, Ionicons, MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import * as Speech from 'expo-speech';


const Header = ({ title, callEnabled }) => {
  const navigation = useNavigation();
  const stop = () => {
    
    Speech.stop();
    };
  return (
    <View style={tw("p-2 flex-row items-center justify-between")}>
      <View style={tw("flex flex-row items-center")}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={tw("p-2")}>
           <Ionicons name="chevron-back-outline" size={34} color="black" /> 
           {/* #FF5864  */}
        </TouchableOpacity>
        <View style={tw("flex flex-row items-center")}>
        <Text style={tw("text-2xl font-bold pl-2")}>{title}</Text>
        <TouchableOpacity
           style={tw("rounded-full ml-4     ")}
        
          onPress={stop}>
        
         
          <FontAwesome name="square" size={24} color="black" />
        </TouchableOpacity>
        </View>
      </View>
      {callEnabled && (
        <TouchableOpacity
          style={tw("rounded-full mr-4 p-3 bg-black")}
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

