const SWAPI_ROOT = 'https://swapi.dev/api/';
const SWAPI_PEOPLE = 'people';

export const getApiResource = async (url) => {
   
    
    try {
        const res = await fetch(url);
        console.log(res.ok);
        if (!res.ok) { 
            console.error('could not fetch. ', res.status);
            return false;
        }

        return await res.json();
    }

    catch (error) { 
        console.error('could not fetch. ', error.message);
        return false;

    }


    
}
(async () => {
    const body = await getApiResource(SWAPI_ROOT + SWAPI_PEOPLE);
    console.log(body);
})();
