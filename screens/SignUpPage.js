import {useState} from "react";
import {Text,TextInput, View, StyleSheet, TouchableOpacity, ScrollView} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
//import {TextInput} from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import axios from "axios";

export default function SignUpPage({navigation}) {

    let [email,setEmail]= useState('');
    let [firstName,setFirstName]= useState('');
    let [lastName,setLastName]= useState('');
    let [password,setPassword]= useState('');

    const signup=()=>{
        axios({
            method:'POST',
            url:'http://localhost:8000/api/v1/users/visitor/register',
            data:{
                contactNumber:'',
                firstName:firstName,
                lastName:lastName,
                email:email,
                password:password
            }
        }

        ).then(response=>{
            navigation.navigate('Verify');
            console.log(response)
        }, error=>{
            console.log(error)
        })
    }

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
                    style={styles.input}
                    onChangeText={(text)=>{setEmail(text)}}
                    placeholder="Email"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={(text)=>{setFirstName(text)}}
                    placeholder="First Name"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={(text)=>{setLastName(text)}}
                    placeholder="Last Name"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={(text)=>{setPassword(text)}}
                    placeholder="Password"
                    secureTextEntry={true}
                />

                <View style={{width:'100%',alignItems:'flex-end'}}>
                    <TouchableOpacity style={styles.btn}  onPress={()=>signup()}>
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
    },
    input:{
        height:35,
        borderWidth:1,
        borderColor:'gray',
        borderRadius:3,
        marginBottom:12,
        paddingLeft:4
    }
})