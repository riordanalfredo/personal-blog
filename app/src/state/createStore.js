import { createStore as reduxCreateStore } from 'redux'
import rootReducer from './reducers'

const initialState = { count: 0 }

const createStore = () => reduxCreateStore(rootReducer, initialState)
export default createStore
