import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import AvatarGradient from './components/Gradient'
import './Avatar.sass'

const Avatar = ({
   url,
   userName,
   min,
   className,
}) => {
   return (
      <div
         className={clsx('Avatar', className, { 'Avatar-min': min })}
         title={userName}
      >
         {url ? (
            <img src={url} alt={`Avatar: ${userName}`} />
         ) : (
            <AvatarGradient userName={userName} />
         )}
      </div>
   )
}

Avatar.defaultProps = {
   url: '',
   min: false,
   className: null,
}

Avatar.propTypes = {
   url: PropTypes.string,
   userName: PropTypes.string.isRequired,
   min: PropTypes.bool,
   className: PropTypes.string,
}

export default Avatar
