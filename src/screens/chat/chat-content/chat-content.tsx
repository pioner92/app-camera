import {FlatList, Keyboard, KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet, View} from "react-native";
import React from "react";
import {Input} from "./features/chat-input/input";
import {useStore} from "effector-react";
import {$chatMessages} from "./models/models";
import {MessageItem} from "./features/message-item";
import {useHeaderHeight} from "@react-navigation/stack";

const avatar1 = require('../../../../assets/images/123.jpg')
const avatar2 = require('../../../../assets/images/image2.jpg')

export const ChatContent = () => {
    const headerHeight = useHeaderHeight()

    const messages = useStore($chatMessages)

    return (
        <SafeAreaView  style={styles.container}>
            <KeyboardAvoidingView
                // @ts-ignore
                behavior={Platform.OS == 'ios' ? 'padding' : null}
                style={{flex: 1, backgroundColor: '#fff'}}
                keyboardVerticalOffset={Platform.OS === 'ios' ? headerHeight : 0}
            >
                <FlatList
                    onTouchStart={Keyboard.dismiss}
                    inverted={true}
                    initialNumToRender={10}
                    onEndReachedThreshold={0}
                    style={styles.listStyle}
                    data={messages}
                    ItemSeparatorComponent={
                        () => <View style={styles.separator}/>
                    }
                    contentContainerStyle={styles.contentContainerStyle}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => {
                        const {bySelf, text} = item
                        return (
                            <MessageItem bySelf={bySelf} text={text} name={bySelf ? 'admin' : 'bot'}
                                         avatar={bySelf ? avatar1 : avatar2}/>
                        )
                    }}
                />
                <Input/>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    contentContainerStyle: {
        paddingHorizontal: 16,
        paddingVertical: 10,
        width: '100%',
        top: 0,
        bottom: 100
    },
    separator: {
        backgroundColor: 'transparent',
        height: 10
    },
    listStyle: {
        flex: 1,
        backgroundColor: '#fff',
    }
})
