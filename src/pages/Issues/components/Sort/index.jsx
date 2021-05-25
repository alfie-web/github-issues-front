import { memo } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import getQueryParams from '../../../../helpers/getQueryParams'
import Select from '../../../../components/Select'

const IssuesSort = () => {
   const history = useHistory()
   const sortField = useSelector((state) => state.issues.sortField)
   const sortDirection = useSelector((state) => state.issues.sortDirection)

   const getQueryStr = () => {
      const params = getQueryParams()
      const p = params.page ? +params.page : 1
      const f = params.sortField ? params.sortField : 'all'
      const d = params.sortDirection ? params.sortDirection : 'desc'
      const u = params.userName ? params.userName : ''
      const r = params.repoName ? params.repoName : ''

      return { p, f, d, u, r }
   }

   const onSelectField = (data) => {
      const { p, d, u, r } = getQueryStr()

      history.push(
         `/?userName=${u}&repoName=${r}&page=${p}&sortField=${data}&sortDirection=${d}`,
      )
   }

   const onSelectDirection = (data) => {
      const { p, f, u, r } = getQueryStr()

      history.push(
         `/?userName=${u}&repoName=${r}&page=${p}&sortField=${f}&sortDirection=${data}`,
      )
   }

   return (
      <div className="Issues__sort">
         <div className="Issues__sort-select">
            <div className="Issues__sort-label">Sort by: </div>

            <Select
               optionsData={[
                  { title: 'Open', value: 'open' },
                  { title: 'Closed', value: 'closed' },
                  { title: 'All', value: 'all' },
               ]}
               onSelect={onSelectField}
               defaultValue={sortField}
            />
         </div>

         <div className="Issues__sort-select">
            <div className="Issues__sort-label">Direction: </div>
            <Select
               optionsData={[
                  { title: 'Descending', value: 'desc' },
                  { title: 'Ascending', value: 'asc' },
               ]}
               onSelect={onSelectDirection}
               defaultValue={sortDirection}
            />
         </div>
      </div>
   )
}

export default memo(IssuesSort)
