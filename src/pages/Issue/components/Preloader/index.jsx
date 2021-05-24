import { useSelector } from 'react-redux'

import Preloader from '../../../../components/Preloader'

const IssuePreloader = () => {
   const isFetching = useSelector((state) => state.issues.isFetching)

   return isFetching ? <Preloader /> : null
}

export default IssuePreloader
