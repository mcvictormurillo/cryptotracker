import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Pressable, FlatList } from 'react-native'
import { useGetCoins } from '../hooks/useGetCoins'
import { CoinsItem } from './CoinsItem'
import colors from '../../res/colors'
import { CoinSearch } from './CoinSearch'

export const CoinsScreen = ({ navigation }) => {
    const { coins, loading } = useGetCoins()
    const [query, setQuery] = useState('')
    const [results, setResults] = useState([])
    //console.log('{ coins, loading }', coins);
    const handlePess = (item) => {
        navigation.navigate('CoinDetailScreen', {
            coin: item
        })
    }
    if (loading) {
        return <Text>Cargando...</Text>
    }
    const handleSearch = (query) => {
        setQuery(query)
        const lista = coins.filter(coin => {
            return coin.name.toLowerCase().includes(query.toLowerCase()) || coin.symbol.toLowerCase().includes(query.toLowerCase())
        })
        setResults(lista)
    }
    return (
        <View style={styles.container}>
            <CoinSearch onChange={handleSearch} />
            <FlatList
                data={query ? results : coins}
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