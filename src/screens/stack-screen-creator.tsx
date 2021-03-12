import {createStackNavigator} from "@react-navigation/stack";
import React from "react";
const Stack = createStackNavigator()


type propsType = {
    link: string
    title: string
    component: React.FC<any>
    headerShown?: boolean
}

export const StackScreenCreator: React.FC<propsType> = ({title, link, component, headerShown = true}) => {
    return (
        <Stack.Navigator
            screenOptions={{
        headerStyle: {},
    }}
>
    <Stack.Screen
        name={link}
    component={component}
    options={{
        title: title,
            headerShown,
            headerTintColor: '#000',
            headerStyle: {
            backgroundColor: '#fff',
                borderColor: 'transparent',
                shadowColor: '#000',
                shadowOffset: {
                width: 0,
                    height: 1,
            },
            shadowOpacity: 0.10,
                shadowRadius: 1.41,
                elevation: 2,
        },
    }}
    />
    </Stack.Navigator>
)
}
