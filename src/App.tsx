import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import RandomizeHero from "./components/RandomizeHero"

function App() {
  return (
    <>
      <Header />
      <main className="px-3">
        <RandomizeHero />
      </main>
    </>
  );
}

export default App;
