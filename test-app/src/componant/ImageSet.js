import { Text, StyleSheet, Image, TouchableOpacity} from "react-native";

const ImageSet = ({ source, onPress, style, title, subTitle, description}) => {
    return (
      <TouchableOpacity onPress={onPress} style={styles.imageContainer}>
        <Image source={source} style={[style, styles.image ,styles.text ,styles.text2]} />
        <Text style={styles.imgTitle}>{title}</Text>
        <Text style={styles.imgSubTitle}>{subTitle}</Text>
        <Text style={styles.imgSubTitle}>{description}</Text>
      </TouchableOpacity>
    );
  };

  const styles = StyleSheet.create({
    image: {
        width: 150,
        height: 150,
        borderRadius: 200,
        borderWidth: 3,
        borderColor: "#000",
    },
    imageContainer: {
      alignItems: 'center',
      marginVertical: 10,
    },
    image: {
      borderRadius: 200,
      borderWidth: 3,
      borderColor: '#000',
    },
    imgTitle: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    imgSubTitle: {
      color: '#666',
    },
  });

export default ImageSet;
