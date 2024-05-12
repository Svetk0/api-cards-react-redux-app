import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetStore } from '@store/actions';
import PeopleList from '@components/PeoplePage/PeopleList';

import styles from './FavoritePage.module.css';


const FavoritePage = () => { 
  const dispatch = useDispatch();
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
  
  const clearFavoriteList = () => { 
    setPeople({});
    localStorage.removeItem('storeFavorite');
    dispatch(resetStore());
    //localStorage.clear();
  }

    return (
      <>
        <h1 className="header__text"> Favorite Page </h1> 
        {people.length
          ? (<div>
            <PeopleList people={people} />
           
          </div>
            

          ) 
          : <h2 className={ styles.comment}>Nobody was choosed to favorite...</h2>
        }
        <button
          className={styles.buttonClear}
          disabled={people.length ? false : true}
          onClick={clearFavoriteList}>Clear List
        </button>
      
      </>
  )
}



export default FavoritePage;