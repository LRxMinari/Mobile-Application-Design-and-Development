import { StyleSheet, Text, View, Button } from 'react-native';

const AnotherScreen = ({route,navigation}) => { 
    // functution HomeScreen() {}
    const {id,message} = route.params;
     return (
      <View style={[styles.container , {backgroundColor:"#edaa25"}]}>
        <Text style={styles.title}>Another Screen</Text>
        <Button 
          title="BACK TO HOME" 
          color="#c43302" 
          onPress={()=>{navigation.goBack()}}
        />
        <Text style={[styles.title,{marginTop:10, fontSize: 18}]}>{id}</Text>    
        <Text style={[styles.title,{marginBottom:10, fontSize: 24}]}>{message}</Text>    
      </View>
     )
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darkgreen',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize:16,
    fontWeight:"bold",
  },
});

export default AnotherScreen;