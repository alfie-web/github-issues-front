import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import IssuesItemTypes from '../types'

const IssueTitle = ({ number, title }) => {
   const repoData = useSelector((state) => state.issues.repoData)

   return repoData ? (
      <h2 className="Issues__item-title">
         <Link to={`/${number}/${repoData.userName}/${repoData.repoName}`}>
            {title}
            <span>{number}</span>
         </Link>
      </h2>
   ) : null
}

IssueTitle.propTypes = {
   number: IssuesItemTypes.number.isRequired,
   title: IssuesItemTypes.title.isRequired,
}

export default IssueTitle
