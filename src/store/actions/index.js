import { ADD_PERSON_TO_FAVORITE, REMOVE_PERSON_FROM_FAVORITE } from '../constants.js'

export const setPersonToFavorite = person => {
    console.log(person);
    return  {
        type: ADD_PERSON_TO_FAVORITE,
        payload: person
    }
    
}

export const removePersonFromFavorite = () => ({
    type: REMOVE_PERSON_FROM_FAVORITE,
    payload: ''
})