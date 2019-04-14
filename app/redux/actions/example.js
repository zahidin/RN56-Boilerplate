import axios from 'axios'

export const GET_ALL_EXAMPLE = () => {
    return{
        type:'GET_ALL_EXAMPLE',
        payload:axios.get('https://reqres.in/api/users?page=2')
    }
}