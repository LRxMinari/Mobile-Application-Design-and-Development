import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screens/HomeScreen';
import ListScreen from './src/screens/ListScreen';
import ItemScreen from './src/screens/ItemScreen'

const Stack = createNativeStackNavigator()
const App = () =>{
  return(
    <NavigationContainer>
     <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#F3B562',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerBackTitleVisible: false,
        }}
     >
      <Stack.Screen name="Home" component={HomeScreen}/>
      <Stack.Screen name="List" component={ListScreen}/>
      <Stack.Screen name="Item" component={ItemScreen}/>
    </Stack.Navigator>
    </NavigationContainer>


  );
};

export default App;