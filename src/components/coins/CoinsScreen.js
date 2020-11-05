import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Pressable, FlatList } from 'react-native'
import { useGetCoins } from '../hooks/useGetCoins'
import { CoinsItem } from './CoinsItem'
import colors from '../../res/colors'

export const CoinsScreen = ({ navigation }) => {
    const { coins, loading } = useGetCoins()
    console.log('{ coins, loading }', coins);
    const handlePess = (item) => {
        navigation.navigate('CoinDetailScreen', {
            coin: item
        })
    }
    if (loading) {
        return <Text>Cargando...</Text>
    }
    return (
        <View style={styles.container}>
            {/* <Text style={styles.titleText}>CoinsScreen </Text> */}
            <FlatList
                data={coins}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <CoinsItem item={item} onPress={() => handlePess(item)} />}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.charade
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