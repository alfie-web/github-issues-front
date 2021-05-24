import PropTypes from 'prop-types'
import { labelTypes } from '../../components/Label'

const IssuesItemTypes = {
   title: PropTypes.string,
   number: PropTypes.number,
   user: PropTypes.shape({
      avatar_url: PropTypes.string,
      login: PropTypes.string,
   }),
   labels: PropTypes.arrayOf(
      PropTypes.shape(labelTypes),
   ),
   state: PropTypes.string,
   createdAt: PropTypes.string,
}

export default IssuesItemTypes
