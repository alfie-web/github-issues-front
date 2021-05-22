import axios from '.'

const issuesAPI = {
   getAll: ({ page }) => axios.get(`/github/issues/?page=${page}&userName=facebook&repoName=react`),
}

export default issuesAPI
