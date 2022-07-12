import { StyleSheet, Text, View, FlatList , SectionList, ScrollView, ImageBackground} from 'react-native'
import React from 'react'
import tw from "tailwind-rn";

const place= require('../places.json');
const Placescreen = () => {
  return (
    <View style={tw(" flex-1 bg-red-200 mt-7")}>
      <ImageBackground
      
        source={require("../imp.jpg")}
        resizeMode="cover"
        style={tw("flex-1  w-full")}
        // style={tw("flex-1 h-100 w-100")}
      >
      <Text style={tw("text-center m-5 text-3xl")}>Wheelchair Accessible Hotels and Restaurants</Text>
      {/* <ScrollView nestedScrollEnabled={true} style={{ width: "100%" }} >
 <View>
      <Text style={tw("text-center m-5 text-xl")} >
        goa
      </Text> */}
      {/* <FlatList
        data={[
          {key: 'Devin'},
          {key: 'Dan'},
          {key: 'Dominic'},
          {key: 'Jackson'},
          {key: 'James'},
          {key: 'Joel'},
          {key: 'John'},
          {key: 'Jillian'},
          {key: 'Jimmy'},
          {key: 'Julie'},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
      
      
      </View> */}
      {/* </ScrollView> */}
<ScrollView>
<Text style={tw("text-center m-5 text-xl")}>karnal</Text>
      {place.map((places) =>(
        // <Text key={places.KARNAL}>{places.KARNAL}</Text>
        <Text key={places.KARNAL}> list of Accessible places in karnal</Text>
        
      ))}
      <Text style={tw("text-center m-5 text-xl")}>mumbai</Text>
      {place.map((places) =>(
        // <Text key={places.MUMBAI}>{places.MUMBAI}</Text>
         <Text key={places.MUMBAI}>list of Accessible places in mumbai</Text>

        
      ))}
      
</ScrollView>
     
    
      {/* <SectionList
          sections={[
            {title: 'Karnal', data: ['Gym Khana Club Karnal',
            'Ebowla Club Karnal - Best Banquet Hall | Restaurant | Gaming Zone in Karnal',
            'Kewal Dhaba',
            'BHANDARI-S',
            'The Frontier Mail',
            'JBM restaurant',
            'Hwealth Cafe',
            'Foodberry',]},
            {title: 'Delhi', data: ['Gym Khana Club Karnal',
            'Ebowla Club Karnal - Best Banquet Hall | Restaurant | Gaming Zone in Karnal',
            'Kewal Dhaba',
            'BHANDARI-S',
            'The Frontier Mail',
            'JBM restaurant',
            'Hwealth Cafe',
            'Foodberry',]},
            
          ]}
          
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          initialNumToRender={6} 
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => item+index}
        /> */}
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
  })
  


// '1. Karnal Haveli Restaurant'
// '2. Frontier Mail'
// '3. Neelkanth Star Dhaba'
// '4. Jhilmil'
// '5. CHD Daana Paani'
// '6. Bikaner Sweet House'
// '7. Karnal Havelli'
// '8. The Vivaan'
// '9. Themis Barbecue House, Karnal'



