import { useEffect, useState } from 'react'
import Http from '../../libs/http'

export default function useGetMarkets(id) {
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        async function getData() {
            try {
                setLoading(true)
                const response = await Http.instance.get(`https://api.coinlore.net/api/coin/markets/?id=${id}`)
                console.log('response', response);
                setData(response)
                setLoading(false)
            } catch (error) {
                setData(response)
                setLoading(false)
                setError('Ocurrió un error')
            }
        }
        getData()
    }, [])
    return { data, loading, error }
}

