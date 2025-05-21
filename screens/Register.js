import { Text, View, ScrollView, StyleSheet, Button, ImageBackground, TextInput } from 'react-native';
import {useState} from 'react';


import {createUserWithEmailAndPassword} from "firebase/auth";

import { auth } from './controller';

export default function Signin({navigation}) {
    const [email,setEmail] = useState("");
    const [senha,setSenha] = useState("");

    const cadastroUser = () =>{
        createUserWithEmailAndPassword(auth, email, senha).then((userCredential) => {
            console.log('cadastrado!', userCredential.user.email);
            navigation.navigate('Login');
          })
          .catch((error) => {
            console.log('erro', error.message);
          });
    }

  return (
    <View style={styles.container}>
        <Text style={[styles.title, styles.textCenter]}>Sign In</Text>
        <Text style={[styles.text, styles.textCenter]}>Faça seu login abaixo!</Text>

        <TextInput
          style={styles.input}
          placeholder='Email'
          value = {email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder='Senha'
          secureTextEntry={true} 
          value = {senha}
          onChangeText={setSenha}
        />

        
        <Button 
          title="Cadastrar" 
          color="#00ff"
          onPress={cadastroUser}
        />
        <Button 
          title="Voltar ao login" 
          onPress={() => navigation.navigate('Login')}
          color="#00ff"
        />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: 'black',
    flexDirection: 'column',
    padding: 30,
    paddingTop: 70,
  },
  title: {
    fontSize: 35,
    color: 'white',
  },
  text: {
    fontSize: 14,
    color: 'white',
  },
  textCenter: {
    justifyContent: 'flex-start',
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: 'white',
    marginVertical: 10,
    paddingLeft: 10,
  },
});
