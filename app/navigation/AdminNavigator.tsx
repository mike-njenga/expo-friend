import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AdminDashboard from "@/screens/admin/AdminDashboard";
import CreateFriend from "@/screens/admin/CreateFriend";
import EditFriend from "@/screens/admin/EditFriend";

const Stack = createNativeStackNavigator();

export default function AdminNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="AdminDashboard" component={AdminDashboard} />
      <Stack.Screen name="CreateFriend" component={CreateFriend} />
      <Stack.Screen name="EditFriend" component={EditFriend} />
    </Stack.Navigator>
  );
}
