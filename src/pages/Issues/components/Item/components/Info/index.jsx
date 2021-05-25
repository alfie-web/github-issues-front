import dayjs from 'dayjs'
import clsx from 'clsx'

import IssuesItemTypes from '../../../../types'

const IssueInfo = ({ state, createdAt }) => {
   return (
      <div className="Issues__item-info">
         <span
            className={clsx(
               'Issues__item-state',
               state === 'open' && 'Issues__item-state--open',
            )}
         >
            {state}
         </span>
         <span className="Issues__item-date" title="Created at">
            {dayjs(createdAt).format('DD MMMM, YYYY')}
         </span>
      </div>
   )
}

IssueInfo.propTypes = {
   state: IssuesItemTypes.state.isRequired,
   createdAt: IssuesItemTypes.createdAt.isRequired,
}

export default IssueInfo
