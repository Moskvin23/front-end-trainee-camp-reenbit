import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import DetailsPage from './pages/DetailsPage/DetailsPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import styles from './App.module.scss';
import Login from './pages/LoginPage/Login';
import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <div className={styles.wrapper}>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <MainPage />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/:id"
          element={
            <PrivateRoute>
              <DetailsPage />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
