import { ADD_PERSON_TO_FAVORITE, REMOVE_PERSON_FROM_FAVORITE, CLEAR_FAVORITE_LIST } from '../constants.js'

export const setPersonToFavorite = person => {
    console.log(person);
    return  {
        type: ADD_PERSON_TO_FAVORITE,
        payload: person
    }
    
}

export const removePersonFromFavorite = personId => ({
    type: REMOVE_PERSON_FROM_FAVORITE,
    payload: personId
})

export const resetStore = () => ({ type: CLEAR_FAVORITE_LIST });