import { useCallback, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import getQueryParams from '../../../../helpers/getQueryParams'
import scrollTo from '../../../../helpers/scrollTo'
import { fetchLogs } from '../../../../store/actions/logs'

import LogsPreloader from './components/Preloader'
import LogsPagination from './components/Pagination'
import LogsItem from './components/Item'

// TODO: Вынести логику пагинации в хук
const LogsList = () => {
   const history = useHistory()
   const dispatch = useDispatch()

   const logs = useSelector((state) => state.logs.logs)

   const onPageSelect = useCallback((selectedPage) => {
      history.push(
         `/logs/?page=${+selectedPage}`,
      )
   }, [history])

   const onURLChange = useCallback(() => {
      const data = getQueryParams(window.location.search)

      dispatch(fetchLogs(data.page))
   }, [dispatch])

   useEffect(() => {
      scrollTo({ top: 0 })
      
      onURLChange()
   }, [onURLChange, history.location.search])

   return (
      <div className="Logs__list">
         <div className="Logs__list-items">
            <LogsPreloader />
            
            {logs.length ? logs.map((l) => (
               <LogsItem
                  key={l._id}
                  url={l.url}
                  userIP={l.userIP}
                  method={l.method}
                  status={l.status}
                  time={l.time}
                  action={l.action}
               />
            )) : null}
         </div>

         <LogsPagination
            onPageSelect={onPageSelect}
         />
      </div>
   )
}

export default LogsList
