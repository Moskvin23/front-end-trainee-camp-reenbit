import React, { useEffect, useState } from 'react';
import styles from './MainPage.module.scss';
import Logo from '../../assets/pictures/RickAndMorty.png';
import Card from '../../components/Card/Card';
import Search from '../../components/Search/Search';
import { useAppContext } from '../../context';
import Loading from '../../components/Loading/Loading';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import { useAuth0 } from '@auth0/auth0-react';
import LogOut from '../LoginPage/LogOut';
const MainPage = () => {
  const { isAuthenticated } = useAuth0();

  const { isLoading, searchName, setIsLoading, characters, setCharacters, setSearchName } =
    useAppContext();
  const [pageNumber, setPageNumber] = useState(0);
  const charactersPerPage = 8;
  const pageCount = Math.ceil(characters.length / charactersPerPage);
  useEffect(() => {
    const savedSearchTerm = localStorage.getItem('searchTerm');
    if (savedSearchTerm) {
      setSearchName(savedSearchTerm);
    }
  }, [setSearchName]);

  const handleSearch = (searchTerm) => {
    setCharacters([]);
    setIsLoading(true);
    localStorage.setItem('searchTerm', searchTerm);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `https://rickandmortyapi.com/api/character/?name=${searchName}`,
        );
        setCharacters(data.results);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };

    if (searchName) {
      fetchData();
    }
  }, [searchName, setIsLoading, setCharacters]);

  const filteredData = characters.sort((a, b) => a.name.localeCompare(b.name));

  const startIndex = pageNumber * charactersPerPage;
  const endIndex = startIndex + charactersPerPage;
  const currentData = filteredData.slice(startIndex, endIndex);

  return (
    isAuthenticated && (
      <>
        <LogOut />
        <div className={styles.wrapper}>
          <section>
            <img src={Logo} alt="logo" className={styles.img} />
          </section>
          <Search onSearch={handleSearch} />

          {isLoading ? (
            <Loading />
          ) : filteredData.length > 0 ? (
            <section className={styles.sectionWithCards}>
              {filteredData.map((item) => {
                return <Card key={item.id} currentData={currentData} />;
              })}
            </section>
          ) : (
            <h1 className={styles.informationIfHaveNotCards}>
              There are no items for your search term, please try to type something else
            </h1>
          )}
        </div>
      </>
    )
  );
};

export default MainPage;
