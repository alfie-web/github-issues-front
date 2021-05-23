import PropTypes from 'prop-types'

const IssuesItemTypes = {
   title: PropTypes.string,
   number: PropTypes.number,
   user: PropTypes.shape({
      avatar_url: PropTypes.string,
      login: PropTypes.string,
   }),
   labels: PropTypes.arrayOf(
      PropTypes.shape({
         id: PropTypes.number,
         name: PropTypes.string,
         color: PropTypes.string,
      }),
   ),
   state: PropTypes.string,
   createdAt: PropTypes.string,
}

export default IssuesItemTypes
