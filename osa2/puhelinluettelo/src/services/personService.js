import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    const req = axios.get(baseUrl)
    return req.then(response => response.data)
}

const addOne = newPerson => {
    const req = axios.post(baseUrl, newPerson)
    return req.then(response => response.data)
}

const removeOne = id => {
    const req = axios.delete(`${baseUrl}/${id}`)
    return req.then(response => response.status).catch(err => err.response?err.response.status:err)
}

const updateOne = (id, newPerson) => {
    const req = axios.put(`${baseUrl}/${id}`, newPerson)
    return req.then(response => response.data)
}

export default { getAll, addOne, removeOne, updateOne }