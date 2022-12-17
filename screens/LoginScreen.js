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
  const stop = () => {
    
    Speech.stop();
    };

  const navigation = useNavigation(); //redirect user
  const speak = () => {
    const thingToSay = 'Welcome to Harmony. We hope everyone finds what they seek. In case you find any difficulty using the app, just press the star icon on that screen and  proper assistance would be given to you. to get started , You can press the sign in button to login using your google account. After that setup your profile and find a match by swiping right. Best Wishes and good luck';
    Speech.speak(thingToSay);
    
  };
  const speak1 = () => {
    const thingToSay = 'हार्मनी में आपका स्वागत है।  यदि आपको ऐप का उपयोग करने में कोई कठिनाई आती है, तो बस उस button पर दबाएं । ';
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
      <TouchableOpacity onPress={stop}>
        <Image
        style={tw("h-72 w-full my-40 bg-white ")}
        resizeMode="contain"

        source={require("../newlogo1.png")}
      />
      </TouchableOpacity>

<TouchableOpacity
          style={tw("absolute right-5 top-10")}
          onPress={speak}
        >
           <MaterialCommunityIcons style={tw("mx-3 mb-1")} name="alpha-e-circle-outline" size={40} color="black" /> 
        </TouchableOpacity>
        <TouchableOpacity
          style={tw("absolute right-5 top-20")}
          onPress={speak1}
        >
       <MaterialCommunityIcons style={tw("mx-3 mb-1")} name="alpha-h-circle" size={40} color="black" />
        </TouchableOpacity>
        {/* <TouchableOpacity
          style={tw("absolute right-50 top-10")}
          onPress={stop}
        >
       <MaterialCommunityIcons style={tw("mx-3 mb-1 rounded")} name="square" size={40} color="black" />
        </TouchableOpacity> */}
        {/* <TouchableOpacity
           style={tw("rounded-full left-5 top-10")}
        
          onPress={stop}>
          <FontAwesome name="square" size={35} color="white" />
        </TouchableOpacity> */}
        <TouchableOpacity
          style={[
            tw(" flex flex-row justify-center items-center absolute bottom-40 h-28 w-52 p-2 rounded-2xl"),
            { marginHorizontal: "25%" },
          ]}
          onPress={signInWithGoogle}
        >
          <Text style={tw("font-bold  text-2xl text-center  ")}>
          
Sign In to connect
          </Text>
          <Image style={tw(" m-1 h-8 w-8 bg-white rounded-full ")}
        resizeMode="contain"

        source={require("../googlelogo.png")}
      />
        </TouchableOpacity>

      
      </ImageBackground>
      
    </View>
  );
};

export default LoginScreen;
