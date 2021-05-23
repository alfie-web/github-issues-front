import { memo } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { setSortField, setSortDirection } from '../../../../store/actions/issues'
import Select from '../../../../components/Select'

const IssuesSort = () => {
   const dispatch = useDispatch()
   const sortField = useSelector((state) => state.issues.sortField)
   const sortDirection = useSelector((state) => state.issues.sortDirection)

   const onSelectField = (data) => {
      dispatch(setSortField(data))
   }

   const onSelectDirection = (data) => {
      dispatch(setSortDirection(data))
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
