import {Text, View, StyleSheet} from "react-native";
import {LinearGradient} from "expo-linear-gradient";

export default function Login() {
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <View style={styles.v2}>
                    <LinearGradient
                    colors={['#e67e22','#d35400']}
                    style={styles.bg}
                    ></LinearGradient>
                </View>
                <View style={styles.v1}>
                    <LinearGradient
                        colors={['#f39c12','#f1c40f']}
                        style={styles.bg}
                    ></LinearGradient>
                </View>
            </View>
            <View style={styles.middle}></View>
            <View style={styles.bottom}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
    },
    top: {
        height: 150,
    },
    middle: {
        flex: 1,
        borderWidth: 1,
        borderColor: 'red'
    },
    bottom: {
        height: 50,
        borderWidth: 1,
        borderColor: 'red'
    },
    v1: {
        width: 150,
        height: 100,
        transform:[{rotate:'-35deg'}],
        borderRadius:5,
        position:'absolute',
        right:-10,
        top:-50
    },
    v2: {
        width: 200,
        height: 150,
        transform:[{rotate:'-35deg'}],
        borderRadius:5,
        position:'absolute',
        right:-20,
        top:-60
    },
    bg:{
        flex:1,
        borderRadius:5,
        shadowColor: "#000",
        shadowOffset:{
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    }
})