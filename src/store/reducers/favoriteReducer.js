import { omit } from 'lodash';
import { getLocalStorage } from '@utils/localStorage.js';
import { ADD_PERSON_TO_FAVORITE, REMOVE_PERSON_FROM_FAVORITE,  CLEAR_FAVORITE_LIST } from '@store/constants.js';

const initialState = getLocalStorage('storeFavorite');

const favoriteReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PERSON_TO_FAVORITE:
            return {
                ...state,
                ...action.payload

            }
        case REMOVE_PERSON_FROM_FAVORITE:
            return omit(state, [action.payload])

        case CLEAR_FAVORITE_LIST:
            return { ...{} }


        default:
            return state;
    }
}

export default favoriteReducer;