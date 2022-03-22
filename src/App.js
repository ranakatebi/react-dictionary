import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary defaultKeyword="React" />
        </main>
        <footer className="App-footer">
          <small>
            <a href="https://github.com/ranakatebi/react-dictionary">
              Coded by Rana Katebi
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}