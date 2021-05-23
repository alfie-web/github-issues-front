import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { fetchCurrentIssue } from '../../store/actions/issues'
import Preloader from '../../components/Preloader'

// const IssuePagePreloader = () => {
//    const isFetching = useSelector((state) => state.issues.isFetching)
//    // console.log('RENDERS', isFetching)

//    return isFetching ? <Preloader /> : null
// }

const IssuePage = () => {
   const dispatch = useDispatch()
   const params = useParams()
   const { currentIssue, isFetching } = useSelector((state) => state.issues)
   console.log('RENDERS')

   useEffect(() => {
      dispatch(fetchCurrentIssue(params))
   }, [dispatch, params])

   return !isFetching ? (
      <main className="Issue page">
         <div className="container">
            {currentIssue && <h1>{currentIssue.title}</h1>}
         </div>
      </main>
   ) : <Preloader />
}

export default IssuePage
