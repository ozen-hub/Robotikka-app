import {useState} from "react";
import {View, Button, Image, ScrollView, ImageBackground, Text, StyleSheet, TouchableOpacity} from 'react-native';


export default function LandingPage({navigation}) {

    let [qty, setQty] = useState(1);

    return (
        <ScrollView style={styles.container}>
            <ImageBackground style={styles.bgImage}
                             source='https://purepng.com/public/uploads/large/purepng.com-sofasofafurniturearmrestsentirely-upholsteredloungecouchbedsteaddivan-1701527997536r8xka.png'></ImageBackground>

            <ScrollView horizontal={true} style={styles.imageTypes}>

                <Image style={styles.image}
                       source='https://images-na.ssl-images-amazon.com/images/I/71vkir3wegL.jpg'></Image>
                <Image style={styles.image}
                       source='https://images-na.ssl-images-amazon.com/images/I/71vkir3wegL.jpg'></Image>
                <Image style={styles.image}
                       source='https://images-na.ssl-images-amazon.com/images/I/71vkir3wegL.jpg'></Image>
                <Image style={styles.image}
                       source='https://images-na.ssl-images-amazon.com/images/I/71vkir3wegL.jpg'></Image>
                <Image style={styles.image}
                       source='https://images-na.ssl-images-amazon.com/images/I/71vkir3wegL.jpg'></Image>
                <Image style={styles.image}
                       source='https://images-na.ssl-images-amazon.com/images/I/71vkir3wegL.jpg'></Image>
                <Image style={styles.image}
                       source='https://images-na.ssl-images-amazon.com/images/I/71vkir3wegL.jpg'></Image>

            </ScrollView>

            <Text style={{color: 'blue', fontSize: 20, paddingLeft: 10, paddingRight: 10, paddingTop: 10}}>Lorem ipsum
                dolor sit.</Text>
            <Text style={{color: 'red', fontSize: 20, paddingLeft: 10, paddingRight: 10}}>2500 USD</Text>
            <Text style={{fontSize: 20, paddingLeft: 10, paddingRight: 10, marginTop: 20}}>QTY</Text>

            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5, paddingLeft: 10}}>
                <Button title='-' onPress={() => {
                    if (qty === 1) {
                    } else {
                        setQty(--qty);
                    }
                }}></Button>
                <Text style={{padding: 8}}>{qty}</Text>
                <Button title='+' onPress={() => {
                        setQty(++qty);
                }}></Button>
            </View>

            <TouchableOpacity style={{width:'90%',height:50,backgroundColor:'#2980b9',
                alignSelf:'center', marginTop:20,marginBottom:20, alignItems:'center',justifyContent:'center'}}>
                <Text style={{color:'white'}}>Add to Cart</Text>
            </TouchableOpacity>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    bgImage: {
        width: '100%',
        height: 250
    },
    imageTypes: {
        width: '100%',
        height: 'auto',
        marginTop: 10,
        marginBottom: 10
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginRight: 5
    }
})