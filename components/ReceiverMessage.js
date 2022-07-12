import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import tw from "tailwind-rn";
// import * as Speech from 'expo-speech';


// const speak = () => {
//   const thingToSay = 'This is the latest message';
//   Speech.speak(thingToSay);
// };
const ReceiverMessage = ({ message }) => {
  return (
    <View
      style={[
        tw("bg-pink-600 rounded-lg rounded-tr-none px-5 py-3 mx-14 my-4"),
        { alignSelf: "flex-start" }, 
      ]}
    >
      <Image
        style={tw("h-12 w-12 rounded-full absolute top-0 -left-14")}
        source={{ uri: message.photoURL }}
      />
      {/* <TouchableOpacity style={tw("text-white")} onPress={speak}> */}
      <Text style={tw("text-white")}>{message.message}</Text>
      {/* </TouchableOpacity> */}
    </View>
  );
};

export default ReceiverMessage;
