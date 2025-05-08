import { Link } from 'react-router-dom';
import { FaClock, FaHeadphones, FaBook } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Trova il tuo spazio di pace interiore</h1>
            <p>
              MindTop ti aiuta a coltivare la calma mentale e la consapevolezza 
              attraverso sessioni di meditazione personalizzate.
            </p>
            <Link to="/meditazione" className="btn btn-primary">
              Inizia a Meditare
            </Link>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2 className="section-title">Perché Meditare?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <FaClock />
              </div>
              <h3>Riduci lo Stress</h3>
              <p>
                Studi scientifici dimostrano che la meditazione regolare riduce i livelli di 
                stress e migliora il benessere generale.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <FaHeadphones />
              </div>
              <h3>Migliora la Concentrazione</h3>
              <p>
                La pratica quotidiana della meditazione aumenta la capacità di concentrazione 
                e la presenza mentale.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <FaBook />
              </div>
              <h3>Sviluppa la Consapevolezza</h3>
              <p>
                Impara a vivere nel momento presente, sviluppando una maggiore consapevolezza 
                di te stesso e del mondo che ti circonda.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2>Pronto a iniziare il tuo viaggio?</h2>
            <p>
              Con il nostro timer personalizzabile e una varietà di suoni ambientali, 
              potrai creare l'esperienza di meditazione perfetta per te.
            </p>
            <Link to="/meditazione" className="btn btn-primary">
              Inizia Ora
            </Link>
          </div>
        </div>
      </section>

      <section className="how-to">
        <div className="container">
          <h2 className="section-title">Come Utilizzare MindTop</h2>
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Scegli la Durata</h3>
                <p>Imposta il timer per la durata che preferisci, da 5 a 60 minuti.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Seleziona un Suono</h3>
                <p>Scegli tra vari suoni ambientali o opta per il silenzio completo.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Inizia a Meditare</h3>
                <p>Premi il pulsante di avvio e lasciati guidare nel tuo viaggio di meditazione.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
