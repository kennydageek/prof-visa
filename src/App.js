import './App.css';
import logo from './img/logo.svg';
import arrowdown from './img/icons/arrow-down.svg';
import slidetrack from './img/icons/slidetrack.svg';
import next from './img/icons/next-slide.svg';
import menu from './img/icons/menu.svg';
import aboutImg from './img/chess-img.svg';
import doodle from './img/doodle.svg';

function App() {
  return (
    <div className="App">
      <nav className="navigation flex">
        <div className="nav-group-left flex">
          <div className="navigation-logo">
            <img src={logo} alt={'logo'} />
          </div>
          <ul className="nav-links">
            <li className="nav-link">
              <a href="#agent">Agent information</a>
            </li>
            <li className="nav-link">
              <a href="#country">Country requirements</a>
            </li>
            <li className="nav-link">
              <a href="#about">About Us</a>
            </li>
            <li className="nav-link">
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="navigation-cta">
          <a href="#signin" className="btn btn__secondary">
            Sign in
          </a>
          <a href="#login" className="btn btn__primary">
            Sign Up
          </a>
        </div>
        <img src={menu} alt={'menu'} className="menu hidden" />
      </nav>
      <header className="header">
        <h1 className="heading__primary">
          PROMPT AND EASY STEPS FOR VISA PROCESSING
        </h1>

        <div className="hero-slide-container">
          <div className="slide-group slide-group--1">
            <div className="slide-box">
              <p className="slide-title">Travelling from?</p>
              <div className="slide-info">
                <p className="slide-info__text">Lagos, Nigeria</p>
                <img src={arrowdown} alt={arrowdown} />
              </div>
            </div>

            <div className="slide-box">
              <p className="slide-title">Travelling to?</p>
              <div className="slide-info">
                <p className="slide-info__text">Nairobi, Kenya</p>
                <img src={arrowdown} alt={arrowdown} />
              </div>
              <img src={slidetrack} alt={'slidetrack'} className="slidetrack" />
            </div>
          </div>

          <div className="slide-group slide-group--2">
            <div className="slide-box">
              <p className="slide-title">Departure date</p>
              <div className="slide-info">
                <p className="slide-info__text">27th Jul 2022</p>
                <img src={arrowdown} alt={arrowdown} />
              </div>
              <p className="slide-footer">Wednesday</p>
            </div>

            <div className="slide-box">
              <p className="slide-title">Return date</p>
              <div className="slide-info">
                <p className="slide-info__text">07th Aug 2022</p>
                <img src={arrowdown} alt={arrowdown} />
              </div>
              <p className="slide-footer">Thursday</p>
              {/* <img src={slidetrack} alt={'slidetrack'} className="slidetrack" /> */}
            </div>
          </div>

          <div className="slide-group slide-group--3">
            <div className="slide-box">
              <p className="slide-title">Travellers/Class</p>
              <div className="slide-info">
                <p className="slide-info__text">1 / Economy</p>
                {/* <img src={arrowdown} alt={arrowdown} /> */}
              </div>
              <p className="slide-footer">traveller</p>
            </div>

            <div className="slide-box">
              <p className="slide-title">Visa type</p>
              <div className="slide-info">
                <p className="slide-info__text">Tourist visa</p>
                <img src={arrowdown} alt={arrowdown} />
              </div>
              {/* <p className="slide-footer">Thursday</p> */}
              {/* <img src={slidetrack} alt={'slidetrack'} className="slidetrack" /> */}
            </div>
          </div>

          <img src={next} alt={'next'} class="next" />
        </div>

        <div className="header-metric">
          <div className="header-metric-group">
            <div className="header-metric__title">200</div>
            <div className="header-metric__info">
              clients who have trusted us
            </div>
          </div>

          <div className="header-metric-group">
            <div className="header-metric__title">98%</div>
            <div className="header-metric__info">
              successful visa process rate
            </div>
          </div>

          <div className="header-metric-group">
            <div className="header-metric__title">60 hrs</div>
            <div className="header-metric__info">Application approval time</div>
          </div>
        </div>
      </header>
      <section className="section-about">
        <div className="section-container">
          <div className="section-text">
            <h1 className="section-heading">
              Africa's <span class="color-primary">leading</span> visa
              consultants
            </h1>
            <p className="section-paragraph">
              VISAPROF is a pioneer in Nigeria's online travel industry. The
              organization started in 2020 on the basis of an idea conceived by
              its promoters. VISAPROF is trusted by over 200 clients. We assist
              applicants in navigating the visa process to any country in which
              they choose to stay or visit.
            </p>
          </div>
          <div className="section-image">
            <img src={aboutImg} alt="man" className="section-image__img" />

            <img src={doodle} alt="doodle" className="doodle" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
