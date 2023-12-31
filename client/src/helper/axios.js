import axios from "axios"



const token = () => {
    const authUser = localStorage.getItem("jsonwebtoken");
    if (authUser) return authUser;
    return null;
  };
  //apply base url for axios
  const API_URL ="http://localhost:4000"
  const axiosApi = axios.create({
    baseURL: API_URL,
  })

axiosApi.defaults.headers.common["Authorization"] = 'Bearer ' + token()

export async function get(url, config = {}) {
    return await axiosApi
    .get(url, { ...config })
    .then(response => response.data)
  }
  
  export async function post(url, data, config = {}) {
    return axiosApi
      .post(url, { ...data }, { ...config })
      .then(response => response.data)
  }
  export async function postFormdata(url, data, config = {}) {
    return axiosApi
      .post(url, data, { ...config })
      .then(response => response.data)
  }
  export async function put(url, data, config = {}) {
    return axiosApi
      .put(url, { ...data }, { ...config })
      .then(response => response.data)
  }
  
  export async function del(url, config = {}) {
    return await axiosApi
      .delete(url, { ...config })
      .then(response => response.data)
  }