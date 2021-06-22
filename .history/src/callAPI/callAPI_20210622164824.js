import axios from 'axios'
import * as Config from '../constant/config'

export default function CALLAPI(name, method = 'GET', body) {
    axios({
        method: method,
        url: `${Config.API_URL}/${name}`,
        data: body
    })
        .catch(error => console.log(error))
}