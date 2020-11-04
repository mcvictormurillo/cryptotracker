import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { CoinsScreen } from './CoinsScreen';
import { CoinDetailScreen } from './CoinDeatilScreen';
import colors from '../../res/colors'
const Stack = createStackNavigator()
export const CoinStack = () => {
    return (
        <Stack.Navigator
        screenOptions={{
            headerStyle:{
                backgroundColor:colors.blackPearl,
                shadowColor:colors.blackPearl
            },
            headerTintColor:colors.white
        }}
        >
            <Stack.Screen name={'Coin'} component={CoinsScreen} />
            <Stack.Screen name={'CoinDetailScreen'} component={CoinDetailScreen} />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({})
