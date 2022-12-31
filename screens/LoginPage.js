import {Text, View, StyleSheet} from "react-native";

export default function Login() {
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <View style={styles.v2}></View>
                <View style={styles.v1}>

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
        borderWidth: 1,
        borderColor: 'red'
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
        borderColor: 'red',
        borderWidth: 1,
        transform:[{rotate:'-35deg'}],
        borderRadius:5
    },
    v2: {
        width: 200,
        height: 150,
        borderColor: 'red',
        borderWidth: 1,
        transform:[{rotate:'-35deg'}],
        borderRadius:5
    }
})