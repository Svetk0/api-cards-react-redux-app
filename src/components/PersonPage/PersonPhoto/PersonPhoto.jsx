import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import { setPersonToFavorite, removePersonFromFavorite } from "@store/actions";

import iconFavorite from './img/favorite-fill.svg';
import iconUnSelect from './img/unselect-star.svg';

import styles from "./PersonPhoto.module.css";


const PersonPhoto = ({
  personId,
  personPhoto,
  personName,
  setPersonFavorite,
  personFavorite,
}) => {

    
  const dispatch = useDispatch();

  const dispatchFavoritePeople = () => {
    if (personFavorite) {
      dispatch(removePersonFromFavorite(personId));
        setPersonFavorite(false);
        

    } else {
        dispatch(
            setPersonToFavorite({
              [personId]: {
                name: personName,
                img: personPhoto,
              },
            })
          );
        setPersonFavorite(true);
      
   
    }
  };

  return (
    <>
      <div className={styles.container}>
              <img className={styles.photo} src={personPhoto} alt={personName} />
              
              <img src={personFavorite ? iconFavorite : iconUnSelect}
              onClick={dispatchFavoritePeople}
              className={ styles.favorite}
              alt="favorite_icon" />
          </div>
          
  

          {/* <button onClick={dispatchFavoritePeople}>{personFavorite ? 'remove' : 'add'}</button> */}
          
    </>
  );
};

PersonPhoto.propTypes = {
  personPhoto: PropTypes.string,
  personName: PropTypes.string,
  personId: PropTypes.string,
  personFavorite: PropTypes.bool,
  setPersonFavorite: PropTypes.func,
};

export default PersonPhoto;
