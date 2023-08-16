import './App.css';
import headshot from "./images/headshot-beach.webp";

function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link active" aria-current="page" href="#">Bio</a>
              <a class="nav-link" href="#">Projects</a>
              <a class="nav-link" href="#">Education</a>
              <a class="nav-link" href="#">Contact</a>
            </div>
          </div>
        </div>
      </nav>
      <header className="App-header">
        <div>
          <img src={headshot} alt="" className='headshot' />
        </div>
        <p>My Portfolio</p>
      </header>
    </div>
  );
}

export default App;
