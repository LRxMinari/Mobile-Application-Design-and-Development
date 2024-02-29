import { FlatList, StyleSheet, View, Text } from "react-native";
import ImageSet from "../componant/ImageSet";
const ItemScreen =({route}) =>{
const { item } = route.params;
  return (
    <>
      <View style={styles.container}>
        <ImageSet
          source={{ uri: item.photo_url }}
          title={item.name}
          description={item.description}
          style={{ height: 150, width: 150 }}
        ></ImageSet>
        <Text style={styles.imgTitle}>List Food😋</Text>
        <FlatList
          data={item.sample_foods}
          renderItem={({ item }) => (
            <View>
              <Text>{`- ${item}`}</Text>
            </View>
          )}
        />
      </View>
    </>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F2EBBF',
    },
    imgTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 15,
    },
  });

export default ItemScreen;