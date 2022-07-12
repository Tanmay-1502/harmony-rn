import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import tw from "tailwind-rn";
import * as Speech from 'expo-speech';


const speak = () => {
  
  const thingToSay = 'Hello';
  Speech.speak(thingToSay);
};
// const real = ({ message }) => {
//   a=message.message;
//   const thingToSay = {a};
//   Speech.speak(thingToSay);
// };

const SenderMessage = ({ message }) => {
  return (
    <View
      style={[
        tw("bg-purple-600 rounded-lg rounded-tr-none px-5 py-3 mx-3 my-4"),
        { alignSelf: "flex-start", marginLeft: "auto" }, 
      ]}
    >
      <TouchableOpacity style={tw("text-white")} onPress={speak}>
      <Text style={tw("text-white")}>{message.message}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SenderMessage;
