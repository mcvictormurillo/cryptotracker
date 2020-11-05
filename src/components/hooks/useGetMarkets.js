import { useEffect, useState } from 'react'
import Http from '../../libs/http'

export const useGetMarkets = (id) => {
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        async function getData() {
            try {
                setLoading(true)
                const response = await Http.instance.get(`https://api.coinlore.net/api/coin/markets/?id=${id}`)
                //console.log('response', response);
                setData(response)
                setLoading(false)
            } catch (error) {
                setLoading(false)
                setError('Ocurrió un error')
            }
        }
        getData()
    }, [])
    return { data, loading, error }
}

