import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, StatusBar, TextInput, Button, TouchableOpacity, TouchableHighlight } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import app from './firebaseConfig';
import { createUserWithEmailAndPassword ,getAuth } from 'firebase/auth';
import { initializeApp ,} from 'firebase/app';
import { collection, Firestore, addDoc, getFirestore , getDoc, doc, getDocs} from 'firebase/firestore';
import { LinearGradient } from 'expo-linear-gradient';


function Home(props) {


const db=getFirestore(app);
const auth = getAuth(app);
    
const user=auth.currentUser;
const uid=user.uid;

const [data, setData]=useState(null);
async function loadData(){


      const document=doc(db, "users", uid);
      const docSnap = await getDoc(document);
      const data1= docSnap.data();
      setData(data1);
      console.log(data1.name);
      console.log(data1.email);
      console.log(data1.password);

      
     
        }
        
        useEffect(() => {
          loadData();
            },[]);


    return (
        <LinearGradient   colors={['rgba(131,58,180,1)', 'rgba(29,52,253,1)', 'rgba(252,176,69,1)']}
        start={{ x: 0, y: 0.2 }}
        end={{ x: 1, y: 0.8 }}
        style={styles.background}>


                    <Button title='Show Data' onPress={()=>loadData()}>
                   
                    </Button>

                 

                    {data && (<Text  style={styles.text}> Name:{data.name}</Text> )}
                
                {data && (<Text  style={styles.text}> Email: {data.email+" "}</Text> )} 
                
                {data && (<Text  style={styles.text}> Password: {data.password}</Text> )}
                        
                
              

             
            </LinearGradient>
    
    );
}
const styles = StyleSheet.create({
    background: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 24,
      color: 'white',
    },
  });
export default Home;