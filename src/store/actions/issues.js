import issuesAPI from '../../api/issues'
import { SET_ISSUES, SET_PAGE, SET_IS_FETCHING } from '../types/issues'

export const setIssues = (payload) => ({
   type: SET_ISSUES,
   payload,
})

export const setPage = (payload) => ({
   type: SET_PAGE,
   payload,
})

export const setIsFetching = (payload) => ({
   type: SET_IS_FETCHING,
   payload,
})

export const fetchIssues = () => async (dispatch, getState) => {
   const { issues: { page } } = getState()

   dispatch(setIsFetching(true))

   try {
      const { data } = await issuesAPI.getAll({ page })

      dispatch(
         setIssues({
            issues: data.issues,
            total_issues_count: data.total_issues_count,
         }),
      )
   } catch (error) {
      console.error(error)
   } finally {
      dispatch(setIsFetching(false))
   }
}
