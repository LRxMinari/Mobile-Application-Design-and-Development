import { View, StyleSheet, FlatList } from "react-native";
import data from '../data/data-001.json'
import RenderItem from "../componant/RenderItem";

const ListScreen = ({ navigation }) => {
return(
    <View style={styles.container}>
        <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <RenderItem
            item={item}
            onPress={() => navigation.navigate("Item", {item })}
          />
        )}
      />
    </View>
 );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F2EBBF',
    },
    title: { fontSize: 20, fontWeight: 'bold' },

    text: { color: '#000000', fontSize: 20,fontWeight: 'bold', padding: 2 },
    text2: { color: '#757575', fontSize: 15, padding: 2 },

    image: {
        width: '100',
        height: '100',
        padding: 5
    }
});
export default ListScreen;