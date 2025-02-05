import { combineReducers, configureStore } from '@reduxjs/toolkit';
import * as cat from './Reducers/CatReducers'

const rootReducer = combineReducers({
    // category reducer
    categoriesList: cat.getAllCategoriesReducer,

});

export const store = configureStore({
    reducer: rootReducer,    
})





