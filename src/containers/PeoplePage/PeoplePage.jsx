import { useState, useEffect } from "react";
import { withErrorApi } from "../../hoc-helpers/withErrorApi";
import { getApiResource } from "../../utils/network";
import { API_PEOPLE, SWAPI_PEOPLE } from "../../constants/api";
import { getPeopleId, getPeopleImage } from "../../services/getPeopleData";
import styles from "./PeoplePage.module.css";
import PeopleList from "../../components/PeoplePage/PeopleList";
const PeoplePage = ({ setErrorApi}) => {
  const [people, setPeople] = useState(null);

  // const arr = useState(null);
  // const people = arr[0];
  // const setPeople = arr[1];

  //почему возвращает дублирование запроса?
  const getResource = async (url) => {
    const res = await getApiResource(url);

    if (res) {
      const peopleList = res.results.map((elem) => {
        console.log(elem.name, elem.url);
        const id = getPeopleId(elem.url, SWAPI_PEOPLE);
        const img = getPeopleImage(id);
        //console.log('img: ', img, id);
        // console.log('id: ', id);

        return {
          id: id,
          name: elem.name,
          img: img,
          url: elem.url,
        };
      });
      console.log("peopleList: ", peopleList);
      setPeople(peopleList);
      setErrorApi(false);
    } else {
      setErrorApi(true);
    }
  };

  useEffect(() => {
    getResource(API_PEOPLE);
  }, []);

  return (
    <>
      <h1>Navigation</h1>
      {people && <PeopleList people={people} />}
    </>
  );
};

export default withErrorApi(PeoplePage);
