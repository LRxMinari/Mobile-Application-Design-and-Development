import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import { Alert } from 'react-native';
import { useState } from 'react';
import MyButton from '../components/MyButton';
import MyInput from '../components/MyInput'; 

const NextScreen = () => {
    const [message,setMessage] = useState("");
    const [subject,setsubject] = useState("");
    return (
        <View style={styles.container}>
            <Text>Next Screen</Text>
            <View style={styles.inputContainer}>
                <TextInput 
                    placeholder="Type something..." 
                    style={styles.TextInput}
                    value={message} 
                    onChangeText={(text)=>setMessage(text)} 
                />
            </View>
            <TouchableOpacity style={styles.button}onPress={() =>Alert.alert("Text is",message)}>
                <Text style={styles.text}>Submit</Text>
            </TouchableOpacity>
            <MyButton title="Reset" color="#f25caf" />
            <MyInput
                placeholder="Type something again..."
                value={subject}
                onChangeText={(text)=>setsubject(text)}
            />
            <MyButton title="Drop" color="#2a36b1" onPress={()=>Alert.alert("Drop !!!",subject)} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#44803f",
      alignItems: 'center',
      justifyContent: 'center',
    },
    input:{
        font:16,
    },
    inputContainer:{
        borderWidth:1,
        borderColor:"#ffec5c",
        borderRadius:8,
        paddingHorizontal:10,
        paddingVertical:5,
        marginTop:5,
        marginBottom:10,
    },
    button:{
        borderRadius:8,
        padding:12,
        justifyContent:"center",
        alignItems:"center",
        marginVertical:10,
        backgroundColor:"#ff5a33",
    },
    text:{
        color:"#fff",
        fontSize:18,

    }
  });

  export default NextScreen;