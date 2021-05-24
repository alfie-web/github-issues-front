import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Markdown from 'markdown-to-jsx'

import scrollTo from '../../helpers/scrollTo'
import { fetchCurrentIssue } from '../../store/actions/issues'
import Labels from '../../components/Labels'
import Avatar from '../../components/Avatar'
import IssuePreloader from './components/Preloader'
import IssueAssignees from './components/Assignees'

import './Issue.sass'

const IssuePage = () => {
   const dispatch = useDispatch()
   const params = useParams()
   const currentIssue = useSelector((state) => state.issues.currentIssue)

   useEffect(() => {
      scrollTo({ top: 0 })
   }, [])

   useEffect(() => {
      dispatch(fetchCurrentIssue(params))   
   }, [dispatch, params])

   return currentIssue ? (
      <main className="Issue page">
         <div className="container">
            <Avatar
               className="Issue__user"
               url={currentIssue.user.avatar_url}
               userName={currentIssue.user.login}
            />

            <Labels labels={currentIssue.labels} />

            <h1 className="Issue__title">
               {currentIssue.title}
            </h1>

            <Markdown className="Issue__body">
               {currentIssue.body}
            </Markdown>

            <IssueAssignees assignees={currentIssue.assignees} />
         </div>
      </main>
   ) : (
      <IssuePreloader />
   )
}

export default IssuePage
