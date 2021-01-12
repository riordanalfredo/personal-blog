import { createAction } from 'redux-actions'

const selectCategory = createAction('SELECT_CATEGORY')
const deselectCategory = createAction('DESELECT_CATEGORY')
const selectAllCategories = createAction('SELECT_ALL')

export default { selectCategory, deselectCategory, selectAllCategories }
