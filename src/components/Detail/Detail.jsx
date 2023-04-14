import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
const API_KEY = '4ee8ce0e6b80.5e7e85b0053fef8f0c31';

const Detail = () => {
  const { id } = useParams();

  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`${URL_BASE}/${id}?key=${API_KEY}`)
      .then((response) => response.data)
      .then((data) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert('No hay personajes con ese ID');
        }
      });
    return setCharacter({});
  }, [id]);

  return (
    <div>
      <h1>{character?.name}</h1>
      <p>Status: {character?.status}</p>
      <p>Species: {character?.species}</p>
      <p>Gender: {character?.gender}</p>
      <h2>Origin: {character?.origin?.name}</h2>
      <img src={character?.image} alt={character?.name} />
    </div>
  );
};

export default Detail;
