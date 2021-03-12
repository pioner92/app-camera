import {FlatList, SafeAreaView, StatusBar, StyleSheet, View} from "react-native";
import React from "react";
import {ChatItem} from "./features/chat-item";
import {StackScreenCreator} from "../../stack-screen-creator";
import {useStore} from "effector-react";
import {$chatList} from "./models/models";
import {links} from "../../../links";


export const Chats = () => {

    const chats = useStore($chatList)

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={'#fff'} barStyle={"dark-content"}/>
            <FlatList
                contentContainerStyle={{paddingVertical: 20}}
                data={[chats]}
                ItemSeparatorComponent={() => <View style={styles.separator}/>}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => <ChatItem chatData={item}/>}
            />
        </SafeAreaView>
    )
}

export const ChatListStackScreen = () => StackScreenCreator({
    component: Chats,
    title: 'Chats',
    link: links.chatList,
    headerShown: true
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        backgroundColor: '#fff'
    },
    separator:{
        backgroundColor: 'transparent',
        height: 6
    }
})
