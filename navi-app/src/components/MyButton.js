import{View, Text, StyleSheet,TouchableOpacity} from "react-native"

const MyButton = ({title, color="#048abf", onPress}) =>{
    return(
        <TouchableOpacity 
            style={[styles.button,{backgroundColor:color}]}
            //onPress={()=>Alert.alert('Submitted',`You entered "${message}"`)}
            onPress={onPress}
        >
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
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
    },
});

export default MyButton;