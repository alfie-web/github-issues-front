import { memo } from 'react'
import PropTypes from 'prop-types'

import Avatar from '../../../../components/Avatar'

const IssueAssignees = ({ assignees }) => {
   return assignees.length ? (
      <div className="Issue__assignees">
         <h2>Assignees:</h2>

         <div className="Issue__assignees-avatars">
            {assignees.map((a) => (
               <Avatar key={a.id} url={a.avatar_url} userName={a.login} />
            ))}
         </div>
      </div>
   ) : null
}

IssueAssignees.defaultProps = {
   assignees: null,
}

IssueAssignees.propTypes = {
   assignees: PropTypes.arrayOf(
      PropTypes.shape({
         id: PropTypes.number,
         avatar_url: PropTypes.string,
         login: PropTypes.string,
      }),
   ),
}

export default memo(IssueAssignees)
