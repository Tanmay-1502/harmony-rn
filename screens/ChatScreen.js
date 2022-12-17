import { useNavigation } from "@react-navigation/core";
import React from "react";
import { View, Text, Button, ImageBackground, StyleSheet } from "react-native";
import ChatList from "../components/ChatList";
import Header from "../components/Header";
import * as Speech from 'expo-speech';
import tw from "tailwind-rn";
import { TouchableOpacity } from "react-native";
import {Ionicons}  from "@expo/vector-icons";
import { MaterialCommunityIcons , FontAwesome} from '@expo/vector-icons'; 


const ChatScreen = () => {
  const stop = () => {
    
    Speech.stop();
    };
  const navigation = useNavigation();
  const speak = () => {
    const thingToSay = 'This is the chatscreen. You can chat with the people who have matched with you. To chat, just press the image of that person';
    Speech.speak(thingToSay);
  };
  const speak1 = () => {
    const thingToSay = 'यह चैट स्क्रीन है। आप उन लोगों के साथ बातें कर सकते हैं जो आपके साथ मेल खाते हैं। चैट करने के लिए, बस उस व्यक्ति की छवि दबाएं';
    Speech.speak(thingToSay, {language: "hin"});
  };
 
  return (
    
      
     <View style={tw(" flex flex-1  mt-7")}>
      <ImageBackground
       source={require("../imp.jpg")}
        resizeMode="cover"
       style={tw("h-full w-full")}>

      
       <View style={tw("flex flex-row justify-between")} >
       
       
        
       <Header title="Chat" />
       {/* <View style={tw("flex flex-row justify-between bg-black m-1 p-3 rounded-full")}>
       
      
       </View> */}

       
       
     
       </View>
      
      
       {/* <Text>hello</Text> */}

      
      

      <ChatList />
      {/* <Text>hello</Text> */}
      {/* <Button
        title="Go Back to Home Screen"
        onPress={() => navigation.goBack()}
      /> */}

<View style={tw("flex flex-row  justify-between bg-black bottom-0")}>
        <TouchableOpacity   onPress={speak}>
           {/* <Ionicons name="star" size={30} color="black" /> */}
           <MaterialCommunityIcons style={tw("mx-3 mb-1")} name="alpha-e-box" size={40} color="white" />
           </TouchableOpacity>
           {/* <TouchableOpacity
           style={tw("rounded-full p-1   ")}
        
          onPress={stop}>
          <FontAwesome name="square" size={34} color="white" />
        </TouchableOpacity> */}

           <TouchableOpacity   onPress={speak1}>
           {/* <Ionicons name="star" size={30} color="black" /> */}
           <MaterialCommunityIcons style={tw("mx-3 mb-1")} name="alpha-h-box" size={40} color="white" />
           </TouchableOpacity>
         </View>

      </ImageBackground>
    </View>
  );
};

export default ChatScreen;


