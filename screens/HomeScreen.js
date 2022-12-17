import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import tw from "tailwind-rn";

import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Image,
  StyleSheet,
  ImageBackground,
} from "react-native";
import useAuth from "../hooks/useAuth";
import * as Speech from 'expo-speech';


import { AntDesign, Entypo, Ionicons ,MaterialCommunityIcons, FontAwesome} from "@expo/vector-icons";

import Swiper from "react-native-deck-swiper";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  query,
  serverTimestamp,
  setDoc,
  where,
} from "@firebase/firestore";
import { db } from "../firebase";
import generateId from "../lib/generateId";
const imagex = { uri:"https://img.rawpixel.com/private/static/images/website/2022-05/rm218batch9-katie-01.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=771c694b12f24278b14c76f1dd0a3240"}
const HomeScreen = () => {
  const stop = () => {
    
    Speech.stop();
    };
  const navigation = useNavigation();
  const { user, logout } = useAuth();
  // console.log(user);
  const swipeRef = useRef(null);

  const speak = () => {
    const thingToSay = 'This is the homescreen. you can like the profiles by swiping right. to go to chat screen press the chat icon on the right. to logout press the profile pic on the left . to update your profile,  press the harmony logo ';
    Speech.speak(thingToSay);
  };
  const speak1 = () => {
    const thingToSay = 'यह होम स्क्रीन है। आप दाईं ओर स्वाइप करके प्रोफाइल पसंद कर सकते हैं। चैट स्क्रीन पर जाने के लिए दाईं ओर चैट आइकन दबाएं। लॉगआउट करने के लिए बाईं ओर प्रोफाइल पिक्चर दबाएं। अपनी प्रोफ़ाइल अपडेट करने के लिए, हार्मनी लोगो दबाएं';
    Speech.speak(thingToSay,  {language:"hin"});
  };

  
  const [profiles, setProfiles] = useState([]);

  
  useLayoutEffect(
    () =>
      onSnapshot(doc(db, "users", user.uid), (snapshot) => {
       

        if (!snapshot.exists()) {
          navigation.navigate("Modal");
        }
      }),
    []
  );

  useEffect(() => {
    let unsub;

    const fetchCards = async () => {
      
     
      const passes = await getDocs(
        collection(db, "users", user.uid, "passes")
      ).then(
       
        (snapshot) => snapshot.docs.map((doc) => doc.id) 
      );
      const swipes = await getDocs(
        collection(db, "users", user.uid, "swipes")
      ).then((snapshot) => snapshot.docs.map((doc) => doc.id));

     
      const passedUserIds = passes.length > 0 ? passes : ["test"];
      const swipedUserIds = swipes.length > 0 ? swipes : ["test"];

     

      unsub = onSnapshot(
        query(
          collection(db, "users"),
          where("id", "not-in", [...passedUserIds, ...swipedUserIds])
        ),
        (snapshot) => {
          setProfiles(
           
            snapshot.docs
              .filter((doc) => doc.id !== user.uid)
              .map((doc) => ({
                id: doc.id,
                ...doc.data(),
              }))
          );
        }
      );
    };
    fetchCards();

    return unsub;
  }, [db]);

  

  const swipeLeft = (cardIndex) => {
  
    if (!profiles[cardIndex]) return;


    const userSwiped = profiles[cardIndex];
   
    setDoc(
      doc(db, "users", user.uid, "passes", userSwiped.id),
      userSwiped 
    );
  };
  const swipeRight = async (cardIndex) => {
    if (!profiles[cardIndex]) return;

    //get that user's data
    const userSwiped = profiles[cardIndex];

   
    const loggedInProfile = await getDoc(doc(db, "users", user.uid)).then(
      (userData) =>
       
        userData.data()
    );

   
    getDoc(doc(db, "users", userSwiped.id, "swipes", user.uid)).then(
      (documentSnapshot) => {
        if (documentSnapshot.exists()) {
        
          setDoc(
            doc(db, "users", user.uid, "swipes", userSwiped.id),
            userSwiped
          );

         

          setDoc(doc(db, "matches", generateId(user.uid, userSwiped.id)), {
   

            users: {
             
              [user.uid]: loggedInProfile,
              [userSwiped.id]: userSwiped, 
            },

            usersMatched: [user.uid, userSwiped.id], 
            timestamp: serverTimestamp(),
          });

          navigation.navigate("Match", {
            
            loggedInProfile,
            userSwiped,
          });
        } else {
          

          setDoc(
            doc(db, "users", user.uid, "swipes", userSwiped.id),
            userSwiped
          );
        }
      }
    );
  };

  return (
    
    <View style={tw("flex-1 mt-8 ")}>
    
       <ImageBackground source={imagex} resizeMode="cover" style={styles.imagex}>
      
      <View style={tw("relative items-center ")}>
        <TouchableOpacity style={tw("absolute left-5 top-3 ")} onPress={logout}>
        
          <Image
            source={{ uri: user.photoURL }}
            style={tw("h-12 w-12 rounded-full ")}
          />
         
         
        </TouchableOpacity>
        <TouchableOpacity style={tw("absolute right-5 top-3")} onPress={() => navigation.navigate("Modal")}>
        
          {/* <Image
            source={{ uri: user.photoURL }}
            style={tw("h-10 w-10 rounded-full")}
          /> */}

            <Image style={tw("  rounded-full h-12 w-12  bg-black")} source={require("../newlogo2.png")} />
        </TouchableOpacity>
        

        {/* <TouchableOpacity onPress={() => navigation.navigate("Modal")}>
          
          <Image style={tw("my-1  rounded-full h-14 w-14 mt-3 bg-black")} source={require("../newlogo2.png")} />
        </TouchableOpacity>
         
      
        <TouchableOpacity
          style={tw("absolute right-5 top-3")}
          onPress={() => navigation.navigate("Chat")}
        >
          
          <Ionicons name="chatbubbles-sharp" size={30} color="black" />
        </TouchableOpacity> */}
      </View>
      
      
      <View style={tw("flex-1 mt-6")}>
        <Swiper
          ref={swipeRef}
          containerStyle={{ backgroundColor: "transparent" }}
          cards={profiles}
         
          stackSize={5}
          cardIndex={0} //starts at zero, helps a lot later
          verticalSwipe={false}
          

          
          onSwipedLeft={(cardIndex) => {
           
            swipeLeft(cardIndex);
          }}
          onSwipedRight={(cardIndex) => {
           
            swipeRight(cardIndex);
          }}
          //ending SWIPE FUNCTIONS
          backgroundColor={"#4FD0E9"}
          overlayLabels={{
            left: {
              title: "NOPE",
              style: {
                label: {
                  textAlign: "right", //by default its to the left
                  color: "red",
                },
              },
            },
            right: {
              title: "MATCH",

              style: {
                label: {
                  color: "#4DED30",
                },
              },
            },
          }}
          animateCardOpacity 
          renderCard={(card) =>
            card ? (
              <View
                key={card.fakeId}
                style={tw("relative bg-white h-3/4 rounded-xl")}
              >
                <Image
                  source={{ uri: card.photoURL }}
                  style={tw("absolute top-0 h-full w-full rounded-xl")}
                />
             
                <View
                  style={[
                    tw(
                      "absolute bottom-0 flex-row bg-white justify-between items-center w-full h-20 px-6 py-2 rounded-b-xl"
                    ),
                    styles.cardShadow,
                  ]}
                >
                  <View>
                    <Text style={tw("text-xl font-bold")}>
                      {card.displayName}
                    </Text>
                    <Text>{card.job}</Text>
                  </View>
                  <Text style={tw("text-2xl font-bold")}>{card.age}</Text>
                </View>
              </View>
            ) : (
              // 
              <View
                style={[
                  tw(
                    "relative bg-white h-3/4 rounded-xl justify-center items-center"
                     
                  ),
                  styles.cardShadow,
                ]}
              >
               <TouchableOpacity style={tw("font-bold  h-20 w-20")} onPress={speak}>
                {/* <Text style={tw("font-bold pb-5")}>No More Profiles</Text> */}
               
                <Image
                  style={tw("h-20 w-20")}
                  height={100}
                  width={100}
                  source={{ uri: "https://links.papareact.com/6gb" }}
                />
                 </TouchableOpacity>
              </View>
              //
            )
          }
        />
      </View>

      {/* useRef buttons here */}
      <View style={tw("flex flex-row justify-evenly mb-8")}>
        <TouchableOpacity
          onPress={() => swipeRef.current.swipeLeft()}
          style={tw(
            "items-center justify-center rounded-full w-20 h-20 bg-black"
          )}
        >
          <Entypo name="cross" size={30} color="#FF5864" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => swipeRef.current.swipeRight()}
          style={tw(
            "items-center justify-center rounded-full w-20 h-20 bg-black"
          )}
        >
          <AntDesign name="check" size={30} color="lightgreen" />
        </TouchableOpacity>
        <TouchableOpacity
         // onPress={() => swipeRef.current.swipeRight()}
         onPress={() => navigation.navigate("Chat")}
          style={tw(
            "items-center justify-center rounded-full w-20 h-20 bg-black"
          )}
        >
           <Ionicons name="chatbubbles-sharp" size={30} color="white" />
          {/* <AntDesign name="check" size={30} color="lightgreen" /> */}
        </TouchableOpacity>
      </View>

      <View style={tw("flex flex-row  justify-between bg-black")}>
        <TouchableOpacity   onPress={speak}>
           {/* <Ionicons name="star" size={30} color="black" /> */}
           <MaterialCommunityIcons style={tw("mx-3 mb-1")} name="alpha-e-box" size={40} color="white" />
           </TouchableOpacity>
           <TouchableOpacity
           style={tw("rounded-full   ")}
        
          onPress={stop}>
          <FontAwesome name="square" size={35} color="white" />
        </TouchableOpacity>

           <TouchableOpacity   onPress={speak1}>
           {/* <Ionicons name="star" size={30} color="black" /> */}
           <MaterialCommunityIcons style={tw("mx-3 mb-1")} name="alpha-h-box" size={40} color="white" />
           </TouchableOpacity>
         </View>

      </ImageBackground>

      

    </View>
    
  );
};

export default HomeScreen;


const styles = StyleSheet.create({
  cardShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  imagex:{
    flex: 1,
      justifyContent: "center"
  }
});



