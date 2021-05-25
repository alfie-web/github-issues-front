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
         `/github/issues/?userName=${userName}&repoName=${repoName}&page=${page}&sortField=${sortField}&sortDirection=${sortDirection}`,
      )
   },
   getByNumber: ({ userName, repoName, number }) => {
      return axios.get(`/github/issue/${number}/?userName=${userName}&repoName=${repoName}`)
   },
}

export default issuesAPI
