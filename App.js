import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StatusBar, Text, View } from 'react-native';
import SignIn from './Components/SignIn/SignIn';
import Splash from './Components/Splash/Splash';
import User from './Components/User/User';


export default function App() {

  const Stack = createNativeStackNavigator();
  return (
    <View style = {{ flex:1 }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Splash" component={Splash} options={{ headerShown:false }}/>
          <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown:false }}/>
          <Stack.Screen name="User" component={User} options={{ headerShown:false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  )
}

