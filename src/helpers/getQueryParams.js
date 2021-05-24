import queryString from 'query-string'

const getQueryParams = (queryStr = window.location.search) => queryString.parse(queryStr)

export default getQueryParams
