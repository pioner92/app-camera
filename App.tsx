import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Chats} from "./src/screens/chat/chat-list/chat-list";
import {createStackNavigator} from "@react-navigation/stack";
import {MainTabScreen} from "./src/screens/chat/main-tab-screen";
import {ChatContent} from "./src/screens/chat/chat-content/chat-content";


const Stack = createStackNavigator();

export default function App() {

  return (
      <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown:false}}>
              <Stack.Screen
                  name='Main'
                  component={MainTabScreen}
              />
              <Stack.Screen
                  name='ChatContent'
                  options={{headerShown:true,headerBackTitle:'Chats',title:'Chat'}}
                  component={ChatContent}
              />
          </Stack.Navigator>
      </NavigationContainer>
  );
}
