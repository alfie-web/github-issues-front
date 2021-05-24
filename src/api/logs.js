import axios from '.'

const logsAPI = {
   getAll: (page) => {
      return axios.get(`/logs?page=${page}`)
   },
}

export default logsAPI
