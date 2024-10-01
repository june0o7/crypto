
import { useState } from 'react';
import { StyleSheet, Text, View, StatusBar, TextInput, Button, TouchableOpacity } from 'react-native';
import Login from './Login';
import { createNavigatorFactory, NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from './SignUp';
import Home from './Home';
import MyComponent from './MyComponant';
import { Firestore } from 'firebase/firestore';
import { createUserWithEmailAndPassword } from 'firebase/auth';



export default function App() {

  
  const stack=createStackNavigator();
  // const db = get(Firestore);
  // try{
  //   const credentials = await createUserWithEmailAndPassword(auth, email.trim(), password);
  //   const uid = credentials.user.uid;
  //   const docref=doc(db,"users",uid);
  //   const document={
  //     email : email,
  //     password : password
  //   };
  //   await setDoc(docref,document);
  //   console.log("data is uploaded");
  // }catch(error){
  //   console.log(error);
  // }

 
  return (
      
    <NavigationContainer>
      <stack.Navigator initialRouteName='Login'>
        <stack.Screen name='Login' component={Login} options={{headerShown:false}}/>
        <stack.Screen name='SignUp'  component={SignUp} options={{headerShown:false}}/>
        <stack.Screen name='Home' component={Home} options={{headerShown:false}}/>
        <stack.Screen name='MyComponent' component={MyComponent} options={{headerShown:false}}/>
      </stack.Navigator>
    </NavigationContainer>
  );
}


