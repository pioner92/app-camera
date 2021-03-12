import {CameraStackScreen} from "../camera-screen/camera-screen";
import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {ChatListStackScreen} from "./chat-list/chat-list";

const Tab = createBottomTabNavigator();


export const MainTabScreen = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Camera" component={CameraStackScreen} />
            <Tab.Screen name="Chats"  component={ChatListStackScreen} />
        </Tab.Navigator>
    )
}
