import './App.css';
import logo from './img/logo.svg';
import arrowdown from './img/icons/arrow-down.svg';
import slidetrack from './img/icons/slidetrack.svg';
import next from './img/icons/next-slide.svg';
import menu from './img/icons/menu.svg';
import aboutImg from './img/chess-img.svg';
import doodle from './img/doodle.svg';
import consultation from './img/icons/consultation-icon.svg';
import resources from './img/icons/resources-icon.svg';
import support from './img/icons/support-icon.svg';
import assessment from './img/icons/free-assessment-icon.svg';
import leke from './img/leke.png';
import matthew from './img/matthew.png';
import debbie from './img/debbie.png';
import stars from './img/icons/5-stars.svg';
import apostrophe from './img/icons/apostrophe.svg';
import aposclose from './img/icons/apostrophe (1).svg';
import topcircle from './img/circle-vector (1).svg';
import bottomcircle from './img/circle-vector.svg';
import addIcon from './img/icons/add--icon.svg';
import socials from './img/icons/socials.svg';

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

      {/* Section About */}

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

      {/* Section-services */}

      <section className="section-service">
        <h1 className="section-heading section-heading--service text-center">
          What we offer our clients
        </h1>
        <div className="section-service-container">
          <div className="service-card">
            <img src={consultation} alt="" className="service-card__image" />
            <p className="service-card__heading">Visa consultation</p>
            <p className="service-card__paragraph">
              Our qualified and dependable visa consultants can assist you in
              obtaining a favorable result in your case.
            </p>
          </div>

          <div className="service-card">
            <img src={resources} alt="" className="service-card__image" />
            <p className="service-card__heading">Resources</p>
            <p className="service-card__paragraph">
              We provide our clients with important information and resources
              and also the travel requrements needed.
            </p>
          </div>

          <div className="service-card">
            <img src={support} alt="" className="service-card__image" />
            <p className="service-card__heading">Support</p>
            <p className="service-card__paragraph">
              We also provide required document support to ease the application
              process.
            </p>
          </div>

          <div className="service-card">
            <img src={assessment} alt="" className="service-card__image" />
            <p className="service-card__heading">Free Assessment</p>
            <p className="service-card__paragraph">
              We help those who want to know their eligibility status by
              assisting with free visa assessment.
            </p>
          </div>
        </div>
      </section>

      {/* Section Top destination */}

      <section className="section-topdest">
        <h1 className="section-heading text-center">
          Top <span className="color-primary">Destinations</span>
        </h1>

        <div className="section-topdest-container">
          <div className="topdest-card">
            <p className="topdest-card__caption">Kenya (E-visa)</p>
          </div>

          <div className="topdest-card topdest-card--uae">
            <p className="topdest-card__caption topdest-card__caption--blue">
              United Arab Emirates
            </p>
          </div>

          <div className="topdest-card topdest-card--nig">
            <p className="topdest-card__caption">Nigeria (visa on arrival)</p>
          </div>

          <div className="topdest-card topdest-card--egy">
            <p className="topdest-card__caption topdest-card__caption--blue">
              Egypt
            </p>
          </div>
        </div>
      </section>

      {/* Section Popular Destination */}

      <div className="section-topdest section-popdest">
        <h1 className="section-heading text-center">Popular Destinations</h1>
        <div className="section-topdest-container">
          <div className="topdest-card topdest-card--popdest topdest-card--popdest--uae">
            <div className="topdest-card-heading">
              <p className="topdest-card-heading__heading">
                United Arab Emirates
              </p>
            </div>
            <div className="topdest-card-footer">
              <p className="topdest-card__time">Processing time:</p>
              <p className="topdest-card__day">2-3 working days</p>
              <p className="topdest-card__amount">₦30,000 per person</p>
            </div>
          </div>

          <div className="topdest-card topdest-card--popdest topdest-card--popdest--mal">
            <div className="topdest-card-heading">
              <p className="topdest-card-heading__heading">Maldives</p>
            </div>
            <div className="topdest-card-footer">
              <p className="topdest-card__time">Processing time:</p>
              <p className="topdest-card__day">2-3 working days</p>
              <p className="topdest-card__amount">₦28,000 per person</p>
            </div>
          </div>

          <div className="topdest-card topdest-card--popdest topdest-card--popdest--sou">
            <div className="topdest-card-heading">
              <p className="topdest-card-heading__heading">South Africa</p>
            </div>
            <div className="topdest-card-footer">
              <p className="topdest-card__time">Processing time:</p>
              <p className="topdest-card__day">2-3 working days</p>
              <p className="topdest-card__amount">₦28,000 per person</p>
            </div>
          </div>

          <div className="topdest-card topdest-card--popdest topdest-card--popdest--jor">
            <div className="topdest-card-heading">
              <p className="topdest-card-heading__heading">Jordan</p>
            </div>
            <div className="topdest-card-footer">
              <p className="topdest-card__time">Processing time:</p>
              <p className="topdest-card__day">2-3 working days</p>
              <p className="topdest-card__amount">₦28,000 per person</p>
            </div>
          </div>
        </div>
      </div>

      <div className="section-review">
        <img src={topcircle} alt="" className="top-semicircle" />
        <img src={bottomcircle} alt="" className="bottom-semicircle" />
        <h1 className="section-heading text-center">
          What <span class="color-primary">our clients</span> have to say
        </h1>

        <div className="section-review-container">
          <div className="review-card">
            <img src={leke} alt="" className="review-card__image" />
            <p className="review-card__name">Mr. Leke</p>
            <p className="review-card__review">
              I'm happy I chose to process my visa with you guys, not a single
              regret. Visa came right on time with no hassle.
            </p>
            <img src={stars} alt="" className="review-card__rating" />
            <img src={apostrophe} alt="" className="review-card__open-quote" />
            <img src={aposclose} alt="" className="review-card__close-quote" />
          </div>

          <div className="review-card">
            <img src={matthew} alt="" className="review-card__image" />
            <p className="review-card__name">Matthew eke</p>
            <p className="review-card__review">
              The processing was fast and I got the visa right on time. Service
              is 100. Will defintely be doing more business with you.
            </p>
            <img src={stars} alt="" className="review-card__rating" />
            <img src={apostrophe} alt="" className="review-card__open-quote" />
            <img src={aposclose} alt="" className="review-card__close-quote" />
          </div>

          <div className="review-card">
            <img src={debbie} alt="" className="review-card__image" />
            <p className="review-card__name">Debbie</p>
            <p className="review-card__review">
              VISAPROF for the win... Wow!! How were you able to do this so
              fast. If i didn't get this visa, I would have had to cancel my
              trip
            </p>
            <img src={stars} alt="" className="review-card__rating" />
            <img src={apostrophe} alt="" className="review-card__open-quote" />
            <img src={aposclose} alt="" className="review-card__close-quote" />
          </div>
        </div>
      </div>

      <section className="section-faq">
        <h1 className="section-heading text-center">
          Frequently asked <span class="color-primary">questions</span>
        </h1>

        <div className="section-faq-container">
          <div className="faq-box">
            <p className="faq-box__heading">
              What are the requirements to get a visa?
            </p>
            <img src={addIcon} alt="" className="faq-box__img" />
          </div>
          <hr />

          <div className="faq-box">
            <p className="faq-box__heading">
              How long does the visa processing take?
            </p>
            <img src={addIcon} alt="" className="faq-box__img" />
          </div>
          <hr />

          <div className="faq-box">
            <p className="faq-box__heading">
              Can I still be approved if I have no travel history?
            </p>
            <img src={addIcon} alt="" className="faq-box__img" />
          </div>
          <hr />

          <div className="faq-box">
            <p className="faq-box__heading">
              How does VISAPROF obtain a visa for me?
            </p>
            <img src={addIcon} alt="" className="faq-box__img" />
          </div>
          <hr />

          <div className="faq-box">
            <p className="faq-box__heading">
              Do I need my passport at early stages of application?
            </p>
            <img src={addIcon} alt="" className="faq-box__img" />
          </div>
          <hr />

          <div className="faq-box">
            <p className="faq-box__heading">
              Must I be vaccinated to travel abroad?
            </p>
            <img src={addIcon} alt="" className="faq-box__img" />
          </div>
          <hr />
        </div>
      </section>

      <section className="section-contact">
        <h1 className="section-heading text-center mb-3">
          Get free assessment today
        </h1>
        <p className="section-title text-center">
          Feel free to enquire about any questions you have
        </p>

        <form action="" className="form-container">
          <input
            type="text"
            name=""
            id="name"
            placeholder="Full name"
            required
          />
          <input type="email" name="" id="email" placeholder="email address" />
          <textarea
            name=""
            id="message"
            cols="30"
            rows="10"
            placeholder="Type message here"
          ></textarea>

          <button className="btn btn__primary form-cta">Send</button>
        </form>
      </section>

      <footer className="footer">
        <hr />
        <div className="footer-container">
          <div className="footer-socials footer-item">
            <img src={socials} alt="" className="footer-socials__social" />
          </div>
          <div className="footer-company footer-item">
            <p className="footer__heading">Company</p>
            <p className="footer__list">Home</p>
            <p className="footer__list">About Us</p>
          </div>
          <div className="footer-legal footer-item">
            <p className="footer__heading">Legal</p>
            <p className="footer__list">Terms of service</p>
            <p className="footer__list">Privacy policy</p>
          </div>
          <div className="footer-community footer-item">
            <p className="footer__heading">Community</p>
            <p className="footer__list">Blog</p>
            <p className="footer__list">FAQs</p>
          </div>
          <div className="footer-contact footer-item">
            <p className="footer__heading">Contact</p>
            <p className="footer__list">info@visaprof.com</p>
            <p className="footer__list">07017401336</p>
          </div>
        </div>
      </footer>

      <section className="section-badge">
        <p class="text-center">
          &copy; 2022 VISAPROF Visa processing firm. All rights reserved
        </p>
      </section>
    </div>
  );
}

export default App;
