import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserDashboard from "@/screens/user/UserDashboard";
import ViewFriends from "@/screens/user/ViewFriends";

const Stack = createNativeStackNavigator();

export default function UserNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="UserDashboard" component={UserDashboard} />
      <Stack.Screen name="ViewFriends" component={ViewFriends} />
    </Stack.Navigator>
  );
}
