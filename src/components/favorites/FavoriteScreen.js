import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import FavoriteEmptyState from './FavoriteEmptyState'
import colors from '../../res/colors'
import Storage from '../../libs/storage'
import { CoinsItem } from '../coins/CoinsItem'

export default function FavoriteScreen(props) {
    const [favorites, setFavorites] = useState([])
  
    useEffect(() => {
        const unsubscribe = props.navigation.addListener('focus', () => {
            getFavorites()
        });
        return unsubscribe;
    }, [props.navigation]);

    const getFavorites = async() => {
        const allKeys = await Storage.instance.getAllKeys()
        const keys = allKeys.filter(key => key.includes('favorite-'))
        const favs = await Storage.instance.multiGet(keys)
        const lista = favs.map(fav => JSON.parse(fav[1]))
        console.log('favorites', lista);
        setFavorites(lista)
    }
    const hanldeNavigate = (item) => {
        props.navigation.navigate('CoinDetailScreen', {
            coin: item
        })
    }
    return (
        <View style={styles.container}>
            {
                favorites.length ?
                    <FlatList
                        data={favorites}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => {
                            return <CoinsItem item={item} onPress={() => hanldeNavigate(item)} />
                        }}
                    />
                    : <FavoriteEmptyState />
            }

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.charade,
        flex: 1,

    }
})
