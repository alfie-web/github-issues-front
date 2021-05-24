import { useEffect, useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import queryString from 'query-string'

import scrollTo from '../../../../helpers/scrollTo'
import { setPage, fetchIssues, setCurrentIssue } from '../../../../store/actions/issues'
import Preloader from '../../../../components/Preloader'
import Pagination from '../../../../components/Pagination'
import IssuesItem from '../Item'

const IssuesList = () => {
   const history = useHistory()
   const dispatch = useDispatch()

   const {
      issues,
      page,
      sortField,
      sortDirection,
      totalIssuesCount,
      isFetching,
      repoData,
   } = useSelector((state) => state.issues)

   const onPageSelect = useCallback((selectedPage) => {
      dispatch(setPage(+selectedPage))
      dispatch(setCurrentIssue(null))
   }, [dispatch])

   const getPageFromUrl = useCallback(() => {
      return queryString.parse(history.location.search).page ?? 1
   }, [history])

   const onBack = useCallback(() => {
      onPageSelect(getPageFromUrl())
   }, [onPageSelect, getPageFromUrl])

   useEffect(() => {
      window.addEventListener('popstate', onBack, false)

      return () => window.removeEventListener('popstate', onBack, false)
   }, [onBack])

   useEffect(() => {
      scrollTo({ top: 0 })
      
      dispatch(fetchIssues())
      const reqString = `/?userName=${repoData.userName}&repoName=${repoData.repoName}&page=${page}&state=${sortField}&direction=${sortDirection}`

      // Нужно для корректной работы кнопок назад/вперёд в браузере
      if (+getPageFromUrl() < page) {
         history.push(reqString)
      } else {
         history.replace(reqString)
      }
   }, [dispatch, getPageFromUrl, history, page, sortField, sortDirection, repoData])

   return (
      <div className="Issues__list">
         <div className="Issues__list-items">
            {isFetching && (
               <div className="Issues__preloader">
                  <Preloader />
               </div>
            )}

            {issues.length
               ? issues.map((item) => (
                    <IssuesItem
                       key={item.id}
                       title={item.title}
                       number={item.number}
                       user={item.user}
                       labels={item.labels}
                       state={item.state}
                       createdAt={item.created_at}
                    />
                 ))
               : null}
         </div>

         {!isFetching && (
            <Pagination
               className="Issues__pagination"
               currentPage={+page}
               totalPages={Math.ceil(totalIssuesCount / 30)}
               onPageSelect={onPageSelect}
            />
         )}
      </div>
   )
}

export default IssuesList
