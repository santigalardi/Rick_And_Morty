import { useState } from 'react';

function SearchBar({ onSearch }) {
  const [id, setId] = useState('');

  const handleChange = (event) => {
    setId(event.target.value);
  };

  return (
    <div>
      <input type='search' onChange={handleChange} value={id} />
      <button onClick={() => onSearch(id)}>Agregar</button>
    </div>
  );
}

// Para pasarle a la funcion onSearch el argumento, debo pasarlo con un callback

export default SearchBar;
