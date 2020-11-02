class Http {
    static instance = new Http()
    get = async (url) => {
        try {
            let req = await fetch(url)
            let json = req.json()
            return json
        } catch (error) {
            console.error('http get', error)
            throw Error(error)
        }
    }

    post = async (url, body) => {
        try {
            let req = await fetch(url, {
                method: 'POST',
                body: JSON.stringify(body)
            })
            let json = req.json()
            return json
        } catch (error) {
            console.error('http get', error)
            throw Error(error)
        }
    }
}

export default Http