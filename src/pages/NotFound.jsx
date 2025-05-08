import { Link } from 'react-router-dom';
import { FaHome, FaExclamationTriangle } from 'react-icons/fa';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found-page">
      <div className="container">
        <div className="not-found-content">
          <div className="not-found-icon">
            <FaExclamationTriangle />
          </div>
          <h1>404</h1>
          <h2>Pagina Non Trovata</h2>
          <p>
            Ops! La pagina che stai cercando non esiste o è stata spostata.
          </p>
          <Link to="/" className="btn btn-primary">
            <FaHome className="home-icon" /> Torna alla Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
