import React, { useEffect } from 'react'
import { StyleSheet, Text, View, Image, SectionList, FlatList } from 'react-native'
import colors from '../../res/colors'
import { useGetMarkets } from '../hooks/useGetMarkets'
import { CoinMarketItem } from './CoinMarketItem'

export function CoinDetailScreen(props) {
    //console.log('route', props.route.params.coin)
    const { coin } = props.route.params
    const { data, loading, error } = useGetMarkets(coin.id)
    //console.log('markets', data)

    useEffect(() => {
        props.navigation.setOptions({ title: coin.symbol })
    }, [])

    const getSections = (itemCoin) => {
        const sections = [
            {
                title: "Market cap",
                data: [itemCoin.market_cap_usd]
            },
            {
                title: "Volume 24h",
                data: [itemCoin.volume24]
            },
            {
                title: "Change 24h",
                data: [itemCoin.percent_change_24h]
            }
        ];
        return sections
    }
    const getSymbolIcon = (name) => {
        if (name) {
            const nameImg = name.toLowerCase().replace(" ", '-')
            return `https://c1.coinlore.com/img/25x25/${nameImg}.png`;
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.subHeader}>
                <Image style={styles.img} source={{ uri: getSymbolIcon(coin.name) }} />
                <Text style={styles.titleText}>{coin.name}</Text>
            </View>
            <SectionList
                style={styles.section}
                sections={getSections(coin)}
                keyExtractor={({ item }) => item}
                renderSectionHeader={({ section }) => (
                    <View style={styles.sectionHeader}>
                        <Text style={styles.itemtext}>{section.title}</Text>
                    </View>
                )}
                renderItem={({ item }) => (
                    <View style={styles.sectionText}>
                        <Text style={styles.itemtext}>{item}</Text>
                    </View>
                )}
            />
            <Text style={styles.marketsTitle}>Markets</Text>
            <FlatList
                style={styles.list}
                keyExtractor={(item) => `${item.base}-${item.name}-${item.quote}`}
                data={data}
                renderItem={({ item }) => <CoinMarketItem item={item} />}
                horizontal={true}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.charade
    },
    subHeader: {
        backgroundColor: 'rgba(0,0,0,0.1)',
        padding: 16,
        flexDirection: 'row'
    },
    img: { width: 25, height: 25 },
    titleText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
        marginLeft: 8
    },
    section:{
        maxHeight:220
    },
    list:{
        maxHeight:100,
        paddingLeft:16
    },
    sectionHeader: {
        backgroundColor: 'rgba(0,0,0,0.2)',
        padding: 8,
    },
    itemtext: {
        fontSize: 14,
        color: '#fff',
    },
    sectionText: {
        fontSize: 14,
        color: '#fff',
        fontWeight: 'bold',
        padding: 8,

    },
    marketsTitle:{
        color:'white',
        fontSize:16,
        marginBottom:16,
        marginLeft:16,
        fontWeight:'bold'
    }

})
