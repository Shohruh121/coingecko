import axios from "axios";

const apiUrl = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=50'


export const coinMarketsApi = {
    getCoinMarkets : () => axios.get (apiUrl, {
        headers: {
             'Content-Type': 'application/json'
            }
    }),
    getCoinMarket: (id) => axios.get(
        `https://api.coingecko.com/api/v3/coins/bitcoin/${id}`, 
        {
            headers: {
                'Content-Type': 'application/json'
            }
        })
}