import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { fetchIssues } from '../../../../store/actions/issues'
import IssuesItem from '../Item'

const IssuesList = () => {
   const history = useHistory()
   const dispatch = useDispatch()

   const issues = useSelector((state) => state.issues.issues)
   const page = useSelector((state) => state.issues.page)
   const isFetching = useSelector((state) => state.issues.isFetching)

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
            {isFetching && <div>Loading</div>}
            {/* {isFetching && <Preloader />} */}

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
      </div>
   )
}

export default IssuesList
