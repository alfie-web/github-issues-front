import { memo } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import getQueryParams from '../../../../helpers/getQueryParams'
import Select from '../../../../components/Select'

const IssuesSort = () => {
   const history = useHistory()
   const sortField = useSelector((state) => state.issues.sortField)
   const sortDirection = useSelector((state) => state.issues.sortDirection)

   const onSelectField = (data) => {
      const params = getQueryParams()
      const p = params.page ? +params.page : 1
      const d = params.direction ? params.direction : 'desc'
      const u = params.userName ? params.userName : ''
      const r = params.repoName ? params.repoName : ''

      history.push(
         `/?userName=${u}&repoName=${r}&page=${p}&state=${data}&direction=${d}`,
      )
   }

   const onSelectDirection = (data) => {
      const params = getQueryParams()
      const p = params.page ? +params.page : 1
      const f = params.state ? params.state : 'all'
      const u = params.userName ? params.userName : ''
      const r = params.repoName ? params.repoName : ''

      history.push(
         `/?userName=${u}&repoName=${r}&page=${p}&state=${f}&direction=${data}`,
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
