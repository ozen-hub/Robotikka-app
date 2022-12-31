import LoginPage from './screens/LoginPage';
import SignUpPage from './screens/SignUpPage';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginPage} options={{headerShown:false}}/>
                <Stack.Screen name="Signup" component={SignUpPage} options={{headerShown:false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}