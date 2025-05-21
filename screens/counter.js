import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default function Counter() {
  const [contador, setContador] = useState(999);

    function aumentar(){
        setContador(contador +1);
        if (contador>999){
            setContador(999);
        }
    }

    function diminuir(){
        setContador(contador -1);
        if (contador<0){
            setContador(0);
        }
    }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador</Text>
      <Text style={styles.counter}>Valor atual: {contador}</Text>
      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={aumentar}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={diminuir}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  counter: {
    fontSize: 20,
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '50%',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#841584',
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});


