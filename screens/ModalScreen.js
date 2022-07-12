import { doc, serverTimestamp, setDoc } from "@firebase/firestore";
import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity, Button, StyleSheet, ImageBackground } from "react-native";
import tw from "tailwind-rn";
import { db } from "../firebase";
import useAuth from "../hooks/useAuth";
import * as Speech from 'expo-speech';


const ModalScreen = () => {
  const { user } = useAuth();
  const navigation = useNavigation();
  const [image, setImage] = useState(null);
  const [job, setJob] = useState(null);
  const [age, setAge] = useState(null);
  const [username, setUsername] = useState(null);
  const speak = () => {
    const thingToSay = 'Upload profile picture';
    Speech.speak(thingToSay);
  };
  const jobee = () => {
    const thingToSay = 'Enter your occupation';
    Speech.speak(thingToSay);
  };
  const agee = () => {
    const thingToSay = 'Enter your age';
    Speech.speak(thingToSay);
  };
  const dname = () => {
    const thingToSay = 'please enter your name';
    Speech.speak(thingToSay);
  };
  const updatee = () => {
    const thingToSay = ' you can Update your profile here';
    Speech.speak(thingToSay);
  };
  

  const incompleteForm = !image || !job || !age || !username;

  const updateUserProfile = () => {
    
    setDoc(doc(db, "users", user.uid), {
      
      id: user.uid,
      displayName: username,
      photoURL: image,
      job: job,
      age: age,
      timestamp: serverTimestamp(),
    })
      .then(() => {
     
        setImage(null);
        setJob(null);
        setAge(null);
        setUsername(null);
        navigation.navigate("Home");
      })
      .catch((error) => {
       
        alert(error.message);
      });
  };

  return (
    <View style={tw("flex-1 items-center pt-1 mt-4 ")}>
      <ImageBackground
       
        source={require("../imp.jpg")}
        resizeMode="cover"
        style={tw("flex-1  w-full")}
        // style={tw("flex-1 h-100 w-100")}
      >
      {/* <ImageBackground source={image} resizeMode="cover" style={styles.image}> */}
      <TouchableOpacity onPress={updatee}   style={tw("h-20 w-full")}>
      <Image
        style={tw("h-20 w-full mt-3 rounded-full")}
        resizeMode="contain"

        source={require("../logo.png")}
      />
      </TouchableOpacity>
     
      <Text style={tw("text-xl text-center text-gray-500 mt-10 p-2 font-bold")}>
        Welcome {user.displayName} !
      </Text>
      {/* STEPS */}
      {/* <View style={tw("flex-row justify-between items-center ")}> */}
        <TouchableOpacity onPress={speak} style={tw("text-center text-red-400 text-xl p-4 font-bold")}>
      <Text style={tw("text-center text-red-400 text-xl p-4 font-bold")}>
        Step 1: Upload profile pic 
      
      </Text>
      </TouchableOpacity>
      {/* <Button  title="!" onPress={speak} color="#FF5864" /> */}
      {/* </View> */}
      <TextInput
        style={tw("text-center text-xl pb-2 ")}
        placeholder="Profile Pic URL"
        value={image}
        onChangeText={setImage}
      />
      {/* <View style={tw("flex-row justify-between items-center ")}> */}
      <TouchableOpacity onPress={jobee} style={tw("text-center text-red-400 text-xl p-4 font-bold")}>
      <Text style={tw("text-center text-red-400 p-4 text-xl font-bold")}>
        Step 2: Job  
      </Text>
      </TouchableOpacity>
      {/* <Button  title="!" onPress={jobee} color="#FF5864" /> */}
      {/* </View> */}
      <TextInput
        value={job}
        onChangeText={setJob}
        style={tw("text-center text-xl pb-2 ")}
        placeholder="Enter your Occupation"
      />
      {/* <View style={tw("flex-row justify-between items-center ")}> */}
      <TouchableOpacity onPress={agee} style={tw("text-center text-red-400 text-xl p-4 font-bold")}>
      <Text style={tw("text-center text-red-400 p-4 text-xl font-bold")}>
        Step 3: Age 
        
      </Text>
      </TouchableOpacity>
      {/* <Button  title="!" onPress={agee} color="#FF5864" /> */}
      {/* </View> */}
      <TextInput
        value={age}
        onChangeText={setAge}
        style={tw("text-center text-xl pb-2 ")}
        placeholder="Enter your Age"
        //validation
        maxLength={2}
        keyboardType="numeric"
      />
      {/* <View style={tw("flex-row justify-between items-center ")}> */}
      <TouchableOpacity style={tw("text-center text-red-400 p-4 text-xl font-bold")} onPress={dname}>
      <Text style={tw("text-center text-red-400 p-4 text-xl font-bold")}>
        Step 4: Display Name 
      </Text>
      </TouchableOpacity>
      {/* </View> */}
      <TextInput
        value={username}
        onChangeText={setUsername}
        style={tw("text-center text-xl pb-2 ")}
        placeholder="Enter Name"
      />

      <TouchableOpacity
        disabled={incompleteForm}
        onPress={updateUserProfile}
        style={[
          tw("w-64 p-3 rounded-xl absolute justify-center bottom-10 left-20 bg-red-400"),
          //if incompleteForm is true
          incompleteForm ? tw("bg-gray-400") : tw("bg-red-400"),
        ]}
      >
        <Text style={tw("text-center text-white text-xl")}>Update Profile</Text>
      </TouchableOpacity>
      {/* </ImageBackground> */}
      </ImageBackground>
    </View>
  );
};

export default ModalScreen;



