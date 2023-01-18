import {useState} from "react";
import {View, Button, Image, ScrollView, ImageBackground, Text, StyleSheet, TouchableOpacity} from 'react-native';


export default function Default() {
    return (
        <View style={styles.container}>
            <Text>Default</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
        justifyContent:'center'
    }
})