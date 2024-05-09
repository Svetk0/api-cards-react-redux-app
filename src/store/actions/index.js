import { ADD_PERSON_TO_FAVORITE, REMOVE_PERSON_FROM_FAVORITE } from '../constants.js'

export const setPersonToFavorite = () => ({
    type: ADD_PERSON_TO_FAVORITE,
    payload: ''
})

export const removePersonFromFavorite = () => ({
    type: REMOVE_PERSON_FROM_FAVORITE,
    payload: ''
})