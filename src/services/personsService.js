import axios from "axios";
const baseUrl = '/api/persons'


const getAll = () => {
    return axios.get(baseUrl)
}

const getOne = (id) => {
    return axios.get(`${baseUrl}/${id}`)
}

const create = (newPerson) => {
    return axios.post(baseUrl, newPerson)
}

const update = (id, updatedPerson) => {
    return axios.put(`${baseUrl}/${id}`, updatedPerson)
}

const deletePerson = (id) => {
    return axios.delete(`${baseUrl}/${id}`)
}


export default {
    getAll,
    getOne,
    create,
    update,
    deletePerson
}