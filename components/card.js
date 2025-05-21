import {View,Text,Image,StyleSheet,Button} from 'react-native';

export default function Card({nome,valor,imagem,comprar}){
    return(
        <View style={styles.card}>
            <Image source={{uri:imagem}} style={styles.image}/>
            <Text style={styles.text}>{nome}</Text>
            <Text style={styles.text}>R$ {valor.toFixed(2)}</Text>
            <Button title='Comprar' onPress={comprar}/>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
      marginVertical: 10,
      backgroundColor: '#fff',
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 5,
      elevation: 3,
    },
    image: {
      width: 50,
      height: 50,
      borderRadius: 25,
      marginRight: 10,
    },
    text: {
      fontSize: 16,
      color: '#333',
    },
  });