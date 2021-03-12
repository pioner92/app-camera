import {Image, StyleSheet, Text, View} from "react-native";
import React from "react";


type propsType = {
    name: string
    text: string
    avatar: string
    bySelf: boolean
}

export const MessageItem: React.FC<propsType> = ({name, text, avatar, bySelf}) => {

    const align = bySelf ? 'flex-end' : 'flex-start'

    return (
        <View style={[styles.container, {alignSelf:align}]}>
            {bySelf ?
                <>
                    <ChatMessageItemText align={align} name={name} text={text} bySelf={bySelf}/>
                    <Image style={styles.avatar} source={avatar}/>
                </>
                :
                <>
                    <Image style={styles.avatar} source={avatar}/>
                    <ChatMessageItemText align={align} name={name} text={text} bySelf={bySelf}/>
                </>
            }
        </View>
    )
}


type chatMessageTextType = {
    text:string
    bySelf:boolean,
    name:string
    align: 'flex-end' | 'flex-start'

}
const ChatMessageItemText:React.FC<chatMessageTextType> = ({text,bySelf,name,align}) => {
    return (
        <View style={[styles.nameAndTextWrapper, {alignItems: align}]}>
            <Text style={styles.name}>{name}</Text>
            <View style={[styles.textWrapper, {backgroundColor: bySelf ? '#fcf287' : '#65f0d9'}]}>
                <Text style={styles.text}>{text}</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: "row"
    },
    nameAndTextWrapper: {
        alignItems: "flex-start",
        marginHorizontal: 10,
        height: 40,
        justifyContent: "space-between"
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 100,
    },
    name: {
        fontSize: 16,
        fontWeight: "bold"
    },
    textWrapper: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 6
    },
    text: {
        fontSize: 12,
    }
})
