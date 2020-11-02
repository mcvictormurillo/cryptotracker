import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { CoinsScreen } from './CoinsScreen';
const Stack = createStackNavigator()
export const CoinStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={'Coin'} component={CoinsScreen} />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({})
