import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Invoice from './src/components/screens/Invoice';
import Bank_Pan from './src/components/screens/Bank_Pan';
import AddBank1 from './src/components/screens/AddBank1';
import AddBank2 from './src/components/screens/AddBank2';

export default function App() {

  const Stack = createNativeStackNavigator();


  return (
     <NavigationContainer>
        <Stack.Navigator initialRouteName='AddBank1' screenOptions={{headerShown: false}}>
            <Stack.Screen name="Invoice" component={Invoice} />
            <Stack.Screen name="Bank_Pan" component={Bank_Pan} />
            <Stack.Screen name="AddBank1" component={AddBank1} />
            <Stack.Screen name="AddBank2" component={AddBank2} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})