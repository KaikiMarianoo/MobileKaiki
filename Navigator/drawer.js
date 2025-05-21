import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Prova from './screens/prova';
import Prova2 from './screens/prova2';
import { createDrawerNavigator } from '@react-navigation/drawer';

export default function Drawer() {
  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name='Prova' component={Prova} />
        <Drawer.Screen name='Prova2' component={Prova2} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
