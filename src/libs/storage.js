import AsyncStorage from '@react-native-async-storage/async-storage'
class Storage {

    static instance = new Storage()
    store = async (key, value) => {
        try {
            await AsyncStorage.setItem(key, JSON.stringify(value))
            return true
        } catch (error) {
            console.log('storage store', error);
            return false
        }
    }

    multiGet = async () => {
        try {
            const data = await AsyncStorage.multiGet(key)
            return data
        } catch (error) {
            console.log('storage multiGet', error);
            throw Error(error)
        }
    }

    getAllKeys = async () => {
        try {
            const data = await AsyncStorage.getAllKeys()
            return data
        } catch (error) {
            console.log('storage getAllKeys', error);
            throw Error(error)
        }
    }


    get = async (key) => {
        try {
            const data = await AsyncStorage.getItem(key)
            return data
        } catch (error) {
            console.log('storage get', error);
            throw Error(error)
        }
    }

    remove = async (key) => {
        try {
            await AsyncStorage.removeItem(key)
            return true
        } catch (error) {
            console.log('storage remove', error);
            return false
        }
    }
}

export default Storage