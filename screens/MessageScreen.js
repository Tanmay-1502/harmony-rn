import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from "@firebase/firestore";
import { useRoute } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
  ImageBackground, TouchableOpacity
} from "react-native";
import tw from "tailwind-rn";
import Header from "../components/Header";
import ReceiverMessage from "../components/ReceiverMessage";
import SenderMessage from "../components/SenderMessage";
import { db } from "../firebase";
import useAuth from "../hooks/useAuth";
import getMatchedUserInfo from "../lib/getMatchedUserInfo";
import * as Speech from 'expo-speech';
import { FontAwesome } from '@expo/vector-icons';
const MessageScreen = () => {
  const stop = () => {
    
    Speech.stop();
    };
  const { user } = useAuth();
  const { params } = useRoute();
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const { matchDetails } = params;
  const speak = () => {
    const thingToSay = 'hello';
    Speech.speak(thingToSay);
  };


  useEffect(
    () =>
      onSnapshot(
        query(
          collection(db, "matches", matchDetails.id, "messages"),
          orderBy("timestamp", "desc")
        ),
        (snapshot) =>
          setMessages(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }))
          )
      ),
    [matchDetails, db]
  );

  const sendMessage = () => {
    
    addDoc(collection(db, "matches", matchDetails.id, "messages"), {
      //represent the msgs here
      timestamp: serverTimestamp(),
      userId: user.uid,
      displayName: user.displayName,
      photoURL: matchDetails.users[user.uid].photoURL, 
      message: input,
    });

    
    setInput("");
  };

  return (
    <View style={tw("flex-1 mt-6")}>
      <ImageBackground
        source={require("../imp.jpg")}
        resizeMode="cover"
        style={tw("flex-1  w-full")}
        // style={tw("flex-1 h-100 w-100")}
      >
       
      <Header
        title={getMatchedUserInfo(matchDetails?.users, user.uid).displayName}
        callEnabled
      />
      {/* <TouchableOpacity
           style={tw("rounded-full  left-20   ")}
        
          onPress={stop}>
        
         
          <FontAwesome name="square" size={24} color="black" />
        </TouchableOpacity> */}
        

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={tw("flex-1")}
        keyboardVerticalOffset={10}
      >
       
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <FlatList
            data={messages}
            inverted={-1} 
            style={tw("pl-4")}
            keyExtractor={(item) => item.id}
            renderItem={({ item: message }) =>
              message.userId === user.uid ? (
                <SenderMessage key={message.id} message={message} />
              ) : (
                <ReceiverMessage key={message.id} message={message} />
              )
            }
          />
        
        </TouchableWithoutFeedback>
       {/* <Text> test</Text> */}
        <View
          style={tw(
            "flex-row justify-between items-center border-t border-gray-200 px-5 py-2 bg-white"
          )}
        >
        
          <TextInput
            style={tw("h-10 text-lg")}
            placeholder="Send message..."
            onChangeText={setInput}
            onSubmitEditing={sendMessage} //press enter to send
            value={input}
          
          />
          <Button title="Send" onPress={sendMessage} color="#FF5864" />
        </View>
      </KeyboardAvoidingView>
      </ImageBackground>
    </View>
  );
};

export default MessageScreen;
