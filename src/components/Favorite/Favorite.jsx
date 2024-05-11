
import { Link } from 'react-router-dom';
import icon from './img/bookmark.svg';

import styles from './Favorite.module.css';


const Favorite = () => { 
  return (
      <div className={ styles.container}>

          <Link to='/favorites'>
              <span className={ styles.counter}>0</span>
          <img
              className={ styles.icon}
              src={icon}
                  alt="favorite bookmark" />
              </Link>
      </div>
  )
}


export default Favorite;