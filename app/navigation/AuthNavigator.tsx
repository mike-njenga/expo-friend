import { createNativeStackNavigator } from "@react-navigation/native-stack";


const stack = createNativeStackNavigator();

export default function AuthNavigator(){
    return(
        <stack.Navigator screenOptions={{headerShown:false}}>
            <stack.Screen name="Login" component={LoginScreen} />
            {/* <stack.Screen name="Register" component={RegisterScreen} /> */}
        </stack.Navigator>
    )
}

