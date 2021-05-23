import {
   useState,
   useRef,
   useEffect,
   memo,
} from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'

import './Select.sass'

import useOutsideClick from '../../helpers/useOutsideClick'

const Select = ({
   className,
   optionsData,
   onSelect,
   defaultValue,
   name,
}) => {
   const [value, setValue] = useState(optionsData[0].value || '')
   const [isDropped, setIsDropped] = useState(false)
   const selectRef = useRef()

   useEffect(() => {
      if (defaultValue) setValue(defaultValue)
   }, [defaultValue])

   useOutsideClick(selectRef, () => setIsDropped(false), '.Select__dropdown')

   const handleSelect = (val) => {
      setValue(val)
      setIsDropped(false)
      onSelect(val, name)
   }

   const getTitle = () => {
      const title = optionsData.find((o) => String(o.value) === String(value))
      return title ? title.title : optionsData[0].title
   }

   return (
      <div className={clsx('Select', className)}>
         <div
            ref={selectRef}
            className={clsx('Select__current', {
               'Select__current--active': isDropped,
            })}
            onClick={() => setIsDropped(!isDropped)}
         >
            <span>{getTitle()}</span>
         </div>

         {isDropped && (
            <div className="Select__dropdown fadeInUp">
               {optionsData.map((option) => (
                  <div
                     key={option.value}
                     className={clsx('Select__option', {
                        'Select__option--selected': value === option.value,
                        'Select__option--disabled': option.disabled,
                     })}
                     onClick={() => handleSelect(option.value)}
                  >
                     {option.title}
                  </div>
               ))}
            </div>
         )}
      </div>
   )
}

Select.defaultProps = {
   className: '',
   onSelect: () => {},
   defaultValue: null,
   name: '',
   optionsData: [{ title: '', value: '' }],
}

Select.propTypes = {
   className: PropTypes.string,
   onSelect: PropTypes.func,
   defaultValue: PropTypes.string,
   name: PropTypes.string,
   optionsData: PropTypes.array,
}

export default memo(Select)
