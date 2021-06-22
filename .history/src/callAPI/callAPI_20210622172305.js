import axios from 'axios'
import * as Config from '../constant/config'

export default function Product(name, method = 'GET', body) {
    return axios({
        method: method,
        url: `${Config.API_URL}/${name}`,
        data: body
    })
        .catch(error => {
            console.log(error)
        })
}

export default function Details(name, method = 'GET', body) {
    return axios({
        method: method,
        url: `${Config.API_URL}/${name}/`,
        data: body
    })
        .catch(error => {
            console.log(error)
        })
}