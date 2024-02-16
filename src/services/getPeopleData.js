import {
    HTTPS, SWAPI_ROOT, SWAPI_PEOPLE,
    GUIDE_IMG_EXTENSION, URL_IMG_PERSON, SWAPI_PARAM_PAGE
} from "../constants/api" 

export const getPeoplePageId = url => { 
    //SWAPI_PARAM_PAGE
    const pos = url.lastIndexOf(SWAPI_PARAM_PAGE);
    const id = url.slice(pos + SWAPI_PARAM_PAGE.length, url.length);
    console.log(id);
    return Number(id);
    //http://localhost:3000/people/?page=8
}
const getId = (url, category) => { 
    const id = url
        .replace((HTTPS + SWAPI_ROOT + category), '').replace(/\//g, '');
    
    return id;

}

export const getPeopleId = url => getId(url, SWAPI_PEOPLE);

export const getPeopleImage = id => `${URL_IMG_PERSON}/${id + GUIDE_IMG_EXTENSION}`;
