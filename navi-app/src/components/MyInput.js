import { setStatusBarBackgroundColor } from "expo-status-bar";
import{View, TextInput, StyleSheet} from "react-native"

const MyInput = ({placeholder,...otherProps}) =>{
    return(
        <View style={styles.inputContainer}>
            <TextInput 
                    placeholder={placeholder}
                    style={styles.TextInput}
                    {...otherProps}
                    //value={message}
                    //onChangeText={(text) =>{ setMessge(text)}}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    button:{
        borderRadius:8,
        padding:12,
        justifyContent:'center',
        alignItems:'center',
        marginVertical:10,
        backgroundColor:"#ff5a33",
    },
    text:{
        color:"#fff",
        fontSize:18,
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
});

export default MyInput; 