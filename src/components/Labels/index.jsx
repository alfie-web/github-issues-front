import PropTypes from 'prop-types'

import Label from '../Label'
import './Labels.sass'

const Labels = ({ labels }) => {
   return (
      <div className="Labels">
         {labels.length
            ? labels.map((l) => (
               <Label
                  key={l.id}
                  id={l.id}
                  color={l.color}
                  name={l.name}
                  className="Issues__item-label"
               />
              ))
            : null}
      </div>
   )
}

Labels.defaultProps = {
   labels: [],
}
Labels.propTypes = {
   labels: PropTypes.arrayOf(
      PropTypes.shape({
         id: PropTypes.number,
         name: PropTypes.string,
         color: PropTypes.string,
      }),
   ),
}

export default Labels
