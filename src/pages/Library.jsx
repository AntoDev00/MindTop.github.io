import { FaBookOpen, FaYoutube, FaHeadphones, FaBook } from 'react-icons/fa';
import './Library.css';

const Library = () => {
  const resources = [
    {
      id: 1,
      title: "Meditazione Guidata per Principianti",
      type: "video",
      description: "Un'introduzione alla meditazione per chi sta iniziando questo percorso.",
      icon: FaYoutube,
      link: "#"
    },
    {
      id: 2,
      title: "Tecniche di Respirazione",
      type: "article",
      description: "Impara le tecniche di respirazione fondamentali per una meditazione efficace.",
      icon: FaBookOpen,
      link: "#"
    },
    {
      id: 3,
      title: "Meditazione Mindfulness",
      type: "podcast",
      description: "Scopri i principi della mindfulness e come praticarla quotidianamente.",
      icon: FaHeadphones,
      link: "#"
    },
    {
      id: 4,
      title: "La Scienza della Meditazione",
      type: "book",
      description: "Uno sguardo ai benefici della meditazione confermati dalla scienza moderna.",
      icon: FaBook,
      link: "#"
    },
    {
      id: 5,
      title: "Meditazione per Ridurre lo Stress",
      type: "video",
      description: "Una pratica guidata per aiutarti a gestire lo stress attraverso la meditazione.",
      icon: FaYoutube,
      link: "#"
    },
    {
      id: 6,
      title: "Meditazione e Benessere Psicofisico",
      type: "article",
      description: "Come la meditazione influisce positivamente sul corpo e sulla mente.",
      icon: FaBookOpen,
      link: "#"
    }
  ];

  const quotes = [
    {
      text: "Il dono della meditazione è che gradualmente diventi incapace di infliggerti ulteriore sofferenza.",
      author: "Pema Chödrön"
    },
    {
      text: "La meditazione non è una via di fuga; è un sereno incontro con la realtà.",
      author: "Thich Nhat Hanh"
    },
    {
      text: "La mente è come un paracadute. Funziona solo se si apre.",
      author: "Frank Zappa"
    }
  ];

  return (
    <div className="library-page">
      <div className="container">
        <div className="page-header">
          <h1>Libreria di Risorse</h1>
          <p>
            Esplora la nostra collezione di risorse sulla meditazione e sulla mindfulness
            per approfondire la tua pratica.
          </p>
        </div>

        <div className="resources-container">
          <h2>Risorse sulla Meditazione</h2>
          <div className="resources-grid">
            {resources.map(resource => (
              <div key={resource.id} className="resource-card">
                <div className={`resource-icon ${resource.type}`}>
                  <resource.icon />
                </div>
                <div className="resource-content">
                  <h3>{resource.title}</h3>
                  <p className="resource-type">{resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}</p>
                  <p className="resource-description">{resource.description}</p>
                  <a href={resource.link} className="resource-link">
                    Scopri di più
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="quotes-container">
          <h2>Citazioni Ispiratrici</h2>
          <div className="quotes-grid">
            {quotes.map((quote, index) => (
              <div key={index} className="quote-card">
                <p className="quote-text">"{quote.text}"</p>
                <p className="quote-author">- {quote.author}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="reading-list">
          <h2>Letture Consigliate</h2>
          <ul className="reading-list-items">
            <li>
              <strong>La Mente Meditativa</strong> - Di Jon Kabat-Zinn
            </li>
            <li>
              <strong>Il Miracolo della Mindfulness</strong> - Di Thich Nhat Hanh
            </li>
            <li>
              <strong>Il Potere di Adesso</strong> - Di Eckhart Tolle
            </li>
            <li>
              <strong>Dovunque tu vada, ci sei già</strong> - Di Jon Kabat-Zinn
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Library;
