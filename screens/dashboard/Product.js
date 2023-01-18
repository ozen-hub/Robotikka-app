import {useState} from "react";
import {View, Button,TextInput, Image, ScrollView, ImageBackground, Text, StyleSheet, TouchableOpacity} from 'react-native';


export default function Product() {
    return (
        <View style={styles.container}>
            <TextInput style={styles.input}
                       placeholder={'Display Name'}/>
            <TextInput style={styles.input}
                       placeholder='Description'/>
            <TextInput style={styles.input}
                       placeholder='Unit Price'/>
            <TextInput style={styles.input}
                       placeholder='Qty'/>
            <TextInput style={styles.input}
                       placeholder='Selling Price'/>
            <TouchableOpacity style={styles.btnOuter}>
                <Text style={styles.btnText}>Submit data</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'stretch',
        justifyContent:'center'
    },
    input:{
        height:35,
        borderWidth:1,
        borderColor:'gray',
        borderRadius:3,
        marginBottom:10,
        paddingLeft:5
    },
    btnOuter:{
        height:50,
        backgroundColor:'blue',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:3
    },
    btnText:{
        color:'white'
    }
})