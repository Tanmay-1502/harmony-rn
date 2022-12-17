import { StyleSheet, Text, View, FlatList , SectionList,TextInput, ScrollView, ImageBackground} from 'react-native'
import React, { useState, useEffect } from 'react';
import tw from "tailwind-rn";
import filter from 'lodash.filter';
import places from "../test.json";
const place= require('../places.json');
const Placescreen = () => {

  const [filterdData, setfiltered]=useState([]);
    const [masterData, setmasterData]=useState([]);
   // console.log(places)
     const [search, setSearch]=useState('');
    //  useEffect(()=>{
    //     if(search.length!=0)
    //         fetchPosts();
    //     return()=>{

    //     }
    //  },[])
     useEffect(()=>{
        fetchPosts();
        return()=>{

        }
     },[])
    const fetchPosts=()=>{
    //    const apiURL="https://jsonplaceholder.typicode.com/posts";
    

    //    fetch(apiURL)

    //     .then((response)=>response.json())
    //     .then((responseJson)=>{
    //         setfiltered(responseJson);
    //         setmasterData(responseJson);
    //     }).catch((error)=>{
    //         console.error(error);
    //     })
            setfiltered(places);
            setmasterData(places);
    }

    const searchFilter=(text)=>{
        if(text){
            const newData=masterData.filter((item)=>{
                const itemData=item.title?
                item.title.toUpperCase()
                :''.toUpperCase();
            const textData=text.toUpperCase();
            return itemData.indexOf(textData)> -1;
            })
            setfiltered(newData);
            setSearch(text);
        } else{
            // <Text>
            //     hello
            // </Text>
            setfiltered(masterData);
            setSearch(text);
        }
    }
    const ItemView=({item})=>{
        return(
           
            <Text style={styles.itemStyle}>
            {item.id}{' '}{item.title.toUpperCase()}
            </Text>
        )
    }
    const ItemSeparatorView=()=>{
        return(
            <View style={{height:0.5, width:'100%', backgroundColor:'#c8c8c8'}}/>

     
        )
    }

  return (
    <View style={tw(" flex-1 bg-red-200 mt-7")}>
      <ImageBackground
      
        source={require("../imp.jpg")}
        resizeMode="cover"
        style={tw("flex-1  w-full")}
        // style={tw("flex-1 h-100 w-100")}
      >
      <Text style={tw("text-center m-5 text-3xl")}>Wheelchair Accessible Hotels and Restaurants</Text>
    
      <TextInput style={styles.textInputStyle}
         value={search} 
         placeholder="Search Here"
         underlineColorAndroid="transparent"
         onChangeText={(text)=>searchFilter(text)}/>
         
           <FlatList  style={styles.flat} data={filterdData}
           keyExtractor={(item, index)=>index.toString()}
           ItemSeparatorComponent={ItemSeparatorView}
           renderItem={ItemView} />

<ScrollView style={styles.test} >
<Text style={tw("text-center m-5 text-2xl")}>KARNAL</Text>
      {place.map((places, id) =>(
         <Text style={tw("text-xl")} key={id}>{places.KARNAL}</Text>
        // <Text key={places.KARNAL}> list of Accessible places in karnal</Text>
        
      ))}
      <Text style={tw("text-center m-5 text-2xl")}>MUMBAI</Text>
      {place.map((places, id) =>(
        <Text style={tw("text-xl")} key={id}>{places.MUMBAI}</Text>
        

        
      ))}
      <Text style={tw("text-center m-5 text-2xl")}>DELHI</Text>
      {place.map((places, id) =>(
        <Text style={tw("text-xl")} key={id}>{places['NEW DELHI']}</Text>
        

        
      ))}
      {/* <Text style={tw("text-center m-5 text-2xl ")}>GURUGRAM</Text>
      {place.map((places) =>(
        <Text style={tw("text-xl")} key={places.GURUGRAM}>{places.GURUGRAM}</Text>
        

        
      ))}<Text style={tw("text-center m-5 text-2xl")}>HYDERABAD</Text>
      {place.map((places) =>(
        <Text style={tw("text-xl")} key={places.HYDERABAD}>{places.HYDERABAD}</Text>
        

        
      ))}<Text style={tw("text-center m-5 text-2xl")}>CHANDIGARH</Text>
      {place.map((places) =>(
        <Text style={tw("text-xl")} key={places.CHANDIGARH}>{places.CHANDIGARH}</Text>
      

        
      ))}<Text style={tw("text-center m-5 text-2xl")}>CHENNAI</Text>
      {place.map((places) =>(
        <Text style={tw("text-xl")} key={places.CHENNAI}>{places.CHENNAI}</Text>
      

        
      ))}<Text style={tw("text-center m-5 text-2xl")}>PUNE</Text>
      {place.map((places) =>(
        <Text style={tw("text-xl")} key={places.PUNE}>{places.PUNE}</Text>
      

        
      ))}<Text style={tw("text-center m-5 text-2xl")}>AMRITSAR</Text>
      {place.map((places) =>(
        <Text style={tw("text-xl")} key={places.AMRITSAR}>{places.AMRITSAR}</Text>
      

        
      ))}<Text style={tw("text-center m-5 text-2xl")}>PATIALA</Text>
      {place.map((places) =>(
        <Text style={tw("text-xl")} key={places.PATIALA}>{places.PATIALA}</Text>
      

        
      ))}<Text style={tw("text-center m-5 text-2xl")}>PATNA</Text>
      {place.map((places) =>(
        <Text style={tw("text-xl")} key={places.PATNA}>{places.PATNA}</Text>
      

        
      ))}<Text style={tw("text-center m-5 text-2xl")}>NAGPUR</Text>
      {place.map((places) =>(
        <Text style={tw("text-xl")} key={places.NAGPUR}>{places.NAGPUR}</Text>
      

        
      ))}<Text style={tw("text-center m-5 text-2xl")}>INDORE</Text>
      {place.map((places) =>(
        <Text style={tw("text-xl")} key={places.INDORE}>{places.INDORE}</Text>
      

        
      ))}<Text style={tw("text-center m-5 text-2xl")}>GOA</Text>
      {place.map((places) =>(
        <Text style={tw("text-xl")} key={places.GOA}>{places.GOA}</Text>
      

        
      ))}<Text style={tw("text-center m-5 text-2xl")}>LUDHIANA</Text>
      {place.map((places) =>(
        <Text style={tw("text-xl")} key={places.LUDHIANA}>{places.LUDHIANA}</Text>
      

        
      ))}
      <Text style={tw("text-center m-5 text-2xl")}>KOLKATA</Text>
      {place.map((places) =>(
        <Text style={tw("text-xl")} key={places.KOLKATA}>{places.KOLKATA}</Text>
      

        
      ))}
      <Text style={tw("text-center m-5 text-2xl")}>LUCKNOW</Text>
      {place.map((places) =>(
        <Text style={tw("text-xl")} key={places.LUCKNOW}>{places.LUCKNOW}</Text>
      

        
      ))}
      <Text style={tw("text-center m-5 text-2xl")}>COCHIN</Text>
      {place.map((places) =>(
        <Text style={tw("text-xl")} key={places.COCHIN}>{places.COCHIN}</Text>
      

        
      ))}
      <Text style={tw("text-center m-5 text-2xl")}>BENGALURU</Text>
      {place.map((places) =>(
        <Text style={tw("text-xl")} key={places.BENGALURU}>{places.BENGALURU}</Text>
      

        
      ))}
      <Text style={tw("text-center m-5 text-2xl")}>BHUBHANESHWAR</Text>
      {place.map((places) =>(
        <Text style={tw("text-xl")} key={places.BHUBHANESHWAR}>{places.BHUBHANESHWAR}</Text>
      

        
      ))}
      <Text style={tw("text-center m-5 text-2xl")}>GUWAHATI</Text>
      {place.map((places) =>(
        <Text style={tw("text-xl")} key={places.GUWAHATI}>{places.GUWAHATI}</Text>
      

        
      ))}
      <Text style={tw("text-center m-5 text-2xl")}>JAMSEDPUR</Text>
      {place.map((places) =>(
        <Text style={tw("text-xl")} key={places.JAMSEDPUR}>{places.JAMSEDPUR}</Text>
      

        
      ))}
      <Text style={tw("text-center m-5 text-2xl")}>SHIMLA</Text>
      {place.map((places) =>(
        <Text style={tw("text-xl")} key={places.SHIMLA}>{places.SHIMLA}</Text>
      

        
      ))} */}
      <Text style={tw("text-center m-5 text-2xl")}>SURAT</Text>
      {place.map((places, id) =>(
        <Text style={tw("text-xl")} key={id}>{places.SURAT}</Text>
      

        
      ))}
      <Text style={tw("text-center m-5 text-2xl")}>VADODRA</Text>
      {place.map((places, id) =>(
        <Text style={tw("text-xl")} key={id}>{places.VADODRA}</Text>
      

        
      ))}
      <Text style={tw("text-center m-5 text-2xl")}>VISHAKHAPATNAM</Text>
      {place.map((places, id) =>(
        <Text style={tw("text-xl")} key={id}>{places.VISHAKHAPATNAM}</Text>
      

        
      ))}
</ScrollView>
     
    
      
</ImageBackground>
    </View>
  )
}

export default Placescreen

const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22
    },
    flat:{
     height: 10
    },
    test:{
      height: 50
    },
    sectionHeader: {
      paddingTop: 2,
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 2,
      fontSize: 14,
      fontWeight: 'bold',
      backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
    itemStyle:{
      padding:15,
   
  },
  textInputStyle:{
      height: 50,
        borderWidth: 1,
      paddingLeft:20,
      margin:5,
      borderColor:'#009688',
      backgroundColor: 'white'
  }

  })
  




