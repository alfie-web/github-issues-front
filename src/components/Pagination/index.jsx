import { memo } from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'

import './Pagination.sass'

const Pagination = ({
   currentPage,
   totalPages,
   offsetLeft,
   offsetRight,
   onPageSelect,
   className,
}) => {
   return (
      <ul className={clsx('Pagination', className)}>
         {currentPage !== 1 && currentPage > 1 + offsetLeft && (
            <li
               className={clsx('Pagination__item', {
                  '--active': currentPage === 1,
               })}
               onClick={() => onPageSelect(1)}
            >
               {1}
            </li>
         )}

         {currentPage > 1 + (offsetLeft + 1) && <span className="Pagination__delimiter">...</span>}

         {totalPages &&
            Array.from(Array(totalPages).keys())
               .filter(
                  (p) => p + 1 >= currentPage - offsetLeft && p + 1 <= currentPage + offsetRight,
               )
               .map((p) => {
                  const page = p + 1
                  return (
                     <li
                        key={page}
                        className={clsx('Pagination__item', {
                           '--active': page === currentPage,
                        })}
                        onClick={() => onPageSelect(page)}
                     >
                        {page}
                     </li>
                  )
               })}

         {currentPage < totalPages - (offsetRight + 1) && <span className="Pagination__delimiter">...</span>}

         {currentPage !== totalPages && currentPage < totalPages - offsetRight && (
            <li
               className={clsx('Pagination__item', {
                  '--active': totalPages === currentPage,
               })}
               onClick={() => onPageSelect(totalPages)}
            >
               {totalPages}
            </li>
         )}
      </ul>
   )
}

Pagination.defaultProps = {
   currentPage: 1,
   offsetLeft: 1,
   offsetRight: 3,
   onPageSelect: () => {},
   className: null,
}

Pagination.propTypes = {
   currentPage: PropTypes.number,
   totalPages: PropTypes.number.isRequired,
   offsetLeft: PropTypes.number,
   offsetRight: PropTypes.number,
   onPageSelect: PropTypes.func,
   className: PropTypes.string || PropTypes.null,
}

export default memo(Pagination)
