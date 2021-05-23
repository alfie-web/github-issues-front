import { useEffect, useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import queryString from 'query-string'

import scrollTo from '../../../../helpers/scrollTo'
import { setPage, fetchIssues } from '../../../../store/actions/issues'
import Preloader from '../../../../components/Preloader'
import Pagination from '../../../../components/Pagination'
import IssuesItem from '../Item'

const IssuesList = () => {
   const history = useHistory()
   const dispatch = useDispatch()

   const issues = useSelector((state) => state.issues.issues)
   const page = useSelector((state) => state.issues.page)
   const sortField = useSelector((state) => state.issues.sortField)
   const sortDirection = useSelector((state) => state.issues.sortDirection)
   const totalIssuesCount = useSelector((state) => state.issues.total_issues_count)
   const isFetching = useSelector((state) => state.issues.isFetching)

   const onPageSelect = useCallback((selectedPage) => {
      scrollTo({ top: 0 })
      dispatch(setPage(+selectedPage))
   }, [dispatch])

   const onBack = useCallback(() => {
      const params = queryString.parse(history.location.search)

      dispatch(setPage(params.page ?? 1))
   }, [dispatch, history])

   useEffect(() => {
      window.addEventListener('popstate', onBack, false)

      return () => window.removeEventListener('popstate', onBack, false)
   }, [onBack])

   useEffect(() => {
      dispatch(fetchIssues())
      const pageP = queryString.parse(history.location.search).page ?? 1
      const reqString = `/?page=${page}&state=${sortField}&direction=${sortDirection}`

      if (+pageP < page) {
         history.push(reqString)
      } else {
         history.replace(reqString)
      }
   }, [dispatch, history, page, sortField, sortDirection])

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
               currentPage={page}
               totalPages={Math.ceil(totalIssuesCount / 30)}
               onPageSelect={onPageSelect}
            />
         )}
      </div>
   )
}

export default IssuesList
