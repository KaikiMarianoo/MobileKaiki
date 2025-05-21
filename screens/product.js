import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import { useState, useEffect } from 'react';
import { db } from './controller';
import { collection, getDocs } from 'firebase/firestore';
import Card from '../components/card';

export default function Product() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    async function carregarProdutos() {
      try {
        const querySnapshot = await getDocs(collection(db, 'produtos'));
        const lista = [];
        querySnapshot.forEach((doc) => {
          lista.push({ id: doc.id, ...doc.data() });
        });
        setProdutos(lista);
      } catch (error) {
        console.log('Erro ao buscar produtos: ', error);
      }
    }
    carregarProdutos();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Produtos</Text>
      <FlatList
        data={produtos}
        renderItem={({ item }) => (
          <Card
          nome={item.nome}
          valor={item.valor}
          imagem={item.imagem}
            />

        )}
        ListEmptyComponent={
          <Text style={{ color: 'white', textAlign: 'center', marginTop: 20 }}>
            Nenhum produto encontrado.
          </Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: 'white',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
});