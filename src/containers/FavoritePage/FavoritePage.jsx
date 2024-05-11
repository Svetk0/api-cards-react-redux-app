import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import PeopleList from '@components/PeoplePage/PeopleList';

import styles from './FavoritePage.module.css';


const FavoritePage = () => { 

  const [people, setPeople] = useState([]);

    const storeDate = useSelector(state => state.favoriteReducer);
  console.log('storeDate', storeDate);
  
  useEffect(() => {
    const arr = Object.entries(storeDate);

    if (arr.length) {
        const res = arr.map(item => {
            return {
                id: item[0],
                ...item[1]
            }
        })

      setPeople(res);
  
    }
}, []);

    return (
      <>
        <h1 className="header__text"> Favorite Page </h1> 
        {people.length
          ? <PeopleList people={people} />
          : <h2 className={ styles.comment}>Nobody was choosed to favorite...</h2>
        }
        
      </>
  )
}



export default FavoritePage;