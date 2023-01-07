import {View,Text, StyleSheet} from 'react-native';
export default function LandingPage({navigation}){
    return(
        <View style={styles.container}>
            <Text>Landing Page</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})