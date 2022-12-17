import { View, Text, TouchableOpacity } from "react-native";
import tw from "tailwind-rn";
import * as Speech from 'expo-speech';
import { collection, onSnapshot, orderBy, query } from "@firebase/firestore";
import React,{useState, useEffect} from "react";
import getMatchedUserInfo from "../lib/getMatchedUserInfo";

// const real = ({ message }) => {
//   a=message.message;
//   const thingToSay = {a};
//   Speech.speak(thingToSay);
// };

const SenderMessage = ({ message }) => {
//   const [lastMessage, setLastMessage] = useState("");
// useEffect(
//   () =>
//     onSnapshot(
//       query(
//         collection(db, "matches", matchDetails.id, "messages"),
//         orderBy("timestamp", "desc")
//       ),
//       (snapshot) => {
//         setLastMessage(snapshot.docs[0]?.data().message);
//       } // 0th index as we used desc order in CHATS
//       //using ? because if there is no message, it will be undefined
//     ),
//   [matchDetails, db]
// );
const speak = () => {
  
  const thingToSay = message.message;
  Speech.speak(thingToSay);
};
  return (
    <View
      style={[
        tw("bg-gray-500 rounded-lg rounded-tr-none px-5 py-3 mx-3 my-4"),
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
