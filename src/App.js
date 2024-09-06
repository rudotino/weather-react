import "./App.css";
import Weather from "./Weather";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <div className="Weather-app">
        <Header />
        <header>
          <h1>What's the weather?</h1>
        </header>
        <Weather />
        <div className="Footer">
          Code built by
          <a href="https://github.com/rudotino"> Rudo Tino</a> and hosted on
          GitHub
        </div>
      </div>
    </div>
  );
}

export default App;
