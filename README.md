# 🧘 MindTop

MindTop è un'applicazione web per la meditazione progettata per aiutare gli utenti a praticare la mindfulness in modo semplice e immediato. Offre un timer personalizzabile e suoni ambientali rilassanti per creare l'atmosfera ideale per la meditazione.

## ✨ Funzionalità Principali

- **Timer di Meditazione**: Imposta facilmente la durata della tua sessione di meditazione
- **Suoni Ambientali**: Scegli tra diversi suoni rilassanti (natura, pioggia, oceano) per accompagnare la tua pratica
- **Riproduzione in Loop**: I suoni ambientali si ripetono senza interruzioni per tutta la durata della sessione
- **Design Responsivo**: Esperienza ottimale su tutti i dispositivi, dai desktop agli smartphone
- **Interfaccia Intuitiva**: Design minimalista per facilitare la concentrazione

## 🛠️ Tecnologie Utilizzate

- **Frontend**: React, React Router
- **Gestione Audio**: Howler.js
- **Sviluppo**: Vite, JSX
- **Stili**: CSS personalizzato
- **Gestione Stato**: React Context API, React Hooks
- **Deployment**: GitHub Pages

## 🚀 Installazione e Utilizzo

### Requisiti Preliminari

- Node.js (versione 14.x o superiore)
- npm (versione 6.x o superiore)

### Passaggi per l'Installazione

1. Clona il repository:
   ```bash
   git clone https://github.com/yourusername/MindTop.github.io.git
   cd MindTop.github.io
   ```

2. Installa le dipendenze:
   ```bash
   npm install
   ```

3. Avvia il server di sviluppo:
   ```bash
   npm run dev
   ```

4. Compila per la produzione:
   ```bash
   npm run build
   ```

## 📁 Struttura del Progetto

```
MindTop.github.io/
├── public/
├── src/
│   ├── assets/
│   │   ├── icons/
│   │   ├── images/
│   │   └── sounds/
│   ├── components/
│   │   └── ui/
│   ├── context/
│   │   └── MeditationContext.jsx
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Home.jsx
│   │   ├── Library.jsx
│   │   ├── Meditation.jsx
│   │   └── NotFound.jsx
│   ├── App.jsx
│   └── main.jsx
├── index.html
└── package.json
```

## 📱 Come Utilizzare l'App

1. **Naviga verso la pagina "Meditazione"** dal menu principale
2. **Imposta il timer** scegliendo la durata desiderata
3. **Seleziona un suono ambientale** tra quelli disponibili
4. **Avvia il timer** e inizia la tua sessione di meditazione
5. **Pausa o Reset** sono disponibili durante la sessione per interrompere o ricominciare

## 🔄 Roadmap

- Aggiunta di nuovi suoni ambientali
- Implementazione di sessioni guidate di meditazione
- Tracciamento delle statistiche personali di meditazione
- Modalità offline per l'utilizzo senza connessione internet

## 📜 Licenza

Questo progetto è distribuito con licenza MIT. Consulta il file `LICENSE` per maggiori dettagli.

## 👥 Contributi

Contributi, segnalazioni di bug e richieste di funzionalità sono benvenuti. Sentiti libero di aprire una issue o inviare una pull request.

---

Creato con ❤️ per gli amanti della meditazione.
