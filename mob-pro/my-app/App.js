import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  Text, 
  View,
  Image, 
  ScrollView,
  Button,
  TextInput,
  TouchableOpacity
  ,ActivityIndicato,
  FlatList,
  Alert,
  SectionList,

} from 'react-native';

const flastListData = [
  {id: "cs001", name: "database"},
  {id: "cs002", name: "moblie"},
  {id: "cs003", name: "game"},
  {id: "cs004", name: "calculus"},
  {id: "cs005", name: "network"},
];

const sectionListData = [
  {title: 'Group A', data: ["Liverpool", "ManU"]},
  {title: 'Group B', data: ["Ac Milan", "Inter Milan"]},
  {title: 'Group C', data: ["Real Madrid", "Bacelona"]},
  {title: 'Group D', data: ["Westham", "Napoli"]},
];

export default function App() {
  const [num,setNum] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <View style = {styles.container}>
      <View style ={styles.section}>
        <Text style = {styles.tile}>List:</Text>
        <FlatList
          data={flastListData}
          renderItem={({item})=>(
            <TouchableOpacity onPress={()=>Alert.alert("Alert ❄️",item.name)}>
            <View style={{
              backgroundColor:"#f7ede2",
              padding: 7 ,
              borderWidth:5,
              borderColor: "#999",
              borderRadius: 7,
              elevation: 5 ,
              marginBottom:3,
              }}>
              <Text style={{color: "#999"}}>{item.id}</Text>
              <Text style={{fontSize: 18}}>{item.name}</Text>
            </View>
            </TouchableOpacity>
          )}
        />
      </View>

      <Text style={styles.tile}>SectionList</Text>
      <SectionList 
        sections={sectionListData}
        renderItem={({section , item}) => (
          <View
            style={{
              backgroundColor: "6594c0",
              padding: 8,
              borderBottomWidth: 1,
              borderBootomColor: "#0ele5b",
              borderRightWidth: 1,
              borderRightColor: "#0e1e5b",
              elevation: 5,
            }}
          >
            <Text style={{ fontSize: 16, color: "#091442"}}>{item}</Text>
          </View>
        )}
        renderSectionHeader={({section}) => (
          <Text style={{ fontSize: 20}}>{section.title}</Text>
        )}
      ></SectionList>
    </View>
  );
}

const styles = StyleSheet.create({
  tile:{
    fontSize: 20,
    marginBottom :5,
    marginTop:10,
    alignSelf: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
   subtile: {
    fontSize : 20,
    alignSelf : 'center'
   },
   image:{
    width: 200,
    height: 200,
    alignSelf:'center',
   },
   im:{
    width: 200,
    height: 200,
    marginTop:0,
    alignSelf:'center',
   },
   section:{
    marginBottom:10,
   },
   input:{
      borderWidth:1,
      borderColor:"#ccc",
      height:40,
      paddingLeft:10,
   },
});