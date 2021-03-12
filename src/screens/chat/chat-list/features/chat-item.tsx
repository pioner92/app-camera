import {Text, View, StyleSheet, TouchableOpacity, Image} from "react-native";
import React from "react";
import {useNavigation} from '@react-navigation/native'
import {links} from "../../../../links";
const avatar = require('../../../../../assets/images/123.jpg')

type propsType = {
    chatData:{name:string,id:number,lastMessage:string}
}

export const ChatItem:React.FC<propsType> = ({chatData}) => {

    const {navigate} = useNavigation()

    const onPress = () => {
        navigate(links.chatContent)
    }

    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Image style={styles.avatar} source={avatar}/>
            <View>
                <Text style={styles.title}>{chatData.name}</Text>
                <Text style={styles.lastMessage}>{chatData.lastMessage}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        alignItems:"center"
    },
    avatar:{
        width:50,
        height:50,
        borderRadius:100,
        backgroundColor:'red',
        marginRight:10
    },
    title:{
        fontSize:16,
        color:'#393939',
        fontWeight:"bold"
    },
    lastMessage:{
        fontSize:12,
        color:'#4a4a4a'
    }
})
