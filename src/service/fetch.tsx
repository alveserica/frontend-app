import axios from 'axios';

export default {
    async getAllData() {
        const response = await axios.get('https://64b04040c60b8f941af57944.mockapi.io/api/v1/users')
        return response.data;
    },
}