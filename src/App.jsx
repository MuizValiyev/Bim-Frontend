import React from "react";
import "./App.css";
import "./index.css";
import SliderComponent from "./SliderComponent";
import { useState, useEffect } from "react";



import logo from "./assets/logo.svg";
import logoWhite from "./assets/logoWhite.svg";
import burger from "./assets/burger.svg";
import books from "./assets/books.svg";
import teaIcon from "./assets/tea_icon.svg";
import arrowLeft from "./assets/arrow_left.svg";
import drink from "./assets/drink.png";
import arrowRight from "./assets/arrow_right.svg";
import bimPhoto2 from "./assets/bim_photo_2.png";
import bimPhoto1 from "./assets/bim_photo_1.png";
import diploma from  "./assets/diploma.svg";
import graph from "./assets/graph.svg";
import rocket from "./assets/rocket.svg";
import mapContainer from "./assets/map_container.svg";
import bimFranchises from "./assets/bimfranchises.png";
import tick from "./assets/tick.svg";
import bimKepka from "./assets/binkepka.png";
import bimOneStep from "./assets/bimOneStep.png";
import telegram from "./assets/telegram.svg";
import insta from "./assets/insta.svg";


function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenAdaptive, setIsModalOpenAdaptive] = useState(false);

  const handleStep = (step) => {
    setCurrentStep(step);
  };

  const openModalWithImage = () => {
    setIsModalOpen(!isModalOpen);
  };

  const openModal = () => {
    setIsModalOpenAdaptive(!isModalOpenAdaptive);
  };

  // Блокируем прокрутку, когда модалка открыта
  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "auto";
  }, [isModalOpen]);

  return (
    <div className="app">
      {/* Header */}
      <header className={isModalOpenAdaptive ? "headerModalOpen" : "header"}>
        <div className="container header-container">
          <div className="logo">
            <img src={logo} alt="BIM" />
          </div>
          <nav className="main-nav">
            <ul>
              <li>
                <a href="#about">Концепция</a>
              </li>
              <li>
                <a href="#concept">Цифры</a>
              </li>
              <li>
                <a href="#franchisee">Поддержка</a>
              </li>
              <li>
                <a href="#bim-not-only">Как стать партнером</a>
              </li>
              <li>
                <a href="#contacts">Контакты</a>
              </li>
            </ul>
          </nav>
          <div className="burgerandbutton">
            <img
              onClick={openModal}
              src={burger}
              alt="Бургер"
            />
            <button
              className="button primary-button"
              onClick={openModalWithImage}
            >
              Связаться с нами
            </button>
          </div>
        </div>
        {isModalOpenAdaptive && (
          <div className="boxModalAdaptive">
            <div className="boxrowbtns">
              <a href="#about" className="onebtn">
                Концепция
              </a>
              <a href="#concept" className="onebtn">
                Цифры
              </a>
              <a href="#franchisee" className="onebtn">
                Поддержка
              </a>
              <a href="#bim-not-only" className="onebtn">
                Как стать партнером
              </a>
              <a href="#contacts" className="onebtn">
                Контакты
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h3>Создайте атмосферу с BIM — уют и радость в каждом моменте.</h3>
            <p>Заварите радость с BIM - вкусно и тепло!</p>
            <button className="hero-button">
              Проверить доступность города
            </button>
          </div>
          <div className="hero-image">
            <img src={books} alt="BIM брошюра" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stat-item">
            <h2>
              Поддержка на всех<br></br>этапах
            </h2>
          </div>
          <div className="stat-item">
            <h2>8-18</h2>
            <p>месяцев окупаемости</p>
          </div>
          <div className="stat-item">
            <h2>
              Минимальные<br></br>риски
            </h2>
          </div>
        </div>
      </section>

      {/* Concept Section */}
      <section id="concept" className="concept">
        <div className="container-Column">
          <h2 className="concept-title">Концепция BIM</h2>
          <div className="concept-content">
            <div className="menu-column left">
              <div className="menu-item">
                <div className="box-menu-item"></div>
                <div className="menu-text">
                  <h3>БОЛЬШЕ, ЧЕМ ЧАЙ</h3>
                  <p>Новые, мощные, взрывные вкусы</p>
                </div>
                <div className="menu-icon">
                  <img src={teaIcon} alt="Tea icon" />
                </div>
              </div>
              <div className="menu-item">
                <div className="menu-text">
                  <h3>БОЛЬШЕ, ЧЕМ ЧАЙ</h3>
                  <p>Новые, мощные, взрывные вкусы</p>
                </div>
                <div className="menu-icon">
                  <img src={teaIcon} alt="Tea icon" />
                </div>
                <div className="box-menu-item"></div>
              </div>
              <div className="menu-item">
                <div className="box-menu-item"></div>
                <div className="menu-text">
                  <h3>БОЛЬШЕ, ЧЕМ ЧАЙ</h3>
                  <p>Новые, мощные, взрывные вкусы</p>
                </div>
                <div className="menu-icon">
                  <img src={teaIcon} alt="Tea icon" />
                </div>
              </div>
            </div>

            <div className="featured-product">
              <button className="arrow-button left">
                <img src={arrowLeft} alt="Left arrow" />
              </button>
              <img
                src={drink}
                alt="Напиток"
                className="drink"
              />
              <button className="arrow-button right">
                <img src={arrowRight} alt="Right arrow" />
              </button>
            </div>

            <div className="menu-column right">
              <div className="menu-item">
                <div className="menu-icon">
                  <img src={teaIcon} alt="Tea icon" />
                </div>
                <div className="menu-text">
                  <h3>БОЛЬШЕ, ЧЕМ ЧАЙ</h3>
                  <p>Новые, мощные, взрывные вкусы</p>
                </div>
                <div className="box-menu-item"></div>
              </div>
              <div className="menu-item">
                <div className="box-menu-item"></div>
                <div className="menu-icon">
                  <img src={teaIcon} alt="Tea icon" />
                </div>
                <div className="menu-text">
                  <h3>БОЛЬШЕ, ЧЕМ ЧАЙ</h3>
                  <p>Новые, мощные, взрывные вкусы</p>
                </div>
              </div>
              <div className="menu-item">
                <div className="menu-icon">
                  <img src={teaIcon} alt="Tea icon" />
                </div>
                <div className="menu-text">
                  <h3>БОЛЬШЕ, ЧЕМ ЧАЙ</h3>
                  <p>Новые, мощные, взрывные вкусы</p>
                </div>
                <div className="box-menu-item"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="boxbtnsConcept">
        <button className="arrow-button left">
          <img src={arrowLeft} alt="Left arrow" />
        </button>
        <button className="arrow-button right">
          <img src={arrowRight} alt="Right arrow" />
        </button>
      </div>

      {/* BIM Not Only Section */}
      <section id="bim-not-only" className="bim-not-only">
        <div className="container">
          <div className="content-columns">
            <div className="product-images">
              <img src={bimPhoto2} alt="BIM продукты" />
            </div>
            <div className="content-text">
              <h2>BIM - это не только продукт</h2>
              <p>
                BIM – это не только качественный продукт, но и особый дух,
                способ самовыражения для модных, дерзких и молодых!
              </p>
              <p>
                Гости возвращаются не только за вкусными напитками, но и за
                атмосферой.
              </p>
              <button className="button secondary-button">Подробнее</button>
            </div>
          </div>
        </div>
      </section>

      {/* BIM as Brand Section */}
      <section id="franchisee" className="bim-brand">
        <div className="container">
          <div className="content-columns">
            <div className="content-text">
              <h2>BIM как бренд</h2>
              <p>
                Мы строим бренд, который объединяет молодых и независимых людей,
                для которых «быть частью» BIM, провести время с ним и пригласить
                друзей — так же важно и ценно, как и насладиться всем, что он
                предлагает.
              </p>
              <button className="button secondary-button">Подробнее</button>
            </div>
            <div className="brand-image">
              <img src={bimPhoto1} alt="BIM бренд" />
            </div>
          </div>
        </div>
      </section>

      {/* Business Model Section */}
      <section className="business-model">
        <div className="business-model-container">
          <h2>Бизнес-модель BIM</h2>
          <div className="model-table">
            <div className="model-row">
              <div className="model-data">
                <span>3-10 млн. USD./мес.</span>
                <p>(в зависимости от обсуждаемого города)</p>
              </div>
              <div className="model-description">
                <p>Прогнозируемая выручка</p>
              </div>
            </div>
            <div className="model-row">
              <div className="model-data">
                <span>15-20%</span>
              </div>
              <div className="model-description">
                <p>Рентабельность</p>
              </div>
            </div>
            <div className="model-row">
              <div className="model-data">
                <span>12-24 месяца</span>
              </div>
              <div className="model-description">
                <p>Срок окупаемости франшизы</p>
              </div>
            </div>
            <div className="model-row">
              <div className="model-data">
                <span>от 5 млн. сум.</span>
              </div>
              <div className="model-description">
                <p>Первоначальные инвестиции на открытие одной точки</p>
              </div>
            </div>
            <div className="model-row">
              <div className="model-data">
                <span>от 1 млн. сум.</span>
              </div>
              <div className="model-description">
                <p>Вступительный взнос</p>
              </div>
            </div>
            <div className="model-row">
              <div className="model-data">
                <span>до 7%</span>
              </div>
              <div className="model-description">
                <p>Роялти</p>
              </div>
            </div>
          </div>
          <button className="model-primary-button">
            Получить подробный бизнес-план
          </button>
        </div>
      </section>

      {/* Support Section */}
      <section className="support">
        <div className="container-Column">
          <div className="">
            <h2>Поддержка команды BIM</h2>
            <p className="support-desc">
              Мы ценим каждого франчайзи и стремимся обеспечить максимальную
              поддержку, помогая в развитии бизнеса!
            </p>
          </div>
          <div className="support-grid">
            <div className="support-item">
              <div className="support-icon">
                <img src={diploma} alt="Right arrow" />
              </div>
              <h3>Сертификаты</h3>
              <p>Мы предоставляем все необходимые сертификаты для работы</p>
            </div>
            <div className="support-item">
              <div className="support-icon">
                <img src={graph} alt="Right arrow" />
              </div>
              <h3>Виды поддержки</h3>
              <p>Техническая, маркетинговая, HR и т.д.</p>
            </div>
            <div className="support-item">
              <div className="support-icon">
                <img src={rocket} alt="Right arrow" />
              </div>
              <h3>Помощь партнерам</h3>
              <p>
                Помогаем партнерам на всех этапах работы – от проработки
                потенциала города до поставок оборудования.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="locations">
        <div className="container-Column">
          <SliderComponent />
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container-Column">
          <div className="map-cta">
            <h2>Список приоритетных городов для развития BIM в Узбекистане</h2>
            <p>Хотите стать частью BIM?</p>
            <button className="button primary-button">Оставить заявку</button>
          </div>
          <div className="uzbekistan-map">
            <img src={mapContainer} alt="Карта Узбекистана" />
          </div>
        </div>
      </section>

      {/* International Section */}
      <section className="international">
        <div className="container-Column">
          <h2>Международное развитие бренда BIM</h2>
          <div className="boxinternationaltext">
            <p>
              BIM активно развивает международное присутствие, сотрудничая с
              партнерами по всему миру.
            </p>
            <p>
              Сегодня BIM представлен в России, Казахстане, Узбекистане и других
              странах.
            </p>
          </div>
        </div>
      </section>

      <section className="franchises">
        <div className="container-Column">
          <h2>Форматы франшизы BIM</h2>
          <div className="franchisesboxrow">
            <img
              src={bimFranchises}
              className="franchises-image"
              alt="Франшизы"
            />
            <div className="boxcolumnfranchises">
              <h3>
                В Ташкенте создание подобного магазина будет ориентировано на
                местные особенности и предпочтения жителей, с акцентом на
                атмосферу, которая позволит каждому посетителю почувствовать
                себя частью чего-то большего. Это пространство будет сочетать в
                себе не только продажи, но и атмосферу города, его дух, что
                сделает бренд ближе к каждому и создаст уникальный опыт
                взаимодействия.
              </h3>
              <div className="boxonefranchises">
                <img src={tick} alt="Галочка" />
                <p>
                  Плащадь <b>- 775-100кв.м</b>
                </p>
              </div>
              <div className="boxonefranchises">
                <img src={tick} alt="Галочка" />
                <p>
                  Инвистиции <b>- от 10 000$</b>
                </p>
              </div>
              <div className="boxonefranchises">
                <img src={tick} alt="Галочка" />
                <p>
                  Сроки открытия <b>- от 45 дней</b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="partnership">
        <div className="container-Column">
          <div className="boxcolh1">
            <h2>Как стать партнером BIM</h2>
            <p>
              Для нас каждый партнер - единомышленник . Мы хотим привлекать в
              сеть близких по духу людей, которые разделяют наши ценности.
            </p>
          </div>
          <div className="boxrowpartnerssteps">
            <div className="boxonefranchises">
              <img src={tick} alt="Галочка" />
              <p>Уже имеет опыт удачного ведения бизнеса</p>
            </div>
            <div className="boxonefranchises">
              <img src={tick} alt="Галочка" />
              <p>Стремление к инновациям</p>
            </div>
            <div className="boxonefranchises">
              <img src={tick} alt="Галочка" />
              <p>Хочет расти и развиваться вместе с нами. </p>
            </div>
            <div className="boxonefranchises">
              <img src={tick} alt="Галочка" />
              <p>Креативность и вдохновение</p>
            </div>
            <div className="boxonefranchises">
              <img src={tick} alt="Галочка" />
              <p>
                Согласен пройти обучение и полностью погрузиться в
                бизнес-процессы.
              </p>
            </div>
            <div className="boxonefranchises">
              <img src={tick} alt="Галочка" />
              <p>Общие цели и ценности</p>
            </div>
          </div>
        </div>
      </section>

      <section className="partners">
        <div className="container">
          <div className="boxrowpartners">
            <div className="boxpartnersrowcolumn">
              <h2>Станьте партнером BIM</h2>
              <p>
                Если вы хотите стать частью нашей успешной команды, пожалуйста,
                оставьте заявку, заполнив форму. Мы рады будем познакомиться с
                вами очно, чтобы понять, подходим ли мы друг другу. 
              </p>
              <button className="button primary-button">Оставить заявку</button>
            </div>
            <img src={bimKepka} alt="Кепка" />
          </div>
        </div>
      </section>

      <section className="steps">
        <div className="container-Column">
          <h2>Этапы открытия лицензированния Bim</h2>
          <h4>Как начать бизнес?</h4>
          <div className="stepsline">
            <button
              className={currentStep === 1 ? "buttonactive" : "button"}
              onClick={() => handleStep(1)}
            >
              1
            </button>
            <button
              className={currentStep === 2 ? "buttonactive" : "button"}
              onClick={() => handleStep(2)}
            >
              2
            </button>
            <button
              className={currentStep === 3 ? "buttonactive" : "button"}
              onClick={() => handleStep(3)}
            >
              3
            </button>
            <button
              className={currentStep === 4 ? "buttonactive" : "button"}
              onClick={() => handleStep(4)}
            >
              4
            </button>
            <button
              className={currentStep === 5 ? "buttonactive" : "button"}
              onClick={() => handleStep(5)}
            >
              5
            </button>
            <button
              className={currentStep === 6 ? "buttonactive" : "button"}
              onClick={() => handleStep(6)}
            >
              6
            </button>
            <button
              className={currentStep === 7 ? "buttonactive" : "button"}
              onClick={() => handleStep(7)}
            >
              7
            </button>
          </div>
          <div className="boxOneStep">
            {currentStep === 1 && (
              <div className="FirstStep">
                <div className="boxsteptext">
                  <h6>ШАГ 1</h6>
                  <h3>Оставить заявку</h3>
                  <p>
                    Нам важно, чтобы потенциальный партнер смог лично
                    познакомиться с форматом, предлагаемым ассортиментом,
                    ценообразованием и целевой аудиторией BIM. До начала
                    переговоров мы просим вас предварительнолично посетить наши
                    торговые точки в Ташкенте.
                  </p>
                </div>
                <img src={bimOneStep} alt="Шаг 1" />
              </div>
            )}
            {currentStep === 2 && (
              <div className="FirstStep">
                <div className="boxsteptext">
                  <h6>ШАГ 2</h6>
                  <h3>Оставить заявку</h3>
                  <p>
                    Нам важно, чтобы потенциальный партнер смог лично
                    познакомиться с форматом, предлагаемым ассортиментом,
                    ценообразованием и целевой аудиторией BIM. До начала
                    переговоров мы просим вас предварительнолично посетить наши
                    торговые точки в Ташкенте.
                  </p>
                </div>
                <img src={bimOneStep} alt="Шаг 1" />
              </div>
            )}
            {currentStep === 3 && (
              <div className="FirstStep">
                <div className="boxsteptext">
                  <h6>ШАГ 3</h6>
                  <h3>Оставить заявку</h3>
                  <p>
                    Нам важно, чтобы потенциальный партнер смог лично
                    познакомиться с форматом, предлагаемым ассортиментом,
                    ценообразованием и целевой аудиторией BIM. До начала
                    переговоров мы просим вас предварительнолично посетить наши
                    торговые точки в Ташкенте.
                  </p>
                </div>
                <img src={bimOneStep} alt="Шаг 1" />
              </div>
            )}
            {currentStep === 4 && (
              <div className="FirstStep">
                <div className="boxsteptext">
                  <h6>ШАГ 4</h6>
                  <h3>Оставить заявку</h3>
                  <p>
                    Нам важно, чтобы потенциальный партнер смог лично
                    познакомиться с форматом, предлагаемым ассортиментом,
                    ценообразованием и целевой аудиторией BIM. До начала
                    переговоров мы просим вас предварительнолично посетить наши
                    торговые точки в Ташкенте.
                  </p>
                </div>
                <img src={bimOneStep} alt="Шаг 1" />
              </div>
            )}
            {currentStep === 5 && (
              <div className="FirstStep">
                <div className="boxsteptext">
                  <h6>ШАГ 5</h6>
                  <h3>Оставить заявку</h3>
                  <p>
                    Нам важно, чтобы потенциальный партнер смог лично
                    познакомиться с форматом, предлагаемым ассортиментом,
                    ценообразованием и целевой аудиторией BIM. До начала
                    переговоров мы просим вас предварительнолично посетить наши
                    торговые точки в Ташкенте.
                  </p>
                </div>
                <img src={bimOneStep} alt="Шаг 1" />
              </div>
            )}
            {currentStep === 6 && (
              <div className="FirstStep">
                <div className="boxsteptext">
                  <h6>ШАГ 6</h6>
                  <h3>Оставить заявку</h3>
                  <p>
                    Нам важно, чтобы потенциальный партнер смог лично
                    познакомиться с форматом, предлагаемым ассортиментом,
                    ценообразованием и целевой аудиторией BIM. До начала
                    переговоров мы просим вас предварительнолично посетить наши
                    торговые точки в Ташкенте.
                  </p>
                </div>
                <img src={bimOneStep} alt="Шаг 1" />
              </div>
            )}
            {currentStep === 7 && (
              <div className="FirstStep">
                <div className="boxsteptext">
                  <h6>ШАГ 7</h6>
                  <h3>Оставить заявку</h3>
                  <p>
                    Нам важно, чтобы потенциальный партнер смог лично
                    познакомиться с форматом, предлагаемым ассортиментом,
                    ценообразованием и целевой аудиторией BIM. До начала
                    переговоров мы просим вас предварительнолично посетить наши
                    торговые точки в Ташкенте.
                  </p>
                </div>
                <img src={bimOneStep} alt="Шаг 1" />
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="contacts">
        <div className="container">
          <div className="boxcontactscontainerrow">
            <div className="boxemail">
              <h6>Наша почта</h6>
              <h2>Support@bimproject.com</h2>
            </div>
            <div className="boxemail">
              <h6>Мы по номеру..</h6>
              <h2>+998 99 678 88 78</h2>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="container-Column">
          <div className="boxFooterLogo">
            <img src={logoWhite} alt="Логотип" />
          </div>
          <div className="boxcenterfooterinfo">
            <div className="boxfooterinfocolumns">
              <p>Концепция BIM</p>
              <p>Франшиза в цифрах</p>
              <p>Поддержка</p>
            </div>
            <div className="boxfooterinfocolumns">
              <p>Как стать партнером</p>
              <p>Анкета</p>
              <p>Политика конфиденциальности</p>
            </div>
            <div className="boxfooterinfocolumns">
              <p>Контакты</p>
              <p>+998 99 678 88 78</p>
              <div className="boxsocialnetworks">
                <a href="">
                  <img src={telegram} alt="Телеграм" />
                </a>
                <a href="">
                  <img src={insta} alt="Инстаграм" />
                </a>
              </div>
            </div>
          </div>
          <div className="boxrowallrights">
            <p>© Bim Inc., 2024 Все права защищены.</p>
            <p>Design & Dev by AbexLab</p>
          </div>
        </div>
      </footer>
      {isModalOpen && (
        <div className="modalOverlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>Связаться с BIM</h2>
            <div className="boxinputs">
              <input type="name" placeholder="Ф.И.О" />
              <input type="name" placeholder="Номер" />
              <input type="name" placeholder="Почта" />
              <input type="name" placeholder="Город" />
              <textarea
                name="format"
                placeholder="Напишите формат франшизы"
              ></textarea>
              <button className="button primary-button">Отправить</button>
            </div>
          </div>
        </div>
      )}

      {/* {isModalOpenAdaptive && (
        <div className="modalOverlay" onClick={() => setIsModalOpenAdaptive(false)}>
          <div className="modalAdaptive">

          </div>
        </div>
      )} */}
    </div>
  );
}

export default App;
