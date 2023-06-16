import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers'; // Importa tu rootReducer aquí

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;