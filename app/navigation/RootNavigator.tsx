import { useMockAuth } from "../auth/useMockAuth";
import AuthNavigator from "./AuthNavigator";
import AdminNavigator from "./AdminNavigator";
import UserNavigator from "./UserNavigator";


export default function RootNavigator(){
  const {user} = useMockAuth();  

  if(!user){
    return <AuthNavigator />;     
  }

  return user.role === "admin" ? <AdminNavigator /> : <UserNavigator />;



}