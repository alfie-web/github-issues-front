import clsx from 'clsx'
import PropTypes from 'prop-types'

import './Label.sass'

function getContrastYIQ(hexcolor) {
   const parsed = hexcolor.replace('#', '')
   const r = parseInt(parsed.substr(0, 2), 16)
   const g = parseInt(parsed.substr(2, 2), 16)
   const b = parseInt(parsed.substr(4, 2), 16)
   const yiq = (r * 299 + g * 587 + b * 114) / 1000
   return yiq >= 128 ? 'black' : 'white'
}

const Label = ({
   id,
   color,
   name,
   className,
}) => {
   return (
      <div
         title={id}
         className={clsx('Label', className)}
         style={{ backgroundColor: `#${color}` }}
      >
         <span style={{ color: getContrastYIQ(color) }}>{name}</span>
      </div>
   )
}

Label.defaultProps = {
   id: '',
   className: '',
}
export const labelTypes = {
   id: PropTypes.number,
   name: PropTypes.string.isRequired,
   color: PropTypes.string.isRequired,
   className: PropTypes.string,
}

Label.propTypes = labelTypes

export default Label
