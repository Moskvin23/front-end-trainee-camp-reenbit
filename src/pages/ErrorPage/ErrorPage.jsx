import styles from './ErrorPage.module.scss';
import arrowBack from '../../assets/icons/arrowBack.svg';

const ErrorPage = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <section className={styles.errorSection}>
          <h1 className={styles.errorTitle}>404</h1>
          <h1 className={styles.errorText}>We couldn't find the page you're looking for.</h1>
          <a href="/"></a>
        </section>
      </div>
      <div className={styles.containerForButtonBack}>
        <a href="/" className={styles.backToMainPageButton}>
          <img src={arrowBack} alt="arrow back" className={styles.arrowBack} />
          GO TO THE MAIN PAGE
        </a>
      </div>
    </>
  );
};

export default ErrorPage;
