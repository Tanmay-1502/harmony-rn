import { useNavigation } from "@react-navigation/core";
import React from "react";
import { View, Text, Button, ImageBackground, StyleSheet } from "react-native";
import ChatList from "../components/ChatList";
import Header from "../components/Header";
import * as Speech from 'expo-speech';
import tw from "tailwind-rn";
import { TouchableOpacity } from "react-native";
import {Ionicons}  from "@expo/vector-icons";


const ChatScreen = () => {
  const navigation = useNavigation();
  const speak = () => {
    const thingToSay = 'This is the chatscreen. You can chat with the people who have matched with you. To chat, just press the image of that person';
    Speech.speak(thingToSay);
  };

  return (
    
      
     <View style={tw("bg-red-200 mt-7")}>
      <ImageBackground
       source={require("../imp.jpg")}
        resizeMode="cover"
       style={tw(" w-full")}>

      
       <View style={tw("")} >
       
       <TouchableOpacity onPress={speak} style={tw("flex-row justify-between items-center pr-5")} >
       <Header title="Chat" />
       <Ionicons name="star" size={30} color="black" />
       </TouchableOpacity>
     
       </View>
      
      
       
      
      

      <ChatList />
      
      <Button
        title="Go Back to Home Screen"
        onPress={() => navigation.goBack()}
      />
     </ImageBackground>
    </View>
  );
};

export default ChatScreen;

