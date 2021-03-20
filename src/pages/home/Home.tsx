import './Home.css';
import PhraseDisplay from '../../components/PhraseDisplay';

function Home() {
  return (
    <main className="main-container">
      <h3 className="main-title">Am I Procrastinating?</h3>
      <PhraseDisplay />
    </main>
  );
}

export default Home;
