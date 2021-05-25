import { useEffect, useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import getQueryParams from '../../../../helpers/getQueryParams'
import scrollTo from '../../../../helpers/scrollTo'
import { fetchIssues } from '../../../../store/actions/issues'
import Preloader from '../../../../components/Preloader'
import Pagination from '../../../../components/Pagination'
import IssuesItem from '../Item'

const IssuesList = () => {
   // console.log('RENDERS')
   const history = useHistory()
   const dispatch = useDispatch()

   const {
      issues,
      page,
      totalIssuesCount,
      isFetching,
   } = useSelector((state) => state.issues)

   const onPageSelect = (newPage) => {
      const data = getQueryParams(window.location.search)
      history.push(
         `/?userName=${data.userName}&repoName=${data.repoName}&page=${+newPage}&sortField=${data.sortField}&sortDirection=${data.sortDirection}`,
      )
   }

   const onURLChange = useCallback(() => {
      const data = getQueryParams(window.location.search)

      dispatch(fetchIssues(
         data.page,
         data.sortDirection,
         data.sortField,
         data.userName,
         data.repoName,
      ))
   }, [dispatch])

   useEffect(() => {
      scrollTo({ top: 0 })
      
      onURLChange()
   }, [onURLChange, history.location.search])

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

         <Pagination
            className="Issues__pagination"
            currentPage={+page}
            totalPages={Math.ceil(totalIssuesCount / 30)}
            onPageSelect={onPageSelect}
         />
      </div>
   )
}

export default IssuesList
