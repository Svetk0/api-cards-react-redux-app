import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './PeopleNavigation.module.css';

const PeopleNavigation = ({ 
    getResource,
    prevPage,
    nextPage,
    counterPage
}) => { 
    const handleChangeNext= () => getResource(nextPage);
    const handleChangePrev= () => getResource(prevPage);

  return (
      <div>
          <Link
              className={styles.link}
              to={`/people/?page=${counterPage - 1}`}>
              <button
                  onClick={handleChangePrev}
                  disabled={ !prevPage}
                  className={styles.buttons}>Previous</button>
          </Link>
          <Link
              className={styles.link}
              to={`/people/?page=${counterPage + 1}`}>
              <button
                  onClick={handleChangeNext}
                  disabled={ !nextPage}
                  className={styles.buttons}>Next</button>
          </Link>
      </div>
  )
}

PeopleNavigation.propTypes = {
    getResource: PropTypes.func,
    prevPage: PropTypes.string,
    nextPage: PropTypes.string,
    counterPage: PropTypes.number,
}

export default PeopleNavigation;