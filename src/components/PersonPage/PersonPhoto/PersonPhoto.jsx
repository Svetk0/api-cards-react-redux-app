import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import { setPersonToFavorite, removePersonFromFavorite } from "@store/actions";

import styles from "./PersonPhoto.module.css";

const PersonPhoto = ({
  personId,
  personPhoto,
  personName,
  setPersonFavorite,
  personFavorite,
}) => {
  const dispatch = useDispatch();

  const set = () => {
    dispatch(
      setPersonToFavorite({
        [personId]: {
          name: personName,
          img: personPhoto,
        },
      })
    );
      setPersonFavorite(true);
  };
  
    const remove = () => {
        dispatch(removePersonFromFavorite(personId));
        setPersonFavorite(false);
  };

    
  return (
    <>
      <div className={styles.container}>
        <img className={styles.photo} src={personPhoto} alt={personName} />
          </div>
          {personFavorite
              ? <button onClick={remove}>remove from Fav</button>
              :   <button onClick={set}>add to Fav</button>
          }
   
     
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
