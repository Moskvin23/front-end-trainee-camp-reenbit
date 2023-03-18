import React, { useState } from 'react';
import style from './Search.module.scss';
import searchIcon from '../../assets/icons/searchIcon.svg';
import { useAppContext } from '../../context';

const Search = ({ onSearch }) => {
  const { setSearchName } = useAppContext();

  const handleInputChange = (event) => {
    const { value } = event.target;
    setSearchName(value);
    onSearch(value);
  };

  return (
    <div className={style.container}>
      <form>
        <div className={style.formControl}>
          <img src={searchIcon} alt="searchIcon" />
          <input type="text" placeholder="Filter by name..." onChange={handleInputChange} />
        </div>
      </form>
    </div>
  );
};

export default Search;
