import clsx from 'clsx'
import PropTypes from 'prop-types'

import './Input.sass'

const Input = ({
   idAttr,
   value,
   onChange,
   onFocus,
   onBlur,
   required,
   className,
   type,
   name,
   placeholder,
   icon,
   title,
   autoFocus,
}) => {
   return (
      <div className={clsx('Input', className)} title={title}>
         <input
            id={idAttr}
            type={type}
            className="Input__element"
            autoComplete="off"
            required={required}
            value={value}
            name={name}
            placeholder={placeholder}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            autoFocus={autoFocus}
         />

         {icon && <div className="Input__icon">{icon}</div>}
      </div>
   )
}

Input.defaultProps = {
   idAttr: null,
   onFocus: () => {},
   onBlur: () => {},
   required: false,
   className: null,
   type: 'text',
   name: '',
   placeholder: '',
   icon: null,
   title: '',
   autoFocus: false,
}

Input.propTypes = {
   idAttr: PropTypes.string,
   value: PropTypes.string.isRequired,
   onChange: PropTypes.func.isRequired,
   onFocus: PropTypes.func,
   onBlur: PropTypes.func,
   required: PropTypes.bool,
   className: PropTypes.string,
   type: PropTypes.string,
   name: PropTypes.string,
   placeholder: PropTypes.string,
   icon: PropTypes.element,
   title: PropTypes.string,
   autoFocus: PropTypes.bool,
}

export default Input
