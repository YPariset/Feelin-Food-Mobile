import apisauce from 'apisauce';

const create = (baseURL = 'https://demo1784718.mockable.io/') => {
  const api = apisauce.create({
    baseURL,
    timeout: 10000
  })

const getRestaurants = () => {
  return api.get('getRestaurants').then(res => {
    if(res.ok) {
      return res.data
    } else {
      return res.problem
    }

  })
}

const getDishes = () => {
  return api.get('getDishes').then(res => {
    if(res.ok) {
      return res.data
    } else {
      return res.problem
    }

  })
}


return{
  getRestaurants, getDishes
}
}

export default {
  create
}