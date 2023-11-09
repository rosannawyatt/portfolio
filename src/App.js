import './App.css';
import headshot from "./images/headshot-beach.webp";
import github from "./images/GitHub_Logo_White.png";
import email from "./images/email.png";
import linkedin from "./images/LI-Logo copy.png";
import tulane from "./images/tulane-logo.png";
import hackreactor from "./images/hack-reactor.png";
import chauffoh from "./images/hand.webp";
import cars from "./images/cars.webp";
import background from "./images/marble-background.webp";
import githubLogo from "./images/github-mark.png";
import $ from 'jquery';
import footer from "./images/marble-footer.webp";


function App() {

  $(window).scroll(function() {
  
    // selectors
    var $window = $(window),
        $body = $('body'),
        $panel = $('.panel');
    
    // Change 33% earlier than scroll position so colour is there when you arrive.
    var scroll = $window.scrollTop() + ($window.height() / 1.5);
   
    $panel.each(function () {
      var $this = $(this);
      
      // if position is within range of this panel.
      // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
      // Remember we set the scroll to 33% earlier in scroll var.
      if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
            
        // Remove all classes on body with color-
        $body.removeClass(function (index, css) {
          return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
        });
         
        // Add class of currently active div
        $body.addClass('color-' + $(this).data('color'));
      }
    });    
    
  }).scroll();

  return (
    <div className="App">
      <div className='navbar'>
        <nav class="navbar navbar-expand-lg bg-body-tertiary" style={{marginTop: 40, background: "transparent", backdropFilter: "blur", width:"100%"}}>
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
        <div className='panel' data-color='white'>
          <div className='top-section'>
            <div className='top-row'>
              <h3 class="name"> ROSANNA WYATT</h3>
              <div>
                <div className='description'>
                  <p>Full Stack Software Engineer</p>
                  <p>Python | Javascript | SQL</p>
                  <p>React | Django | CSS | UI Design</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='panel' data-color='dark'>
          <a id='bio'>
            <div className='bio-row'>
              <figure className='panel-item'>
                <img src={headshot} alt="" className='headshot' />
              </figure>
              <figure className='panel-item'>
                <div className='bio'>
                  <h1 className='bio-header'>ABOUT ME</h1>
                  <p>
                    I'm an artist at heart. My journey as a software
                    engineer began as a way to add some stability to my life as I continue to pursue 
                    my music career but I quickly found that I truly enjoy the work. I have appreciation
                    for all aspects of programming but specifically enjoy front end work
                    and UI design, as it allows me to use my natural creativity in a way
                    that directly interacts with the user. I am passionate about creating
                    technology that is beautiful, intuitive, and improves people's lives.
                  </p>
                </div>
              </figure>
            </div>
          </a>
        </div>
        <div className='panel' data-color='projects'>
          <a id='projects'>
            <div className='projects'>
              <h1 className='project-header'>Projects</h1>
              <div>
                <div className='project-row'>
                  <figure className='project-card'>
                    <img src={chauffoh} class="card-img-top" alt="..." />
                    <figcaption className='project-text'>
                      <h5>Chauffoh</h5>
                      <p>A transportation app designed to help users get themselves and their cars where they need to go when they cannot drive.</p>
                      <a href="https://github.com/rosannawyatt/chauffoh">
                        <img className='github-logo' src={githubLogo} />
                      </a>
                    </figcaption>
                  </figure>
                  <figure className='project-card'>
                    <img src={cars} class="card-img-top" alt="..." />
                    <figcaption className='project-text'>
                      <h5>EZ Car</h5>
                      <p>A car dealership management web application that handles back end operations as well as client facing sales and sevices.</p>
                      <a href="https://github.com/rosannawyatt/EZ-Car">
                        <img className='github-logo' src={githubLogo} />
                      </a>
                    </figcaption>
                  </figure>
                  <figure className='project-card'>
                    <img src={background} class="card-img-top" alt="..." />
                    <figcaption className='project-text'>
                      <h5>Portfolio</h5>
                      <p>This website was designed by yours truly using Figma, created with Create React App, bootstrap, and custom CSS</p>
                      <a href="https://github.com/rosannawyatt/portfolio">
                        <img className='github-logo' src={githubLogo} />
                      </a>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className='panel' data-color='education'>
          <a id="education">
            <div className='education-section'>
              <h1 className='education-header'>Education</h1>
              <div className='edu-cards'>
                <div>
                  <div className='edu-row'>
                    <figure className='edu-card'>
                      <img src={tulane} class="card-img-top" alt="..." />
                      <figcaption className='edu-text'>
                        <h5>Tulane University</h5>
                        <h6>New Orleans, LA</h6>
                        <h7 className='card-subtitle'>2009-2013</h7>
                        <p> </p>
                        <p class="card-text">Bachelor's degree in Latin American Studies, cum laude</p>
                      </figcaption>
                    </figure>
                    <figure className='edu-card'>
                      <img src={hackreactor} class="card-img-top" alt="..." style={{padding:30, width:"80%", marginLeft:30}} />
                      <figcaption className='edu-text'>
                        <h5>Hack Reactor</h5>
                        <h6>Galvanize Inc</h6>
                        <h7 className='card-subtitle'>2023</h7>
                        <p> </p>
                        <p class="card-text">Advanced Software Engineering Certificate, full stack</p>
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className='panel' data-color='dark'>
          <a id='contact'>
            <div className='contact-row'>
              <div className='contact-link'>
                <a href='https://www.linkedin.com/in/rosannawyatt/'>
                  <img src={linkedin} alt='linkedin logo' className='linkedin' />
                </a>
              </div>
              <div className='contact-link'>
                <img src={email} alt='email logo' className='email' />
              </div>
              <div className='contact-link'>
                <a href='https://github.com/rosannawyatt'>
                  <img src={github} alt='github logo' className='github' />
                </a>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
