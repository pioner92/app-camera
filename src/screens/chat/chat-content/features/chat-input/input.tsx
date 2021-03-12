import {StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import React from "react";
import {$chatInputValue, setChatInputValue} from "./models/models";
import {useStore} from "effector-react";
import {addChatMessage} from "../../models/models";

export const Input = () => {

    const inputValue = useStore($chatInputValue)

    const onPress = () => {
        if(inputValue.trim().length) {
        addChatMessage({text:inputValue,bySelf:true})
        setChatInputValue('')
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
            <TextInput value={inputValue} onChangeText={setChatInputValue} style={styles.input}/>
            <TouchableOpacity onPress={onPress} style={styles.sendButton}>
                <Text style={{textAlign:"center"}}>Send</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal:16,
        height:70,
        width: '100%',
        bottom: 0,
        backgroundColor:'#fff',
    },
    wrapper:{
        alignItems: "center",
        flexDirection: "row",

    },
    sendButton: {
        width: 60,
        alignItems:"flex-end",
        justifyContent:"center"
    },
    input: {
        height:40,
        flex: 1,
        width: '100%',
        borderWidth: 1,
        borderRadius: 6,
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginTop:5
    }
})
