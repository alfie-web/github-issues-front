import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

const LogsItem = ({
   url,
   userIP,
   method,
   status,
   time,
   action,
}) => {
   return (
      <div className="Logs__item">
         <div className="Logs__item-content">
            <div className="Logs__item-content-top">
               <div>
                  {method}
                  <span 
                     className={clsx(
                        'Logs__item-status', 
                        +status >= 200 && +status < 300 && 'green',
                        +status >= 300 && +status < 400 && 'blue',
                        +status >= 400 && 'red',
                     )}
                  >
                     {status}
                  </span>
                  <span className="Logs__item-action">{action}</span>
               </div>

               <div className="Logs__item-info">{time} ms</div>
            </div>

            <div className="Logs__item-content-bottom">
               <span className="Logs__item-ip"> User IP - {userIP}</span>
               <h2 className="Logs__item-title">{url}</h2>
            </div>
         </div>
      </div>
   )
}

LogsItem.propTypes = {
   url: PropTypes.string.isRequired,
   userIP: PropTypes.string.isRequired,
   method: PropTypes.string.isRequired,
   status: PropTypes.number.isRequired,
   time: PropTypes.string.isRequired,
   action: PropTypes.string.isRequired,
}

export default LogsItem
