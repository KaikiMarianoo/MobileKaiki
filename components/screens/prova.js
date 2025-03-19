import { Text, View, StyleSheet, Image } from 'react-native';
import { Button, ImageBackground, TextInput } from 'react-native-web';

export default function Prova() {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, styles.textCenter]}>DRAGON BALL</Text>
      <Text style={[styles.text, styles.textCenter]}>Assista dragon ball, é um anime com temáticas muito diversas e relevantes para a sociedade.Sem contar sua pegada de ação e aventura, com momentos emocionantes e marcantes!</Text>

      <View style={styles.imgContainerEvenly}>
        <Image 
          style={styles.img} 
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxT18JJsplZxtUn8zOnKLoJhQO8KpyoTGkQg&s' }} 
        />
        <Image 
          style={styles.img} 
          source={{ uri: 'https://img.odcdn.com.br/cdn-cgi/image/width=960,height=1200,fit=cover/wp-content/uploads/2021/05/Dragon-Ball-Goku-Moro-00-896x504-1.jpg' }}
        />
      </View>

      <View style={styles.imgContainerEvenly}>
        <Image 
          style={styles.img} 
          source={{ uri: 'https://www.omniblog.com.br/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2Foutput%3Dformat%3Awebp%2FhLXqxElGTU28Xgx8Pspx&w=3840&q=75'}} 
        />
        <Image 
          style={styles.img} 
          source={{ uri: 'https://pm1.aminoapps.com/6630/0504ef7a926451521e19cf17924328375590600d_hq.jpg' }} 
        />
      </View>

      <Text style={[styles.text, styles.textCenter]}>Se inscreva para receber mais informações sobre Dragon ball e animes de lutas.</Text>

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
