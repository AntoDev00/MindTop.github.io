import { useState, useEffect } from 'react';
import { FaLeaf, FaRegLightbulb } from 'react-icons/fa';
import Timer from '../components/ui/Timer';
import SoundSelector from '../components/ui/SoundSelector';
import { useMeditation } from '../context/MeditationContext';
import './Meditation.css';

const Meditation = () => {
  const { isActive, isPaused, completedSessions } = useMeditation();
  const [quote, setQuote] = useState('');
  const [showQuote, setShowQuote] = useState(true);

  // Array di citazioni sulla meditazione
  const quotes = [
    "La meditazione è un viaggio dal suono al silenzio, dal movimento all'immobilità.",
    "Non puoi fermare le onde, ma puoi imparare a cavalcarle.",
    "La pace arriva dall'interno, non cercarla all'esterno.",
    "Medita non per controllare i tuoi pensieri, ma per smettere di lasciare che i tuoi pensieri controllino te.",
    "La tua visione diventerà chiara solo quando potrai guardare nel tuo cuore.",
    "Respira. Lascia andare. Ricorda chi sei.",
    "Nella meditazione troviamo un momento di pace in un mondo frenetico.",
    "Il presente è l'unico momento in cui la vita esiste veramente.",
    "La mente è come l'acqua, quando è agitata diventa difficile vedere, ma se si permette di calmarsi, la risposta diventa chiara.",
    "La meditazione non è una fuga dalla realtà, ma un incontro con essa."
  ];

  // Seleziona una citazione casuale all'avvio
  useEffect(() => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote);
  }, []);

  // Nascondi la citazione quando il timer è attivo
  useEffect(() => {
    if (isActive && !isPaused) {
      setShowQuote(false);
    } else if (!isActive) {
      setShowQuote(true);
    }
  }, [isActive, isPaused]);

  return (
    <div className="meditation-page">
      <div className="container">
        <div className="meditation-card">
          <div className="meditation-header">
            <h1>
              <FaLeaf className="icon-leaf" />
              Momento di Meditazione
            </h1>
            {completedSessions > 0 && (
              <div className="sessions-count">
                Sessioni completate: {completedSessions}
              </div>
            )}
          </div>

          <div className="meditation-content">
            <div className="timer-section">
              <Timer />
            </div>

            <div className="controls-section">
              <SoundSelector />
              
              {showQuote && (
                <div className="quote-card">
                  <FaRegLightbulb className="quote-icon" />
                  <p className="quote-text">{quote}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="meditation-tips">
          <h2>Consigli per la Meditazione</h2>
          <ul>
            <li>
              <strong>Trova una posizione comoda</strong> - Siediti con la schiena dritta ma non rigida. Puoi sederti su una sedia o a terra su un cuscino.
            </li>
            <li>
              <strong>Concentrati sul respiro</strong> - Osserva l'aria che entra ed esce dai polmoni senza cercare di controllarla.
            </li>
            <li>
              <strong>Sii consapevole dei pensieri</strong> - Quando arrivano pensieri (e arriveranno), notali senza giudicare e riporta gentilmente l'attenzione al respiro.
            </li>
            <li>
              <strong>Inizia con sessioni brevi</strong> - Anche 5 minuti al giorno possono fare una grande differenza. Aumenta gradualmente la durata.
            </li>
            <li>
              <strong>Sii costante</strong> - La pratica regolare, anche se breve, è più efficace di sessioni lunghe ma sporadiche.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Meditation;
