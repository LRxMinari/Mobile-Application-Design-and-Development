import{View,Text,StyleSheet,FlatList} from 'react-native'
import Mybutton from './component/Mybutton';
import itemlist from './data/itemlist.json';
import Renderitem from './component/Renderitem';
const HomeScreen = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
            <Mybutton title ="Next >>" onPress={() =>navigation.navigate("Next")}/>
            <FlatList 
                data={itemlist}
                keyExtractor={(item)=>item.id}
                renderItem={({item})=><Renderitem item={item}/>}
            />
        </View>
    );
  };
  const styles =StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#44803f",
        alignItems: 'center',
        justifyContent: 'center',
      },
  });
  export default HomeScreen;