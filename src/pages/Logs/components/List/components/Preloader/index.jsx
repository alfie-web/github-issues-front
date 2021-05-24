import { memo } from 'react'
import { useSelector } from 'react-redux'

import Preloader from '../../../../../../components/Preloader'

const LogsPreloader = () => {
   // console.log('RENDERS')
   const isFetching = useSelector((state) => state.logs.isFetching)

   return (
      isFetching && (
         <div className="Issues__preloader">
            <Preloader />
         </div>
      )
   )
}

export default memo(LogsPreloader)
