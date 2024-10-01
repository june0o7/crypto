import { useState } from 'react';
import { StyleSheet, Text, View, StatusBar, TextInput, Button, TouchableOpacity, TouchableHighlight } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import app from './firebaseConfig';
import { createUserWithEmailAndPassword ,getAuth,  } from 'firebase/auth';
import { initializeApp ,} from 'firebase/app';
import { collection, Firestore, addDoc, getFirestore , setDoc,doc} from 'firebase/firestore';
import { LinearGradient } from 'expo-linear-gradient';





function SignUp(props) {
    
    
    const auth = getAuth(app);
    const [pressed, setPressed]= useState(false);
  
    const [pressed2, setPressed2]= useState(false);

    const [email, setEmail] =useState('');
    const [password, setPassword] =useState('');
    const [username, setUsername] =useState('');
    
    const db=getFirestore(app);
    const collectionRef= collection(db, "users");
      const navigator =useNavigation();

      const pattern=RegExp("\\w+@\\w+[.]\\w+");
    return (

  
      <LinearGradient   colors={['rgba(131,58,180,1)', 'rgba(29,52,253,1)', 'rgba(252,176,69,1)']}
      start={{ x: 0, y: 0.2 }}
      end={{ x: 1, y: 0.8 }}
      style={styles.background}>
  
            <Text style={styles.heading}>
              CoDARcraft
            </Text>
            <Text style={styles.heading2}>
              Making your conspiracies real
            </Text>
    
    
    
            <TextInput placeholder=' Enter Username' value={username} onChangeText={setUsername} placeholderTextColor='#a2a2a2' style={styles.usernaname}>
    
          
            </TextInput>
    
            <TextInput placeholder=' Enter Password' value={password} onChangeText={setPassword} secureTextEntry={true} placeholderTextColor='#a2a2a2' style={styles.usernaname}>
    
          
            </TextInput>

            <TextInput placeholder=' Enter Email' value={email} onChangeText={setEmail} placeholderTextColor='#a2a2a2' style={styles.usernaname}>
    
          
    </TextInput>
    
    
    
          <TouchableHighlight 
          onPressIn={()=>setPressed2(true)}
          onPressOut={()=>setPressed2(false)}
          onPress={async ()=>{ 
            
            if(pattern.test(email)){
            try{


              const userCredential= await createUserWithEmailAndPassword(auth, email.trim(), password);
              const uid=userCredential.user.uid;

              console.log(uid);

              const userDoc={
                name : username,
                email : email,
                password: password
        
                };
              
                    const document= doc(db, "users", uid);
                    await setDoc(document, userDoc);
                    console.log("User created");

           
               
                  }catch(error){

                    console.log(error);
                   
      
              } }else{
                alert("Invalid Email");
              }
              
        }
      }
          style={pressed2 ?styles.button2: styles.button1 } >
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableHighlight>
    
          <TouchableOpacity >
         
            <Text style={styles.heading2}>Forgot Password ?</Text>
          </TouchableOpacity>
            
        </LinearGradient>
       
      );
}

const styles= StyleSheet.create({

container: {
    backgroundColor:'dodgerblue',
    flex:1,
    alignItems: 'center',
    paddingTop: StatusBar.currentHeight
},

heading:{
  color:'white',
  fontSize:50,
  fontWeight:'bold',
  fontStyle:'italic',
  fontFamily: 'Roboto',
 
},

background: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
},
text: {
  fontSize: 24,
  color: 'white',
},
heading2:{
  color:'white',
  fontSize:20,
  fontStyle:'italic',
  fontFamily: 'Roboto',
  marginBottom:'20%',
   marginBottom:'20%'
},
usernaname: {
        width: '80%',
        height: 60,
        borderColor: 'dodgerblue',
        borderWidth: 2,
        borderRadius: 10,
        padding: 10,
        color: 'black',
        fontSize: 16,
        backgroundColor:'white',
        marginTop: 20

},

button1:{

  marginTop:30,
    backgroundColor: 'white',
    height: 50,
    width: '50%',
    borderRadius: 30,
    alignItems:'center',
    justifyContent:'center',
  borderColor:'dodgerblue',
  borderWidth:2,


},

button2:{

  marginTop:30,
    backgroundColor: 'dodgerblue',
    height: 50,
    width: '50%',
    borderRadius: 30,
    alignItems:'center',
    justifyContent:'center',
  borderColor:'dodgerblue',
  borderWidth:2,


},



buttonText:{

color:'dodgerblue',
fontSize:20,
fontWeight:'bold',
fontFamily: 'roboto',


}



})

export default SignUp;