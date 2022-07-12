import { useNavigation } from "@react-navigation/core";
import React, { useLayoutEffect } from "react";
import {
  View,
  Text,
  Button,
  ImageBackground,
  TouchableOpacity,
  Image
} from "react-native";
import useAuth from "../hooks/useAuth";
import tw from "tailwind-rn";
import * as Speech from 'expo-speech';
import { AntDesign, Entypo, Ionicons, EvilIcons,MaterialCommunityIcons,  FontAwesome} from "@expo/vector-icons";
const LoginScreen = () => {
  
  const { signInWithGoogle, loading } = useAuth();
  // const { user } = useAuth();
  

  const navigation = useNavigation(); //redirect user
  const speak = () => {
    const thingToSay = 'Welcome to Harmony. We hope everyone finds a suitable partner for themselves. In case you find any difficulty using the app, just press the star icon on that screen and  proper assistance would be given to you. to get started , You can press the sign in button to login using your google account. After that setup your profile and find a match by swiping right. Best Wishes and good luck';
    Speech.speak(thingToSay);
    
  };
  const speakhindi = () => {
    const thingToSay = 'हार्मनी में आपका स्वागत है। हमें उम्मीद है कि हर किसी को अपने लिए एक उपयुक्त साथी मिल जाएगा। यदि आपको ऐप का उपयोग करने में कोई कठिनाई आती है, तो बस उस button पर दबाएं और आप जाने के लिए तैयार हैं। यह लॉगिन स्क्रीन है। आप अपने Google Account का उपयोग करके लॉगिन करने के लिए Sign In बटन दबा सकते हैं। इसके बाद अपना profile सेटअप करें और स्वाइप करें';
    Speech.speak(thingToSay, {language: "hin"});
    
  };

 

  return (
    <View style={tw("flex-1")}>
      <ImageBackground
       
        source={require("../imp.jpg")}
        resizeMode="cover"
        // style={tw("flex-1 h-753 w-753")}
        style={tw("flex-1  w-full")}
      >
        <Image
        style={tw("h-72 w-full my-40 rounded-full ")}
        resizeMode="contain"

        source={require("../logo.png")}
      />

<TouchableOpacity
          style={tw("absolute right-5 top-10")}
          onPress={speak}
        >
          <Ionicons name="star" size={30} color="black" />
        </TouchableOpacity>
       
        <TouchableOpacity
          style={[
            tw("absolute bottom-40 h-28 w-52 p-2 rounded-2xl"),
            { marginHorizontal: "25%" },
          ]}
          onPress={signInWithGoogle}
        >
          <Text style={tw("font-bold text-2xl text-center  ")}>
          
Sign In to find your Soulmate
          </Text>
        </TouchableOpacity>
      </ImageBackground>
      
    </View>
  );
};

export default LoginScreen;
