import { createAction } from 'redux-actions'

export const selectCategory = createAction('SELECT_CATEGORY')
export const resetFilter = createAction('RESET_FILTER')

export default { selectCategory, resetFilter }
