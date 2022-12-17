import { useNavigation, useRoute } from "@react-navigation/core";
import React from "react";
import tw from "tailwind-rn";
import { View, Text, Image, TouchableOpacity } from "react-native";

const MatchedScreen = () => {
  
  const navigation = useNavigation();
  const { params } = useRoute();

  const { loggedInProfile, userSwiped } = params;

  return (
    <View style={[tw("h-full bg-black pt-20"), { opacity: 0.89 }]}>
      <View style={tw("justify-center items-center px-10 pt-20")}>
        <Image
          source={require("../connect.jpg")}
          style={tw("h-20 w-20")}
        />
      </View>
      <Text style={tw("text-white text-center mt-5")}>
        You and {userSwiped.displayName} are connected!
      </Text>

      <View style={tw("flex-row justify-evenly mt-5 ")}>
        {/* //both images of users */}
        <Image
          source={{ uri: loggedInProfile.photoURL }}
          style={tw("h-32 w-32 rounded-full")}
        />
        <Image
          source={{ uri: userSwiped.photoURL }}
          style={tw("h-32 w-32 rounded-full")}
        />
      </View>
      <TouchableOpacity
        style={tw("bg-white m-5 px-10 py-8 rounded-full mt-20")}
        onPress={() => {
          //hide current modal and navigate to chat screen
          navigation.goBack();
          navigation.navigate("Chat");
        }}
      >
        <Text style={tw("text-center text-lg")}>Send a Message!</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MatchedScreen;
