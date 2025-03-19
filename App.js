import Prova from "./components/screens/prova.js";
import Prova2 from "./components/screens/prova2.js";
import {View, StyleSheet} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Prova2/>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})