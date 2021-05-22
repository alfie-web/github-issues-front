import React from 'react'
import PropTypes from 'prop-types'

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
         <div className="Issues__item-avatar">{user.avatar_url}</div>

         <div className="Issues__item-info">
            <div className="Issues__item-labels">
               {labels.length && labels.map((l) => (
                  <span key={l.id}>{l.name}</span>
               ))}
            </div>

            <span>
               {state}
               {createdAt}
            </span>

            <h3 className="Issues__item-title">
               {title}
               {number}
            </h3>
         </div>
      </div>
   )
}

IssuesItem.propTypes = {
   title: PropTypes.string.isRequired,
   number: PropTypes.number.isRequired,
   user: PropTypes.shape({
      avatar_url: PropTypes.string,
      login: PropTypes.string,
   }).isRequired,
   labels: PropTypes.arrayOf(
      PropTypes.shape({
         id: PropTypes.number,
         name: PropTypes.string,
         color: PropTypes.string,
      }),
   ).isRequired,
   state: PropTypes.string.isRequired,
   createdAt: PropTypes.string.isRequired,
}

export default IssuesItem
