import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import IssuesItemTypes from '../../../../types'

const IssueTitle = ({ number, title }) => {
   const repoData = useSelector((state) => state.issues.repoData)

   return repoData ? (
      <h3 className="Issues__item-title">
         <Link to={`/${repoData.userName}/${repoData.repoName}/${number}`}>
            {title}
            <span>{number}</span>
         </Link>
      </h3>
   ) : null
}

IssueTitle.propTypes = {
   number: IssuesItemTypes.number.isRequired,
   title: IssuesItemTypes.title.isRequired,
}

export default IssueTitle
