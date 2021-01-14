import { createAction } from 'redux-actions'

export const selectCategory = createAction('SELECT_CATEGORY')
export const selectAllCategories = createAction('SELECT_ALL')

export default { selectCategory, selectAllCategories }
