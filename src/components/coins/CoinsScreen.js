import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native'
import { useGetCoins } from '../hooks/useGetCoins'
export const CoinsScreen = ({ navigation }) => {
    const { coins, loading } = useGetCoins()
    console.log('{ coins, loading }',{ coins, loading });
    const handlePess = () => {
        navigation.navigate('CoinDetailScreen')
    }
    if(loading){
        return <Text>Cargando...</Text>
    }
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>CoinsScreen </Text>
            <Pressable style={styles.btn} onPress={handlePess}>
                <Text style={styles.btnText}>Ir a detail</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red'
    },
    titleText: {
        color: 'white',
        textAlign: 'center'
    },
    btn: {
        padding: 0,
        backgroundColor: 'blue',
        borderRadius: 8,
        margin: 16
    },
    btnText: {
        color: 'white',
        textAlign: 'center'
    }
})