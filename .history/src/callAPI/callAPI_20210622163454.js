import axios from 'axios'
import config from '../constant/config'

export default function CALLAPI(name, method = 'GET', data) {
    axios({
        method: method,
        url: `${config.API_URL}/${name}`,
        data: body
    })
        .catch(error => console.log(error))
}