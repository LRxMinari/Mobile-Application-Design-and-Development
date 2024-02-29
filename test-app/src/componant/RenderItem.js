import { FlatList, StyleSheet, View } from 'react-native';
import ImageSet from './ImageSet';

const RenderItem = ({ item, onPress }) => {
    return (
      <View style={styles.container}>
        <ImageSet
          source={{ uri: item.photo_url }}
          title={item.name}
          style={{ height: 100, width: 100 }}
          onPress={onPress}
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
});
 export default RenderItem;  