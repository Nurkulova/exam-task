import React, { useState, useEffect } from 'react'
import styled from 'styled-components';

const CharacterList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const CharacterCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  width: 200px;
  text-align: center;
  background-color:#c1c1bbad;
`;

const CharacterImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 10px auto;
  display: block;
`;

function Characters() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    async function fetchCharacters() {
      try {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        const data = await response.json();
        setCharacters(data.results);
      } catch (error) {
        console.error('Error fetching characters:', error);
      }
    }

    fetchCharacters();
  }, []);

  return (
    <CharacterList>
      {characters.map(character => (
        <CharacterCard key={character.id}>
          <CharacterImage src={character.image} alt={character.name} />
          <p>name:{character.name}</p>
          <p>gender: {character.gender}</p>
          <p>species: {character.species}</p>
        </CharacterCard>
      ))}
    </CharacterList>
  );
}
export default Characters