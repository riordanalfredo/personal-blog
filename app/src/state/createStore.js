import { createStore as reduxCreateStore } from 'redux'
import rootReducer from './reducers'

const initialState = {}

const createStore = () => reduxCreateStore(rootReducer, initialState)
export default createStore
