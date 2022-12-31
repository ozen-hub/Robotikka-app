import LoginPage from './screens/LoginPage';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginPage} options={{headerShown:false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}