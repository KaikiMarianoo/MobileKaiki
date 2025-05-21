import { Text, View, StyleSheet, Button, ImageBackground, TextInput } from 'react-native';

export default function Feed({navigation}) {
  return (
    <View style={styles.container}>
      <ImageBackground style={{flex:1, width:'100%',height:'100%', padding: 40, justifyContent: 'space-around'}} source={{uri:'https://wallpapers.com/images/hd/trunks-phone-v1v02gdl3mom8v9d.jpg'}}>
        <Text style={[styles.title, styles.textCenter]}>DRAGON BALL Z</Text>
        <View style={[styles.caixa]}>
            <Text style={[styles.text, styles.textCenter]}>Veja as mais novas notícias sobre o dragon ball! Clique no saiba mais para mais informações!</Text>
        </View>
        <Button color="blue" title="Saiba mais!" onPress={() => {}} />
      </ImageBackground>
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
  caixa: {
    backgroundColor: 'cyan',
    padding: 10,
    borderRadius: 10
  },
});
