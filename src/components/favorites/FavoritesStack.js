import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import FavoriteScreen from './FavoriteScreen';
import colors from '../../res/colors'

const Stack = createStackNavigator()
export const FavoritesStack = (props) => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: colors.blackPearl,
                    shadowColor: colors.blackPearl
                },
                headerTintColor: colors.white
            }}>
            <Stack.Screen component={FavoriteScreen} name={'Favorites'} />
        </Stack.Navigator>
    );
}

