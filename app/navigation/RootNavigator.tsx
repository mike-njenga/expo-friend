import { NavigationContainer } from "@react-navigation/native";
import { useAuth } from "../context/AuthContext";
import AuthNavigator from "./AuthNavigator";
import AdminNavigator from "./AdminNavigator";
import UserNavigator from "./UserNavigator";
import { ActivityIndicator, View } from "react-native";

export default function RootNavigator() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <View className='flex justify-center items-center'>
        <ActivityIndicator />
      </View>
    );
  }

  if (!user) return <AuthNavigator />;

  return user.role === "admin" ? <AdminNavigator /> : <UserNavigator />;
}




