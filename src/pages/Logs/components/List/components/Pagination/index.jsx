import { memo } from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'

import Pagination from '../../../../../../components/Pagination'

const LogsPagination = ({ onPageSelect }) => {
   // console.log('RENDERS')
   const { isFetching, totalLogsCount, page } = useSelector((state) => state.logs)

   return !isFetching && (
      <Pagination
         className="Issues__pagination"
         currentPage={+page}
         totalPages={Math.ceil(totalLogsCount / 30)}
         onPageSelect={onPageSelect}
      />
   )
}

LogsPagination.propTypes = {
   onPageSelect: PropTypes.func.isRequired,
}

export default memo(LogsPagination)
