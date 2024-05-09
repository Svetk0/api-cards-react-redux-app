import { useSelector } from 'react-redux';
import styles from './FavoritePage.module.css';

const FavoritePage = () => { 
    const storeDate = useSelector(state => state.favoriteReducer);
    console.log('storeDate', storeDate);
    return (
      <>
         <h1> Favorite Page </h1> 
      </>
  )
}



export default FavoritePage;