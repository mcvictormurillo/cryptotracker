import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { CoinStack } from './src/components/coins/CoinStack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Image, StatusBar } from 'react-native';
import colors from './src/res/colors'
import { FavoritesStack } from './src/components/favorites/FavoritesStack';
import Home from './src/ejemplo/src/screens/Profile'
const Tabs = createBottomTabNavigator()
export default App = () => {

  return (
    <>
      <StatusBar backgroundColor={colors.blackPearl}/>
      <NavigationContainer>
        <Tabs.Navigator
          tabBarOptions={{
            tintColor: '#fefefe',
            style: {
              backgroundColor: colors.blackPearl
            }

          }}
        >
          <Tabs.Screen name={'Coins'} component={CoinStack}
            options={{
              tabBarIcon: ({ size, color }) => (
                <Image
                  style={{ tintColor: color, width: size, height: size }}
                  source={require('./src/assets/bank.png')} />
              )
            }}
          />
          <Tabs.Screen name={'Favorites'} component={FavoritesStack}
            options={{
              tabBarIcon: ({ size, color }) => (
                <Image
                  style={{ tintColor: color, width: size, height: size }}
                  source={require('./src/assets/bank.png')} />
              )
            }}
          />

        </Tabs.Navigator>
      </NavigationContainer>
    </>
  )
}