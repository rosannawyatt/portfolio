import './App.css';
import headshot from "./images/headshot-beach.webp";
import github from "./images/GitHub_Logo_White.png";
import email from "./images/email.png";
import linkedin from "./images/LI-Logo copy.png";

function App() {
  return (
    <div className="App">
      <div className='navbar'>
        <nav class="navbar navbar-expand-lg bg-body-tertiary" style={{marginTop: 40, background: "transparent", backdropFilter: "blur"}}>
          <div class="container-fluid">
            <a class="navbar-brand" href="#">RW</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <a class="nav-link active" aria-current="page" href="#bio">Bio</a>
                <a class="nav-link" href="#projects">Projects</a>
                <a class="nav-link" href="#education">Education</a>
                <a class="nav-link" href="#contact">Contact</a>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className='main-body'>
        <div className='top-section'>
          <div class="row">
            <div class="col">
              <div className='description'>
                <p>Full Stack Software Engineer</p>
                <p>Python | Javascript | SQL</p>
                <p>React | Django | CSS | UI Design</p>
              </div>
            </div>
            <div class="col">
                <div class="container">
                  <div class="row">
                    <div class="col-md-12 text-center">
                      <div className='name-box'>
                        <h3 class="animate-charcter"> ROSANNA WYATT</h3>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
        <a id='bio'>
          <div className='bio-section'>
            <div class="row">
              <div class="col">
                <div>
                  <img src={headshot} alt="" className='headshot' />
                </div>
              </div>
              <div class="col">
                <div className='bio'>
                  <h1 className='bio-header'>ABOUT ME</h1>
                  <p>
                    I'm an artist at heart. My journey as a software
                    engineer began as a way to add some stability to my life as I continue to pursue 
                    her music career but I quickly found that I truly enjoyed the work. I have appreciation
                    for all aspects of programming but specifically enjoy front end work
                    and UI design, as it allows me to use my natural creativity in a way
                    that directly interacts with the user. I am passionate about creating
                    technology that is beautiful, intuitive, and improves people's lives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </a>
        <a id='projects'>
          <div className='projects'>
            <h1 className='project-header'>Projects</h1>
            <div class="container text-center" style={{width: "100%", marginTop: 60, marginLeft: "8%"}}>
              <div class="row align-items-center">
                <div class="col">
                  <div class="card" style={{width: "18rem", margin: "auto"}}>
                    <img src="..." class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h5 class="card-title">Chauffoh</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card" style={{width: "18rem", margin: "auto"}}>
                    <img src="..." class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h5 class="card-title">EZ Car</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card" style={{width: "18rem", margin: "auto"}}>
                    <img src="..." class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h5 class="card-title">DONE</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
        <a id="education">
          <div className='education-section'>
            <h1 className='education-header'>Education</h1>
            <div className='edu-cards'>
              <div class="row">
                <div class="col">
                  <div class="card" style={{width: "18rem", margin: "auto"}}>
                    <img src="..." class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h5 class="card-title">Tulane University</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card" style={{width: "18rem", margin: "auto"}}>
                    <img src="..." class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h5 class="card-title">Hack Reactor</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
        <a id='contact'>
          <div className='contact-section'>
              <div class="container text-center" style={{ marginLeft: "15%", padding: 0}}>
                <div class="row align-items-center">
                    <div class="col" style={{ marginTop: "5%", marginBottom: "5%"}}>
                      <img src={linkedin} alt='linkedin logo' className='linkedin' />
                    </div>
                    <div class="col" style={{ marginTop: "5%", marginBottom: "5%"}}>
                      <img src={email} alt='linkedin logo' className='email' />
                    </div>
                    <div class="col" style={{ marginTop: "6%", marginBottom: "5%"}}>
                      <img src={github} alt='linkedin logo' className='github' />
                    </div>
                </div>
              </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default App;
