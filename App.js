import LoginPage from './screens/LoginPage';
import SignUpPage from './screens/SignUpPage';
import LandingPage from './screens/LandingPage';
import DetailsPage from './screens/DetailsPage';
import Dashboard from './screens/dashboard/Dashboard';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginPage} options={{headerShown:false}}/>
                <Stack.Screen name="Signup" component={SignUpPage} options={{headerShown:false}}/>
                <Stack.Screen name="LandingPage" component={LandingPage} options={{headerShown:true}}/>
                <Stack.Screen name="DetailsPage" component={DetailsPage} options={{headerShown:true}}/>
                <Stack.Screen name="Dashboard" component={Dashboard} options={{headerShown:true}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}