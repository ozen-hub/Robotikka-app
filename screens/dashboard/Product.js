import {useState} from "react";
import {
    View,
    Button,
    TextInput,
    Image,
    ScrollView,
    ImageBackground,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import axios from "axios";


export default function Product() {

    let [displayName, setDisplayName] = useState('');
    let [description, setDescription] = useState('');
    let [unitPrice, setUnitPrice] = useState(0);
    let [qty, setQty] = useState(0);
    let [sellingPrice, setSellingPrice] = useState(0);

    function saveData() {
        console.log(displayName);
        console.log(description);
        console.log(unitPrice);
        console.log(qty);
        console.log(sellingPrice);
//fetch, axios
        axios({
            method:'POST',
            url:'http://localhost:8000/api/v1/products/member/create',
            headers:{},
            data:{
                displayName:displayName,
                description:description,
                unitPrice:unitPrice,
                qty:qty,
                sellingPrice:sellingPrice
            }
        }).then(response=>{
            console.log(response);
        });
    }

    return (
        <View style={styles.container}>
            <TextInput style={styles.input}
                       onChangeText={(text => {
                           setDisplayName(text)
                       })}
                       placeholder={'Display Name'}/>
            <TextInput style={styles.input}
                       onChangeText={(text => {
                           setDescription(text)
                       })}
                       placeholder='Description'/>
            <TextInput style={styles.input}
                       onChangeText={(text => {
                           setUnitPrice(Number.parseInt(text))
                       })}
                       placeholder='Unit Price'/>
            <TextInput style={styles.input}
                       onChangeText={(text => {
                           setQty(Number.parseInt(text))
                       })}
                       placeholder='Qty'/>
            <TextInput style={styles.input}
                       onChangeText={(text => {
                           setSellingPrice(Number.parseInt(text))
                       })}
                       placeholder='Selling Price'/>
            <TouchableOpacity style={styles.btnOuter} onPress={() => {
                saveData();
            }}>
                <Text style={styles.btnText}>Submit data</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center'
    },
    input: {
        height: 35,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 3,
        marginBottom: 10,
        paddingLeft: 5
    },
    btnOuter: {
        height: 50,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3
    },
    btnText: {
        color: 'white'
    }
})