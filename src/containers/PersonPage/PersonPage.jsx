import PropTypes from "prop-types";
import React, { useState, useEffect, Suspense } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import PersonInfo from "@components/PersonPage/PersonInfo";
import PersonPhoto from "@components/PersonPage/PersonPhoto";
import { getApiResource } from "@utils/network";
import { getPeopleImage } from "@services/getPeopleData";
import { API_PERSON } from "@constants/api";
import { withErrorApi } from "@hoc-helpers/withErrorApi";

import styles from "./PersonPage.module.css";

const PersonPage = ({ setErrorApi }) => {
  const { id } = useParams();
  const [personInfo, setPersonInfo] = useState(null);
  const [personName, setPersonName] = useState(null);
  const [personPhoto, setPersonPhoto] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await getApiResource(`${API_PERSON}/ ${id}/`);
      //console.log(`${API_PERSON}/ ${id}/`,res);

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
      <div className={styles.wrapper}>
        <span className={styles.person__name}>{personName}</span>

        <div className={styles.container}>
          <PersonPhoto personPhoto={personPhoto} personName={personName} />

          {personInfo && <PersonInfo personInfo={personInfo} />}
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
