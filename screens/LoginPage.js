import {Text, View, StyleSheet} from "react-native";

export default function Login(){
    return(
        <View style={styles.container}>
            <View style={styles.top}></View>
            <View style={styles.middle}></View>
            <View style={styles.bottom}></View>
        </View>
    )
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        alignItems:'stretch',
    },
    top:{
        height:150,
        borderWidth:1,
        borderColor:'red'
    },
    middle:{
        flex:1,
        borderWidth:1,
        borderColor:'red'
    },
    bottom:{
        height:50,
        borderWidth:1,
        borderColor:'red'
    }
})