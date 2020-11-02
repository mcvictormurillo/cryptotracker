import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { CoinStack } from './src/components/coins/CoinStack';

export default App = () => {
  return (
    <NavigationContainer>
      <CoinStack />
    </NavigationContainer>
  )
}