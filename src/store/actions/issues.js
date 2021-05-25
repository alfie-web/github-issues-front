import issuesAPI from '../../api/issues'
import actionCreator from '../../helpers/actionCreator'
import {
   SET_ISSUES,
   SET_CURRENT_ISSUE,
   SET_PAGE,
   SET_IS_FETCHING,
   SET_SORT_FIELD,
   SET_SORT_DIRECTION,
   SET_REPO_DATA,
} from '../types/issues'

const setIssues = (payload) => actionCreator(SET_ISSUES, payload)
const setIsFetching = (payload) => actionCreator(SET_IS_FETCHING, payload)
export const setCurrentIssue = (payload) => actionCreator(SET_CURRENT_ISSUE, payload)
export const setRepoData = (payload) => actionCreator(SET_REPO_DATA, payload)
export const setPage = (payload) => actionCreator(SET_PAGE, payload)
export const setSortField = (payload) => actionCreator(SET_SORT_FIELD, payload)
export const setSortDirection = (payload) => actionCreator(SET_SORT_DIRECTION, payload)

export const fetchIssues = (
   page = 1,
   sortDirection = 'desc',
   sortField = 'all',
   userName = '',
   repoName = '',
) => async (dispatch, getState) => {
   const {
      issues: {
         issues,
         page: curPage,
         sortDirection: curDirection,
         sortField: curField,
         repoData,
      },
   } = getState()

   // Чтобы при возврате на страницу Issues не грузить уже имеющиеся issues
   if ((
      page === curPage && 
      sortDirection === curDirection &&
      sortField === curField &&
      userName === repoData.userName &&
      repoName === repoData.repoName) && 
      issues.length
   ) return 

   if (!userName || !repoName) return

   dispatch(setIsFetching(true))

   // Обновляю компоненты Issues page (Pagination, Sort, SearchForm)
   dispatch(setPage(page))
   dispatch(setSortDirection(sortDirection))
   dispatch(setSortField(sortField))
   dispatch(setRepoData({ userName, repoName }))

   try {
      const { data } = await issuesAPI.getAll({
         page,
         sortField,
         sortDirection,
         userName,
         repoName,
      })

      dispatch(
         setIssues({
            issues: data.issues,
            totalIssuesCount: data.totalIssuesCount,
         }),
      )

   } catch (error) {
      window.flash('Что-то пошло не так. Попробуйте перезагрузить страницу!', 'error')

   } finally {
      dispatch(setIsFetching(false))
   }
}

export const fetchCurrentIssue = ({ userName, repoName, number }) => async (dispatch, getState) => {
   const { issues: { issues } } = getState()
   const finded = issues.find((i) => i.number === +number)

   if (finded) return dispatch(setCurrentIssue(finded))

   dispatch(setIsFetching(true))

   try {
      const { data } = await issuesAPI.getByNumber({ userName, repoName, number })
      dispatch(setCurrentIssue(data.data))

   } catch (error) {
      window.flash('Что-то пошло не так. Попробуйте перезагрузить страницу!', 'error')

   } finally {
      dispatch(setIsFetching(false))
   }
}
