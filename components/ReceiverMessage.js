import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import tw from "tailwind-rn";
 import * as Speech from 'expo-speech';



const ReceiverMessage = ({ message }) => {
    const speak = () => {
    const thingToSay = message.message;
    Speech.speak(thingToSay);
    };
  return (
   
    <View
      style={[
        tw("bg-black rounded-lg rounded-tr-none px-5 py-3 mx-14 my-4"), //pink-600
        { alignSelf: "flex-start" }, 
      ]}
    >
      <Image
        style={tw("h-12 w-12 rounded-full absolute top-0 -left-14")}
        source={{ uri: message.photoURL }}
      />
      <TouchableOpacity style={tw("text-white")} onPress={speak}>
      <Text style={tw("text-white")}>{message.message}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ReceiverMessage;
