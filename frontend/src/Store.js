import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { userLoginReducer, userRegisterReducer } from './Reducers/userReducer';
import { notesCreateReducer, notesReducer } from './Reducers/notesReducer';

const reducer = combineReducers({
    userLogin : userLoginReducer,
    userRegister : userRegisterReducer,
    noteList : notesReducer,
    noteCreate : notesCreateReducer,
});

const userInfoFromStorage = localStorage.getItem('userInfo')?JSON.parse(localStorage.getItem('userInfo')):null

const initialState = {
    userLogin : {userInfo: userInfoFromStorage},
}

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;