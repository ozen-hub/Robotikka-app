import {View,ScrollView,ImageBackground, Text, StyleSheet} from 'react-native';
export default function LandingPage({navigation}){
    return(
        <ScrollView style={styles.container}>
            <View style={styles.card}>
                <View style={styles.cardInner}></View>
            </View>
            <Text style={styles.bestSellingText}>Best Selling</Text>

            <View style={styles.context}>
                <View style={styles.contextInner}>
                    <View style={styles.dataInner}>
                        <ImageBackground source='https://img.freepik.com/free-psd/two-seater-gray-sofa-with-two-cushions-isolated_176382-98.jpg?w=826&t=st=1673107511~exp=1673108111~hmac=cde04bb71c230b21b2c9be826e18b30aded617259c978e0859dc6d656a9d9c94' style={styles.image}></ImageBackground>
                    </View>
                    <View style={styles.iconBox}></View>
                </View>
                <View style={styles.contextInner}>
                    <View style={styles.dataInner}>
                        <ImageBackground source='https://img.freepik.com/free-psd/two-seater-gray-sofa-with-two-cushions-isolated_176382-98.jpg?w=826&t=st=1673107511~exp=1673108111~hmac=cde04bb71c230b21b2c9be826e18b30aded617259c978e0859dc6d656a9d9c94' style={styles.image}></ImageBackground>
                    </View>
                    <View style={styles.iconBox}></View>
                </View>
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
    },
    bestSellingText:{
        color:'#c0392b',
        paddingLeft:10,
        fontSize:20
    },
    context:{
        height:'auto',
        padding:5,
        flexDirection:'row'
    },
    contextInner:{
        width:'50%',
        height:200,
        padding:10
    },
    iconBox:{
        width:35,
        height:35,
        backgroundColor:'#1abc9c',
        borderRadius:4,
        position:'absolute',
        right:0,
        bottom:0
    },
    dataInner:{
        width:'100%',
        height:'100%',
        shadowColor: "#000",
        borderRadius:3,
        shadowOffset:{
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    image:{
        width:'100%',
        height:80
    }
})