import { View, Image, Text, StyleSheet,TouchableOpacity} from 'react-native';
import MyButton from '../componant/MyButton';
import ImageSet from '../componant/ImageSet';

const HomeScreen = ({navigation}) =>{
    return (
        <View style={styles.container}>
            <Image 
                source={require('../img/Nik.jpg')}
                style = {{width: 150,height: 150,borderRadius: 100,borderColor: '#000000',borderWidth: 4}}
            />
            <Text style={styles.text}>Pradipat Nantasarn</Text>
            <Text style={styles.text2}>6421600115</Text>
            <Image 
                source={{uri: 'https://i.pinimg.com/originals/37/87/80/3787808639805ba94d055024457a4d7b.jpg'}}
                style = {{width: 150,height: 150,borderRadius: 100,borderColor: '#000000',borderWidth: 4}}
            />
            <Text style={styles.text}>Hi I am Winter❄️</Text>
            <Text style={styles.text2}>Aespa🎶</Text>
            <MyButton title="Let's get started" onPress={() => navigation.navigate("List")}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {    
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F2EBBF",
    },
    title: { fontSize: 20, fontWeight: 'bold' },
    text: { color: '#000000', fontSize: 20,fontWeight: 'bold', padding: 2 },
    text2: { color: '#757575', fontSize: 15, padding: 2 },
});

export default HomeScreen;