import axios from 'axios'

export const api = axios.create({
baseURL: 'https://apiadonis2023.nrender.com',
headers: {
    'Content-Type': 'application/json',
},


})