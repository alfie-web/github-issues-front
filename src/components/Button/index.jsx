import React from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'

import './Button.sass'

const Button = ({
   className,
   text = '',
   onClick = () => {},
   type = 'button',
   variant,
   icon,
   active = false,
   disabled,
   title = '',
}) => {
   return (
      <button
         className={clsx(
            'Button',
            {
               'Button--gray': variant && variant === 'gray',
               'Button--black': variant && variant === 'black',
               'Button--icon': icon,
               'Button--active': active,
               'Button--disabled': disabled,
            },
            className,
         )}
         onClick={onClick}
         type={type}
         disabled={disabled}
         title={title}
      >
         {icon ? <div className="Button__icon">{icon}</div> : text}
      </button>
   )
}

Button.defaultProps = {
   className: null,
   text: '',
   onClick: () => {},
   type: 'button',
   variant: null,
   icon: null,
   active: false,
   disabled: false,
   title: '',
}

Button.propTypes = {
   className: PropTypes.string,
   text: PropTypes.string,
   onClick: PropTypes.func,
   type: PropTypes.string,
   variant: PropTypes.string,
   icon: PropTypes.element,
   active: PropTypes.bool,
   disabled: PropTypes.bool,
   title: PropTypes.string,
}

export default Button
