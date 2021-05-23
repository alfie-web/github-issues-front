import { Link } from 'react-router-dom'

import IssuesItemTypes from '../types'

const IssueTitle = ({ number, title }) => {
   return (
      <h2 className="Issues__item-title">
         <Link to={`/${number}`}>
            {title}
            <span>{number}</span>
         </Link>
      </h2>
   )
}

IssueTitle.propTypes = {
   number: IssuesItemTypes.number.isRequired,
   title: IssuesItemTypes.title.isRequired,
}

export default IssueTitle
