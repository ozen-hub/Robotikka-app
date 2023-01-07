import {View,ScrollView,Text, StyleSheet} from 'react-native';
export default function LandingPage({navigation}){
    return(
        <ScrollView style={styles.container}>
            <View style={styles.card}>
                <View style={styles.cardInner}></View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    card:{
        width:'100%',
        height:200,
        paddingLeft:10,
        paddingRight:10,
        alignItems:'center',
        display:'flex',
        justifyContent:'center'
    },
    cardInner:{
        width:'100%',
        height:180,
        borderRadius:3,
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