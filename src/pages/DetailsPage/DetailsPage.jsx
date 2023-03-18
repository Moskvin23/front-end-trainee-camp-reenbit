import React, { useEffect, useState } from 'react';
import styles from './DetailsPage.module.scss';
import arrowBack from '../../assets/icons/arrowBack.svg';
import { useParams } from 'react-router-dom';
import { useAppContext } from '../../context';
import Loading from '../../components/Loading/Loading';

const DetailsPage = () => {
  const { id } = useParams();
  const [fetchData, setFetchData] = useState(null);
  const { setIsLoading, isLoading } = useAppContext();

  const url = `https://rickandmortyapi.com/api/character/${id}`;
  useEffect(() => {
    setIsLoading(true);
    (async function () {
      let data = await fetch(url).then((res) => res.json());
      setFetchData(data);
      setIsLoading(false);
    })();
  }, [url]);

  if (isLoading || fetchData === null) {
    return (
      <div className={styles.LoadingForDetailsPage}>
        <Loading />
      </div>
    );
  }
  let { name, image, origin, gender, status, type, species } = fetchData;

  return (
    <>
      <div className={styles.containerForButtonBack}>
        <a href="/" className={styles.backToMainPageButton}>
          <img src={arrowBack} alt="arrow back" className={styles.arrowBack} />
          GO BACK
        </a>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <section className={styles.topOfDetailsPage}>
            <img src={image} alt="profilePhoto" className={styles.photoProfile} />
            <h1 className={styles.name}>{name}</h1>
            <p className={styles.information}>Informations</p>
          </section>
          <section className={styles.description}>
            <ul>
              <li className={styles.titleOfDescription}>
                Gender
                <li className={styles.subsectionOfDescription}>{gender}</li>
                <div className={styles.shadow}></div>
              </li>
              <li className={styles.titleOfDescription}>
                Status
                <li className={styles.subsectionOfDescription}>{status}</li>
                <div className={styles.shadow}></div>
              </li>
              <li className={styles.titleOfDescription}>
                Specie
                <li className={styles.subsectionOfDescription}>{species}</li>
                <div className={styles.shadow}></div>
              </li>
              <li className={styles.titleOfDescription}>
                Origin
                <li className={styles.subsectionOfDescription}>{origin?.name}</li>
                <div className={styles.shadow}></div>
              </li>
              <li className={styles.titleOfDescription}>
                Type
                <li className={styles.subsectionOfDescription}>{type ? type : 'Unknown'}</li>
                <div className={styles.shadow}></div>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </>
  );
};

export default DetailsPage;
