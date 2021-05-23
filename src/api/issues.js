import axios from '.'

const issuesAPI = {
   getAll: ({ page, sortField, sortDirection }) => {
      return axios.get(
         `/github/issues/?page=${page}&state=${sortField}&direction=${sortDirection}&userName=facebook&repoName=react`,
      )
   },
}

export default issuesAPI
