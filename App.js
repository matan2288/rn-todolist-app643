import React from 'react';
import {MainAppStyle} from './Style/MainAppStyle.js'
import { HomeScreenTodoList } from './Components/HomeScreenTodoList';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AddTodoScreen } from './Components/AddTodoScreen';
import { UpdateTaskScreen } from './Components/UpdateTaskScreen';

const Stack = createNativeStackNavigator();


export default function App() {

  return (




   
    <NavigationContainer style={MainAppStyle.Container}>
      <Stack.Navigator>
        
        <Stack.Screen name="Home" component={HomeScreenTodoList}  />
        <Stack.Screen name="AddTodo" component={AddTodoScreen}  />
        <Stack.Screen name="UpdateTodo" component={UpdateTaskScreen}  />

      </Stack.Navigator>

    </NavigationContainer>
     

   
  );
}

