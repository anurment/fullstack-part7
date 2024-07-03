import axios from 'axios'
const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api/'

const getAll = async () => {
  const response = await axios.get(`${baseUrl}/all`)
  return response.data
}

const getOne = async country => {
  const response = await axios.get(`${baseUrl}/name/${country}`)
  return response.data
}

export default { getAll, getOne } 
