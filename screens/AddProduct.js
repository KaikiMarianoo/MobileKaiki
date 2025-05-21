import { Text, View, ScrollView, StyleSheet, Button, ImageBackground, TextInput,TouchableOpacity } from 'react-native';
import {useState} from 'react';
import { db } from './controller';
import {collection,addDoc} from 'firebase/firestore';

export default function AddProduct(){
    const [nome, setNome] = useState("");
    const [valor, setValor] = useState("");
    const [imagem, setImagem] = useState("");

    const cadastrarProduto = async () => {
        try {
            await addDoc(collection(db, "produtos"), {
                nome,
                valor: parseFloat(valor),
                imagem
            });
            setNome("");
            setValor("");
            setImagem("");

        } catch (error) {
            console.error("Erro ao cadastrar produto: ", error);
        }
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cadastro de Produto</Text>
            <TextInput
                style={styles.input}
                placeholder="Nome do Produto"
                value={nome}
                onChangeText={setNome}
            />
            <TextInput
                style={styles.input}
                placeholder="Valor do Produto"
                value={valor}
                onChangeText={setValor}
            />
            <TextInput
                style={styles.input}
                placeholder="URL da Imagem"
                value={imagem}
                onChangeText={setImagem}
            />
            <TouchableOpacity style={styles.button} onPress={cadastrarProduto}>

                <Text style={styles.buttonText}>Cadastrar</Text>

            </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'orange',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 15,
        paddingHorizontal: 10,
    },
    button: {
        backgroundColor: '#ff8c00',
        paddingVertical: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },

});
