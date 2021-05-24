import { useEffect, useCallback } from 'react'
import { useHistory } from 'react-router-dom'

import scrollTo from './scrollTo'
import getQueryParams from './getQueryParams'

const useFetch = (currentPage, fetchCallback, onBackCallback, urlStr) => {
   const history = useHistory()

   const _getNewPageFromUrl = useCallback(() => {
      return +getQueryParams().page ?? 1
   }, [])

   const onBack = useCallback(() => {
      onBackCallback(_getNewPageFromUrl())
   }, [onBackCallback, _getNewPageFromUrl])

   useEffect(() => {
      window.addEventListener('popstate', onBack, false)

      return () => window.removeEventListener('popstate', onBack, false)
   }, [onBack])

   useEffect(() => {
      scrollTo({ top: 0 })

      fetchCallback()
      const reqString = urlStr

      // Нужно для корректной работы кнопок назад/вперёд в браузере
      if (_getNewPageFromUrl() < currentPage) {
         history.push(reqString)
      } else {
         history.replace(reqString)
      }
   }, [fetchCallback, _getNewPageFromUrl, history, currentPage, urlStr])
}

export default useFetch
