import Card from '../Card/Card';
import { connect, useDispatch } from 'react-redux';
import { filterCards, orderCards } from '../../redux/actions';
import { useState } from 'react';
import './favorites.css';

const Favorites = ({ myFavorites }) => {
  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-vars
  const [aux, setAux] = useState(false);

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
    setAux(true);
  };

  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };

  return (
    <div>
      <select onChange={handleOrder}>
        <option value='A'>A-Z</option>
        <option value='D'>Z-A</option>
      </select>
      <select onChange={handleFilter}>
        <option value='Male'>Male</option>
        <option value='Female'>Female</option>
        <option value='Genderless'>Genderless</option>
        <option value='unknown'>unknown</option>
        <option value='allCharacters'>All Characters</option>
      </select>
      <div className='fav-container'>
        {myFavorites?.map((fav) => {
          return <Card key={fav.id} id={fav.id} name={fav.name} species={fav.species} gender={fav.gender} image={fav.image} onClose={fav.onClose} />;
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);
