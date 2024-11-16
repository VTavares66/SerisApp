import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './Screens/LoginScreen'; // Importe a tela de login
import UploadScreen from './Screens/UploadScreen'; // Importe a tela de upload
import ViewScreen from './Screens/ViewScreen'; // Importe a tela de visualização

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {/* Tela de Login */}
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />

        {/* Fluxo Principal após Login */}
        <Stack.Screen name="Main" options={{ headerShown: false }}>
          {() => (
            <Stack.Navigator>
              <Stack.Screen name="Upload" component={UploadScreen} />
              <Stack.Screen name="View" component={ViewScreen} />
            </Stack.Navigator>
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
