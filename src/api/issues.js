import axios from '.'

const issuesAPI = {
   getAll: ({
      page,
      sortField,
      sortDirection,
      userName,
      repoName,
   }) => {
      return axios.get(
         `/github/issues/?userName=${userName}&repoName=${repoName}&page=${page}&state=${sortField}&direction=${sortDirection}`,
      )
   },
}

export default issuesAPI
