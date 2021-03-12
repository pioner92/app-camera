import {Dimensions, StyleSheet, View} from "react-native";
import React, {useEffect} from "react";
import {Camera} from 'expo-camera'
import {StackScreenCreator} from "../stack-screen-creator";
import {links} from "../../links";

const width = Dimensions.get('window').width

const CameraScreen = () => {

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
        })();
    }, []);

    return (
        <View style={{width:'100%',height:'100%'}}>
            <View style={styles.header}/>
            <Camera
                style={{width:'100%',height:'100%'}}
                type={'front'}
                autoFocus={true}
            >
            </Camera>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        backgroundColor:'#f5841a',
        width:width+100,
        height:200,
        position:"absolute",
        top:-100,
        left:-50,
        zIndex:2,
        borderBottomEndRadius:width,
        borderBottomStartRadius:width
    }
})

export const CameraStackScreen = () => StackScreenCreator({title:'Selfie',component:CameraScreen,headerShown:false,link:links.cameraScreen})
