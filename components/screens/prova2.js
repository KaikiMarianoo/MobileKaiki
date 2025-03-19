import { Text, View, StyleSheet, Image } from 'react-native';
import { Button, ImageBackground, TextInput } from 'react-native-web';

export default function Prova2() {
  return (
    <View style={styles.container}>
      
        <Text style={[styles.title, styles.textCenter]}>dragon</Text>
        <Text style={[styles.atencao, styles.textCenter]}>Faça seu login abaixo para entrar no universo de Dragon Ball!</Text>

        <TextInput style={styles.input} placeholder='Email' />
        <TextInput style={styles.input} placeholder='Senha' />

        <input style={styles.button} class="styled" type="button" value="Logar" />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-between',
      backgroundColor: '#ff6f00',  
      flexDirection: 'column',
      padding: 30,
      paddingTop: 70,
    },
    title: {
      fontSize: 35,
      color: '#ffffff', 
    },
    atencao: {
      fontSize: 20,
      color: '#ffffff', 
    },
    text: {
      fontSize: 14,
      color: '#ffffff', 
    },
    button: {
      backgroundColor: '#00ff00',  
      color: '#ffffff',
    },
    textCenter: {
      justifyContent: 'flex-start',
      textAlign: 'center',
    },
    img: {
      width: 130,
      height: 130,
    },
    imgContainerEvenly: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    },
    input: {
      width: 100,
      height: 20,
      backgroundColor: '#ffffff', 
    },
  });
  