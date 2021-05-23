import { memo } from 'react'

import IssuesItemTypes from './types'
import Avatar from '../../../../components/Avatar'
import IssueLabels from './components/Labels'
import IssueInfo from './components/Info'
import IssueTitle from './components/Title'

const IssuesItem = ({
   title,
   number,
   user,
   labels,
   state,
   createdAt,
}) => {
   return (
      <div className="Issues__item">
         <Avatar
            url={user.avatar_url}
            userName={user.login}
            className="Issues__item-avatar"
         />

         <div className="Issues__item-content">
            <div className="Issues__item-content-top">
               <IssueLabels labels={labels} />

               <IssueInfo
                  state={state}
                  createdAt={createdAt}
               />
            </div>

            <IssueTitle
               number={number}
               title={title}
            />
         </div>
      </div>
   )
}

IssuesItem.defaultProps = {
   labels: [],
}

IssuesItem.propTypes = {
   title: IssuesItemTypes.title.isRequired,
   number: IssuesItemTypes.number.isRequired,
   user: IssuesItemTypes.user.isRequired,
   labels: IssuesItemTypes.labels,
   state: IssuesItemTypes.state.isRequired,
   createdAt: IssuesItemTypes.createdAt.isRequired,
}

export default memo(IssuesItem)
