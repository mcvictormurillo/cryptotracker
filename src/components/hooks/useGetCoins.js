import { useState, useEffect } from 'react'
import Http from '../../libs/http'
const URL_SERVER = 'https://api.coinlore.net/api/tickers/'
export const useGetCoins = () => {
    const [coins, setCoins] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        async function fetchData() {
            setLoading(true)
            const res = await Http.instance.get(URL_SERVER)
            //console.log('coins', res)
            setCoins(res.data)
            setLoading(false)
        }
        fetchData()
    }, [])
    return { coins, loading }
}

