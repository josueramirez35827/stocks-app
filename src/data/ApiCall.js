import axios from 'axios';

const API_KEY = "pk_e5da4116ae8942c0afc62285ecda542c"
const BASE_URL = `https://cloud.iexapis.com/stable/stock/market/collection/list?collectionName=mostactive&token=${API_KEY}`
const GetData = async () => {
  let response = await axios.get(BASE_URL);
  return (response.data)

}

export default GetData;