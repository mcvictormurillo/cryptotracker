import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import FavoriteEmptyState from './FavoriteEmptyState'
import colors from '../../res/colors'

export default function FavoriteScreen() {
    return (
        <View style={styles.container}>
            <FavoriteEmptyState />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.charade,
        flex: 1,
        
    }
})
