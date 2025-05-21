import { Text, View, ScrollView, StyleSheet, Button, ImageBackground, TextInput,TouchableOpacity } from 'react-native';
import {useState} from 'react';
import { db } from './controller';
import {collection,addDoc} from 'firebase/firestore';

export default function AddProduct(){
    const[nome,setNome]=useState("");
    const[valor,setValor]=useState("");
    const[imagem,setImagem]=useState("");

    const CadastrarProduto=async ()=>{
        try{
            await addDoc(collection(db,'produtos'),{
                nome,
                valor:parseFloat(valor),
                imagem
            }),
            setNome('');
            setValor(''),
            setImagem('')
        }
        catch (error){
            console.log('erro no cadastro do produto', error)
        }
    }
}
