import axios from 'axios'

export function getUsers() {
    return async function (dispatch) {
        const response = await axios.get('https://api.github.com/users')
        // console.log(response.data)
        return dispatch({
            type: 'LOAD_MOVIES',
            payload: response.data
        })
    }
}