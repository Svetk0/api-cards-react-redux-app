import { useState, useEffect } from "react";
import PropTypes from 'prop-types';

import { withErrorApi } from "@hoc-helpers/withErrorApi";
import PeopleList from "@components/PeoplePage/PeopleList";
import PeopleNavigation from "@components/PeoplePage/PeopleNavigation";
import { getApiResource } from "@utils/network";
import { getPeopleId, getPeopleImage, getPeoplePageId } from "@services/getPeopleData";
import { API_PEOPLE, SWAPI_PEOPLE } from "@constants/api";
import { useQueryParams } from "@hooks/useQueryParams";


import styles from "./PeoplePage.module.css";



const PeoplePage = ({ setErrorApi}) => {
  const [people, setPeople] = useState(null);
    const [prevPage, setPrevPage] = useState(null);
    const [nextPage, setNextPage] = useState(null);
    const [counterPage, setCounterPage] = useState(1);
  // const arr = useState(null);
  // const people = arr[0];
  // const setPeople = arr[1];

    const query = useQueryParams();
    const queryPage = query.get('page');
    console.log('query: ', queryPage);
    
  //почему возвращает дублирование запроса?
  const getResource = async (url) => {
    const res = await getApiResource(url);
    console.log('res: ', res);
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
        setPrevPage(res.previous);
        setNextPage(res.next);
        setCounterPage(getPeoplePageId(url));
      setErrorApi(false);
    } else {
      setErrorApi(true);
    }
  };

  useEffect(() => {
      getResource(API_PEOPLE+queryPage);
      
  }, [queryPage]);

  return (
    <>
          <PeopleNavigation
              getResource={getResource}
              prevPage={prevPage}
              nextPage={nextPage}
              counterPage={ counterPage}
          />
      {people && <PeopleList people={people} />}
    </>
  );
};
PeoplePage.propTypes = {
    setErrorApi: PropTypes.func
}
export default withErrorApi(PeoplePage);


