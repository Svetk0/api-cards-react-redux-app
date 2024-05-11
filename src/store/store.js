import { createStore } from "redux";
import rootReducer from './reducers'

import { setLocalStorage } from '@utils/localStorage.js';

const store = createStore(rootReducer);

store.subscribe(() => { 
   // console.log(store.getState().favoriteReducer);
    setLocalStorage('storeFavorite', store.getState().favoriteReducer);

})


export default store;
