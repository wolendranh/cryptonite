import { createStore, applyMiddleware, GenericStoreEnhancer } from 'redux'
import rootReducer from './reducers'

// const enhancer = window['devToolsExtension'] ? window['devToolsExtension']()(createStore) : createStore;
declare var window:any;


const configureStore = createStore(
  rootReducer,
  window.devToolsExtension ? window.devToolsExtension() : undefined
)

export default configureStore
