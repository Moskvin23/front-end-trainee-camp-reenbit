import styles from './Card.module.scss';
import { Link } from 'react-router-dom';

const Card = ({ currentData }) => {
  return (
    <>
      {currentData.map((character) => (
        <Link to={`/${character.id}`} className={styles.card}>
          <div className={styles.cardImage}>
            <img src={character.image} alt={character.name} />
          </div>
          <div className={styles.cardContent}>
            <h2 className={styles.cardTitle}>{character.name}</h2>
            <p className={styles.cardDescription}>{character.species}</p>
          </div>
        </Link>
      ))}
    </>
  );
};

export default Card;
