import { useLocation } from 'react-router-dom';
import img from './img/notfound.png';
import styles from './NotFoundPage.module.css';
const NotFoundPage = () => { 
    let location = useLocation();
  return (
      <div className={ styles.wrapper}>
          <img className={ styles.img} src={img} alt="404" />
          <p className={styles.text } >No match for <u>{location.pathname}</u></p>
         
      </div>
  )
}


export default NotFoundPage;