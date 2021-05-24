import { useCallback } from 'react'
// import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

// import getQueryParams from '../../../../helpers/getQueryParams'
// import scrollTo from '../../../../helpers/scrollTo'
import useFetch from '../../../../helpers/useFetch'
import { setPage, fetchLogs } from '../../../../store/actions/logs'

import LogsPreloader from './components/Preloader'
import LogsPagination from './components/Pagination'
import LogsItem from './components/Item'

// TODO: Вынести логику пагинации в хук
const LogsList = () => {
   console.log('RENDERS')
   // const history = useHistory()
   const dispatch = useDispatch()

   const page = useSelector((state) => state.logs.page)
   const logs = useSelector((state) => state.logs.logs)

   const onPageSelect = useCallback((selectedPage) => {
      dispatch(setPage(+selectedPage))
   }, [dispatch])

   const onFetch = useCallback(() => dispatch(fetchLogs()), [dispatch])

   useFetch(page, onFetch, onPageSelect, `/logs?page=${page}`)

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
// import { useEffect, useCallback } from 'react'
// import { useHistory } from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux'

// import getQueryParams from '../../../../helpers/getQueryParams'
// import scrollTo from '../../../../helpers/scrollTo'
// import { setPage, fetchLogs } from '../../../../store/actions/logs'

// import LogsPreloader from './components/Preloader'
// import LogsPagination from './components/Pagination'
// import LogsItem from './components/Item'

// // TODO: Вынести логику пагинации в хук
// const LogsList = () => {
//    console.log('RENDERS')
//    const history = useHistory()
//    const dispatch = useDispatch()

//    const page = useSelector((state) => state.logs.page)
//    const logs = useSelector((state) => state.logs.logs)

//    const getPageFromUrl = useCallback(() => {
//       return +getQueryParams().page ?? 1
//    }, [])

//    const onPageSelect = useCallback((selectedPage) => {
//       dispatch(setPage(+selectedPage))
//    }, [dispatch])

//    const onBack = useCallback(() => {
//       onPageSelect(getPageFromUrl())
//    }, [onPageSelect, getPageFromUrl])

//    useEffect(() => {
//       window.addEventListener('popstate', onBack, false)

//       return () => window.removeEventListener('popstate', onBack, false)
//    }, [onBack])

//    useEffect(() => {
//       scrollTo({ top: 0 })

//       dispatch(fetchLogs())
//       const reqString = `/logs?page=${page}`

//       // Нужно для корректной работы кнопок назад/вперёд в браузере
//       if (getPageFromUrl() < page) {
//          history.push(reqString)
//       } else {
//          history.replace(reqString)
//       }
//    }, [dispatch, getPageFromUrl, history, page])

//    return (
//       <div className="Logs__list">
//          <div className="Logs__list-items">
//             <LogsPreloader />
            
//             {logs.length ? logs.map((l) => (
//                <LogsItem
//                   key={l._id}
//                   url={l.url}
//                   userIP={l.userIP}
//                   method={l.method}
//                   status={l.status}
//                   time={l.time}
//                   action={l.action}
//                />
//             )) : null}
//          </div>

//          <LogsPagination
//             onPageSelect={onPageSelect}
//          />
//       </div>
//    )
// }

// export default LogsList
