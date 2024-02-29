import{View,Text,StyleSheet, Button} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { FontAwesome5 } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';

import NextScreen from './src/screens/NextScreen';

const HomeScreen = ({navigation}) => {
    return (
        <View style={style.container}>
            <Text>Home Screen 📱</Text>
            <Button title="Next >>" onPress={ () => navigation.navigate("Next")} />
        </View>
    );
};

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStackScreen = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            {/*<Stack.Screen name="Next" component={NextScreen} />*/}
        </Stack.Navigator>
    )
}

const App=()=>{
    return(
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                   tabBarStyle: {
                    backgroundColor: "#EDAA25",
                   },
                   tabBarActiveTintColor: "#C43302",
                   headerStyle:{
                    backgroundColor:"#0A7373"
                   },
                   headerTintColor: "#fff",
                   headerShown: false,
                }}
            >
                <Tab.Screen 
                    name="Home" 
                    component={HomeStackScreen}
                    options={{
                        tabBarIcon:({color,size}) => (
                            <FontAwesome5 name="home" size={size} color={color} />
                        ),
                        tabBarBadge: 999,
                }}/>
                <Tab.Screen 
                    name="Next" 
                    component={NextScreen}
                    options={{
                        tabBarIcon:({color,size}) => (
                            <Foundation name="next" size={size} color={color} />
                        ),
                        tabBarBadge: 666,
                }}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#b7bf99',
        alignItems: 'center',
        justifyContent: 'center',
      },
});

export default App;