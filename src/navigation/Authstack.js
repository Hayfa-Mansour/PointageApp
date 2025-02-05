import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from '../Screens/Splash';
import Login from '../Screens/Login';
import Signup from '../Screens/Signup';
import Forgetpass from '../Screens/Forgetpass1';
import Verifycode from '../Screens/Forgetpass2';
import Modepasse from '../Screens/Forgetpass3';


const Stack = createStackNavigator();

 export default function Authstack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName="Splash">
        <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
        <Stack.Screen name="login" component={Login} options={{ headerShown: true , title: 'Connexion' }} />
        <Stack.Screen name="signup" component={Signup} options={{ headerShown: true , title: 'Inscription' }} />
        <Stack.Screen name="forget" component={Forgetpass} options={{ headerShown: true , title: 'Mot de Passe Oublié' }} />
        <Stack.Screen name="verify" component={Verifycode} options={{ headerShown: true , title: 'Vérification par e-mail'  }} />
       <Stack.Screen name="modepasse" component={Modepasse} options={{ headerShown: true,title: 'Modification Mot de passe '  }} /> 
       
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

