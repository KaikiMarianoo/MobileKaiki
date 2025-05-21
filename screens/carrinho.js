import {View,Text,Image,StyleSheet,FlatList} from 'react-native';
import { useCarrinho } from '../components/ProviderCart';


export default function carrinho(){
    const {carrinho} = useCarrinho();
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Carrinho</Text>
            <FlatList
            data={carrinho}
            renderItem={({item})=>(
                <View style={styles.card}>
                <Image style={styles.imagem} source={{uri: item.imagem}}/>
                <Text style ={styles.text}>{item.nome}</Text>
                </View>
            )}
            />
            </View>
            
    );
}

const styles = StyleSheet.create({
    container:{
       flex :1 
    },
    card:{
        padding:10,
        margin: 10,
        backgroundColor: '#EEE8AA',
        borderRadius: 8,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    text:{
        fontSize:30,
        alignItems: 'center',
    },
    title:{
        fontSize:55,
        fontStyle:'italic',
        color:'#556B2F',
        alignItems: 'center'
    },
    img:{
        height: 100,
        width: 100,
    }

})

