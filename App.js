import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { ProviderCart } from './components/ProviderCart';

import Home from './screens/home';
import Feed from './screens/feed';
import Counter from './screens/counter';
import Product from './screens/product';
import Login from './screens/login';
import Register from './screens/Register';
import AddProduct from './screens/AddProduct';
import carrinho from './screens/carrinho';

function BottomTabs() {
  const BottomTab = createBottomTabNavigator();

  return (
    <BottomTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#6e424b',
        tabBarActiveBackgroundColor: '#d6b6cb',
        headerStyle: { backgroundColor: '#d6b6cb' },
        headerTintColor: '#841584',
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => <MaterialIcons name="home" size={24} color="black" />,
        }}
      />
      <BottomTab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarIcon: () => <MaterialIcons name="rss-feed" size={30} color="#FF007F" />,
        }}
      />
      <BottomTab.Screen
        name="Counter"
        component={Counter}
        options={{
          tabBarIcon: () => <MaterialIcons name="timer" size={30} color="#FF007F" />,
        }}
      />
      <BottomTab.Screen
      name="Product"
      component={Product}
      options={{tabBarIcon:()=>< MaterialIcons name="Imagem Produto"/>,
      }}
      />
      <BottomTab.Screen
      name="AdicionarProduto"
      component={AddProduct}
      options={{tabBarIcon:()=>< MaterialIcons name="Imagem novo produto"/>,
      }}
      />
      <BottomTab.Screen
      name="Carrinho"
      component={carrinho}
      options={{tabBarIcon:()=>< MaterialIcons name="Imagem Carrinho"/>,
      }}
      />

    </BottomTab.Navigator>
  );
}

export default function App() {
  const Stack = createStackNavigator();

  return (
    <ProviderCart>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen options={{ headerShown: false }} name="HomeTab" component={BottomTabs} />
        </Stack.Navigator>
      </NavigationContainer>
    </ProviderCart>
  );
}