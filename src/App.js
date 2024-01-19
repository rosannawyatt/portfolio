import './App.css';
import React from 'react';
import headshot from "./images/headshot-beach.webp";
import github from "./images/GitHub_Logo_White.png";
import email from "./images/email.png";
import linkedin from "./images/LI-Logo copy.png";
import tulane from "./images/Tulane.webp";
import hackreactor from "./images/coding.webp";
import chauffoh from "./images/hand.webp";
import cars from "./images/cars.webp";
import background from "./images/marble-background.webp";
import githubLogo from "./images/github-mark.png";
import $ from 'jquery';
import { EmailForm } from './EmailForm';


function App() {
  console.log('hellloooooooo')

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
      <div>
        <nav className='nav navbar'>
          <div class="container-fluid">
            <div>
              <div class="navbar-nav">
                <li><a className='nav-link logo' href="#home">RW</a></li>
                <li><a class="nav-link" aria-current="page" href="#bio">Bio</a></li>
                <li><a class="nav-link" href="#projects">Projects</a></li>
                <li><a class="nav-link" href="#education">Education</a></li>
                <li><a class="nav-link" href="#contact">Contact</a></li>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className='main-body'>
        <div id='home' className='top-panel'>
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
          <div id='bio'>
            <div className='bio-row'>
              <figure className='panel-item'>
                <div className='headshot-section'>
                  <img src={headshot} alt="..." className='headshot' />
                </div>
              </figure>
              <figure className='panel-item'>
                <div className='bio'>
                  <h1 className='bio-header'>ABOUT ME</h1>
                  <p>
                    I am an artist at heart. My journey as a software
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
          </div>
        </div>
        <div className='panel' data-color='projects'>
          <div id='projects'>
            <div className='projects'>
              <h1 className='project-header'>Projects</h1>
                <div className='project-row'>
                  <figure className='project-card'>
                    <img src={chauffoh} class="card-img-top" alt="..." />
                    <figcaption className='project-text'>
                      <h5>Chauffoh</h5>
                      <p>A transportation app designed to help users get themselves and their cars where they need to go when they cannot drive.</p>
                      <a href="https://github.com/rosannawyatt/chauffoh">
                        <img className='github-logo' alt='github logo' src={githubLogo} />
                      </a>
                    </figcaption>
                  </figure>
                  <figure className='project-card'>
                    <img src={cars} class="card-img-top" alt="..." />
                    <figcaption className='project-text'>
                      <h5>EZ Car</h5>
                      <p>A car dealership management web application that handles back end operations as well as client facing sales and sevices.</p>
                      <a href="https://github.com/rosannawyatt/EZ-Car">
                        <img className='github-logo' alt='github logo' src={githubLogo} />
                      </a>
                    </figcaption>
                  </figure>
                  <figure className='project-card'>
                    <img src={background} class="card-img-top" alt="..." />
                    <figcaption className='project-text'>
                      <h5>Portfolio</h5>
                      <p>This website was designed by yours truly using Figma, created with Create React App, bootstrap, and custom CSS</p>
                      <a href="https://github.com/rosannawyatt/portfolio">
                        <img className='github-logo' alt='github logo' src={githubLogo} />
                      </a>
                    </figcaption>
                  </figure>
                </div>
                <div className='project-carousel'>
                <div id="carouselExampleCaptions" class="carousel slide project-slides">
                  <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  </div>
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img src={chauffoh} class="d-block w-100 slide-image" alt="..." />
                      <div class="carousel-caption slide-text">
                        <h5>Chauffoh</h5>
                        <p>A transportation app designed to help users get themselves and their cars where they need to go when they cannot drive.</p>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <img src={cars} class="d-block w-100 slide-image" alt="..." />
                      <div class="carousel-caption slide-text">
                        <h5>EZ Car</h5>
                        <p>A car dealership management web application that handles back end operations as well as client facing sales and sevices.</p>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <img src={background} class="d-block w-100 slide-image" alt="..." />
                      <div class="carousel-caption slide-text">
                        <h5>Portfolio</h5>
                        <p>This website was designed by yours truly using Figma, created with Create React App, bootstrap, and custom CSS.</p>
                      </div>
                    </div>
                  </div>
                  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='panel' data-color='education'>
          <div id="education">
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
                        <p className="card-text">Bachelor's degree in Latin American Studies, cum laude</p>
                      </figcaption>
                    </figure>
                    <figure className='edu-card'>
                      <img src={hackreactor} class="card-img-top" alt="..." />
                      <figcaption className='edu-text'>
                        <h5>Hack Reactor</h5>
                        <h6>Galvanize Inc</h6>
                        <h7 className='card-subtitle'>2023</h7>
                        <p> </p>
                        <p className="card-text">Advanced Software Engineering Certificate, full stack</p>
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='panel' data-color='dark'>
          <div id='contact'>
            <div className='contact-row'>
              <div className='contact-link'>
                  <a href='https://www.linkedin.com/in/rosannawyatt/'>
                    <img src={linkedin} alt='linkedin logo' className='linkedin' />
                  </a>
                  <a href='https://github.com/rosannawyatt'>
                    <img src={github} alt='github logo' className='github' />
                  </a>
              </div>
            </div>
            <div className='contact-row'>
              <div className='email-form'>
                <EmailForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
