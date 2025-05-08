import React from 'react';
import { Link } from 'react-router-dom';
// Importazione dello stile - le immagini verranno aggiunte in una fase successiva
import './About.css';

const About = () => {
  console.log('About component rendered');
  return (
    <div className="about-page">
      <div className="container">
        <div className="about-header">
          <h1>Chi Siamo</h1>
          <div className="divider"></div>
          <p className="about-intro">
            MindTop nasce dalla passione per la meditazione e dal desiderio di rendere questa pratica 
            accessibile a tutti, in qualsiasi momento della giornata.
          </p>
        </div>

        <div className="about-section">
          <div className="about-content">
            <h2>La Nostra Missione</h2>
            <p>
              Crediamo che la meditazione sia uno strumento potente per migliorare la qualità della vita 
              e per trovare pace in un mondo sempre più frenetico. La nostra missione è rendere la 
              meditazione accessibile a tutti, indipendentemente dall'esperienza o dal background.
            </p>
            <p>
              Con MindTop, vogliamo offrire uno strumento semplice ma efficace per aiutare le persone 
              a iniziare o continuare la loro pratica di meditazione, con la massima flessibilità.
            </p>
          </div>
          <div className="about-image mission-image">
            🧘‍♂️
          </div>
        </div>

        <div className="about-section reverse">
          <div className="about-content">
            <h2>Perché MindTop?</h2>
            <p>
              MindTop è stato progettato pensando alla semplicità e all'efficacia. Il nostro timer 
              programmabile ti permette di personalizzare la tua esperienza di meditazione in base 
              alle tue esigenze e disponibilità.
            </p>
            <p>
              La possibilità di scegliere tra diversi suoni ambientali ti aiuta a creare l'atmosfera 
              perfetta per la tua pratica, mentre la nostra libreria di risorse ti fornisce approfondimenti 
              e ispirazione per il tuo percorso di consapevolezza.
            </p>
          </div>
          <div className="about-image why-image">
            🍃
          </div>
        </div>



        <div className="about-values">
          <h2>I Nostri Valori</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                ❤️
              </div>
              <h3>Benessere</h3>
              <p>
                Crediamo che il benessere mentale sia fondamentale per una vita equilibrata e felice.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                🤝
              </div>
              <h3>Accessibilità</h3>
              <p>
                Vogliamo rendere la meditazione accessibile a tutti, senza barriere.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                🍃
              </div>
              <h3>Semplicità</h3>
              <p>
                La semplicità è la chiave: strumenti facili da usare per concentrarsi sull'essenziale.
              </p>
            </div>
          </div>
        </div>



        <div className="about-cta">
          <h2>Pronto a Iniziare?</h2>
          <p>
            Indipendentemente dal tuo livello di esperienza con la meditazione, MindTop è qui per 
            accompagnarti nel tuo percorso verso una maggiore consapevolezza.
          </p>
          <Link to="/meditazione" className="btn btn-primary">
            Inizia a Meditare
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
