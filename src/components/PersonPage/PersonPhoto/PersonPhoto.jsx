import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import { setPersonToFavorite, removePersonFromFavorite } from "@store/actions";

import styles from "./PersonPhoto.module.css";
import { useState, useEffect } from "react";

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
      </div>
          <button onClick={dispatchFavoritePeople}>{personFavorite ? 'remove' : 'add'}</button>
          
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
