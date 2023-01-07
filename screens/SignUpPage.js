import {Text, View, StyleSheet, TouchableOpacity, ScrollView} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import {TextInput} from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export default function SignUpPage({navigation}) {
    return (
        <View style={styles.container}>
            <View style={{ width:'100%',height:200, overflow:'hidden', position:'absolute'}}>
                <View style={styles.v2}>
                    <LinearGradient
                        colors={['#e67e22', '#d35400']}
                        style={styles.bg}
                    ></LinearGradient>
                </View>
                <View style={styles.v1}>
                    <LinearGradient
                        colors={['#f39c12', '#f1c40f']}
                        style={styles.bg}
                    ></LinearGradient>
                </View>
            </View>
            <ScrollView style={styles.middle}>
                <Text style={styles.headerText}>Register</Text>
                <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur </Text>

                <TextInput
                    label="Email"
                    leading={props => <Icon name="account" {...props} />}
                />
                <TextInput
                    label="Full Name"
                    leading={props => <Icon name="account" {...props} />}
                />
                <TextInput
                    label="Password"
                    secureTextEntry={true}
                    leading={props => <Icon name="lock" {...props} />}
                />

                <View style={{width:'100%',alignItems:'flex-end'}}>
                    <TouchableOpacity style={styles.btn}  onPress={()=>navigation.navigate("LandingPage")}>
                        <LinearGradient
                            colors={['#e67e22', '#d35400']}
                            style={styles.btnBg}
                        >
                            <Text style={styles.btnText}>Login</Text>
                        </LinearGradient>

                    </TouchableOpacity>
                </View>

                <ScrollView horizontal={true} style={{marginTop:20}}>
                    <TouchableOpacity style={styles.btnSocial}>
                        <Text style={styles.btnSocialText}>Facebook</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnSocial}>
                        <Text style={styles.btnSocialText}>Google</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnSocial}>
                        <Text style={styles.btnSocialText}>LinkedIn</Text>
                    </TouchableOpacity>
                </ScrollView>

            </ScrollView>
            <View style={styles.bottom}>
               <Text style={{}}>Already have an Account? <Text style={{color:'orange'}}  onPress={()=>navigation.navigate("Login")}>Log in</Text></Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        position:'relative'
    },
    top: {
        height: 150,
    },
    middle: {
        flex: 1,
        paddingLeft:10,
        paddingRight:10,
    },
    bottom: {
        height: 50,
        justifyContent:'center',
        alignItems:'center'
    },
    v1: {
        width: 150,
        height: 100,
        transform: [{rotate: '-35deg'}],
        borderRadius: 5,
        position: 'absolute',
        right: -10,
        top: -50
    },
    v2: {
        width: 200,
        height: 150,
        transform: [{rotate: '-35deg'}],
        borderRadius: 5,
        position: 'absolute',
        right: -20,
        top: -60
    },
    bg: {
        flex: 1,
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    btnBg: {
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 50
    },
    text: {
        fontWeight: 'normal',
        fontSize: 20
    },
    btn:{
        width:100,
        height:30
    },
    btnText:{
        color:'#FFF'
    },
    btnSocial:{
        width:100,
        height:40,
        borderRadius:50,
        backgroundColor:'#e74c3c',
        justifyContent:'center',
        alignItems:'center',
        marginRight:5
    },
    btnSocialText:{
        color:'white'
    }
})