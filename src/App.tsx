import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import RandomizeHero from "./components/RandomizeHero";

function App() {
  return (
    <>
      <header className="mb-auto p-3">
        <Header />
      </header>
      <main className="px-3">
        <RandomizeHero />
      </main>
      <footer className="mt-auto text-white-50">
        <p>This is a work in progress</p>
      </footer>
    </>
  );
}

export default App;
