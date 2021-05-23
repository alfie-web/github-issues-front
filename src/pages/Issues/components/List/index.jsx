import { useEffect, useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

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
   const totalIssuesCount = useSelector((state) => state.issues.total_issues_count)
   const isFetching = useSelector((state) => state.issues.isFetching)

   const onPageSelect = useCallback((selectedPage) => {
      scrollTo({ top: 0 })
      dispatch(setPage(+selectedPage))
   }, [dispatch])

   useEffect(() => {
      dispatch(fetchIssues())
      history.push(
         `/?page=${page}`,
         // `/?page=${page}&sort_field=${sort_field}&sort_direction=${sort_direction}`
      )
   }, [dispatch, history, page])
   // }, [dispatch, history, page, sort_field, sort_direction])

   return (
      <div className="Issues__list">
         <div className="Issues__list-items">
            {isFetching && <Preloader />}

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
