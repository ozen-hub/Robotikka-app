import {Text, View, StyleSheet, TouchableOpacity, ScrollView, TextInput} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export default function Login({navigation}) {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Verify Account"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent:'center'
    },
    input:{
        height:35,
        borderWidth:1,
        borderColor:'gray',
        borderRadius:3,
        paddingLeft:4
    }
})