import { Text, View, ScrollView, StyleSheet, Button, ImageBackground, TextInput,TouchableOpacity } from 'react-native';
import {useState, useEffect} from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './controller';


export default function Sec2({navigation}) {
  const [email,setEmail] = useState("");
  const [senha,setSenha] = useState("");

  const verificaUser = () => {
    signInWithEmailAndPassword(auth, email, senha).then((userCredential) => {
      console.log('logado!', userCredential.user.email);
      navigation.navigate('HomeTab');
    })
    .catch((error) => {
      console.log('erro ao logar', error.message);
    });
  }
  return (
    <View style={styles.container}>
    
        <Text style={[styles.title, styles.textCenter]}>DRAGON BALL Z</Text>
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
          title="Logar" 
          onPress={verificaUser}
          color="#00ff"
        />
        <Button 
          title="Cadastro" 
          onPress={() => navigation.navigate('Register')}
          color="#00ff"
        />
      <TouchableOpacity 
        onPress={() => navigation.navigate('Cadastro')}
        style={styles.button}>
          <Text style={styles.text}>Cadastrar-se</Text>
        </TouchableOpacity>

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
  