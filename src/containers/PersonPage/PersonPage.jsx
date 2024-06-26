import PropTypes from "prop-types";
import React, { useState, useEffect, Suspense } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import PersonInfo from "@components/PersonPage/PersonInfo";
import PersonPhoto from "@components/PersonPage/PersonPhoto";
import PersonLinkBack from "@components/PersonPage/PersonLinkBack";

import { getApiResource } from "@utils/network";
import { getPeopleImage } from "@services/getPeopleData";
import { API_PERSON } from "@constants/api";
import { withErrorApi } from "@hoc-helpers/withErrorApi";

import styles from "./PersonPage.module.css";

const PersonPage = ({ setErrorApi }) => {
  const { id } = useParams();
  const [personId, setPersonId] = useState(null);
  const [personInfo, setPersonInfo] = useState(null);
  const [personName, setPersonName] = useState(null);
  const [personPhoto, setPersonPhoto] = useState(null);
  const [personFavorite, setPersonFavorite] = useState(false);

  const storeDate = useSelector(state => state.favoriteReducer);

  useEffect(() => {
    (async () => {
      setPersonId(id);
      const res = await getApiResource(`${API_PERSON}/ ${id}/`);
      //console.log(`${API_PERSON}/ ${id}/`,res);

      storeDate[id]
        ? setPersonFavorite(true)
        : setPersonFavorite(false);

      if (res) {
        setPersonInfo([
          {
            title: "Height",
            data: res.height,
          },
          {
            title: "Mass",
            data: res.mass,
          },
          {
            title: "Eye color",
            data: res.eye_color,
          },
          {
            title: "Skin color",
            data: res.skin_color,
          },
        ]);
        setPersonName(res.name);
        setPersonPhoto(getPeopleImage(id));
        setErrorApi(false);
      } else {
        setErrorApi(true);
      }
    })();
  }, []);

  return (
    <>
      <div className={styles.wrapper_main}>
        <PersonLinkBack />
        <div className={styles.wrapper}>
          <span className={styles.person__name}>{personName}</span>

          <div className={styles.container}>
            <PersonPhoto
              personId={personId}
              personPhoto={personPhoto}
              personName={personName}
              setPersonFavorite={setPersonFavorite}
              personFavorite={ personFavorite} />

            {personInfo && <PersonInfo personInfo={personInfo} />}
          </div>
        </div>
      </div>
    </>
  );
};

PersonPage.propTypes = {
  //text: PropTypes.string
  setErrorApi: PropTypes.func,
};

export default withErrorApi(PersonPage);
