import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://react-my-burger-4b36a.firebaseio.com'
});

export default instance;