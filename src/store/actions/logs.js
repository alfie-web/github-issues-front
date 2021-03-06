import logsAPI from '../../api/logs'
import actionCreator from '../../helpers/actionCreator'
import { SET_LOGS, SET_PAGE, SET_IS_FETCHING } from '../types/logs'

export const setLogs = (payload) => actionCreator(SET_LOGS, payload)
export const setPage = (payload) => actionCreator(SET_PAGE, payload)
export const setIsFetching = (payload) => actionCreator(SET_IS_FETCHING, payload)

export const fetchLogs = (page = 1) => async (dispatch) => {
   // const { logs: { page } } = getState()

   dispatch(setIsFetching(true))
   dispatch(setPage(page))

   try {
      const { data } = await logsAPI.getAll(page)
      
      dispatch(setLogs(data.data))
   } catch (error) {
      window.flash('Что-то пошло не так', 'error')
   } finally {
      dispatch(setIsFetching(false))
   }
}
// export const fetchLogs = () => async (dispatch, getState) => {
//    const { logs: { page } } = getState()

//    dispatch(setIsFetching(true))
//    try {
//       const { data } = await logsAPI.getAll(page)
      
//       dispatch(setLogs(data.data))
//    } catch (error) {
//       window.flash('Что-то пошло не так', 'error')
//    } finally {
//       dispatch(setIsFetching(false))
//    }
// }
