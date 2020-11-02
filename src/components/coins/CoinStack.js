import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { CoinsScreen } from './CoinsScreen';
import { CoinDetailScreen } from './CoinDeatilScreen';
const Stack = createStackNavigator()
export const CoinStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={'Coin'} component={CoinsScreen} />
            <Stack.Screen name={'CoinDetailScreen'} component={CoinDetailScreen} />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({})
