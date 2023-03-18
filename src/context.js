import React, { useState, useContext, useEffect, createContext } from 'react';
import axios from 'axios';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [characters, setCharacters] = useState([]);
  const [searchName, setSearchName] = useState('');
  const url = `https://rickandmortyapi.com/api/character/?name=${searchName}`;
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(url);
      setCharacters(data.results);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [searchName]);

  return (
    <AppContext.Provider
      value={{ isLoading, searchName, setSearchName, characters, setCharacters, setIsLoading }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useAppContext };
