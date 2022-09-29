const uaBtn = document.querySelector(".ukr");
const engBtn = document.querySelector(".eng");

const main = document.querySelector('.main')

uaBtn.addEventListener('click', onUkrLangChange);
engBtn.addEventListener("click", onEngLangChange);

function onUkrLangChange() {
    main.innerHTML = `
    <div class="main">

      

      <div class="main__content">
        
        <div class="about">
          <h2 class="about__position">Front-End Developer</h2>
          <h1 class="about__name">Артем Карпенко</h1>
          <p class="about__discription">
            В даний момент я вчуся в GoIT на фул-стек розробника. Я вже завершив вивчення блоків HTML/CSS та JavaSvript, і я не можу дочекатись, щоб почати застосовувати свої знання на практиці. Нижче ви можете побачити приклади моїх робіт.<br />
          </p>
        </div>
        
        <div class="projects">
          <h3 class="title">Проекти</h3>
          <ul class="projects__list">
            <li class="projects__item">
              <span class="projects__description"
                ><a
                  href="https://ozozai12.github.io/goit-markup-hw-08/"
                  class="projects__link"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  >WebStudio</a
                >
                ............................................................................................
                <span class="projects__brecket">[</span> HTML5, CSS3
                <span class="project-brecket">]</span>
              </span>
            </li>
            <li class="projects__item">
              <span class="projects__description" id="donuts"
                ><a
                  href="https://ozozai12.github.io/donuts/"
                  class="projects__link"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  >Oh My Donuts (в якості тімлідера)</a
                >
                .............................................
                <span class="projects__brecket">[</span> HTML5, CSS3
                <span class="project-brecket">]</span>
              </span>
            </li>
            <li class="projects__item">
              <span class="projects__description" id="filmoteka"
                ><a
                  href="https://ozozai12.github.io/filmoteka/"
                  class="projects__link"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  >Filmoteka (в якості тімлідера)</a
                >
                ......................................................
                <span class="projects__brecket">[</span> HTML5, CSS3, JS
                <span class="project-brecket">]</span>
              </span>
            </li>
          </ul>
        </div>
        
        <div class="work">
          <h3 class="title">Досвід роботи</h3>
          
          <div>
            <h4 class="work__position">
              Виробник фотофонів (індивідуальний підприємець)
              <span class="organization">Fotofon.Dream</span>
            </h4>
            <p class="period">
              Червень 2016 і по сьогодні <span class="line">|</span> Україна
            </p>
            <ul class="work__list">
              <li class="work__activity">
                Виготовлення та продаж фотофонів із натуральної деревини та декоративних штукатурок по Україні та за кородон;
              </li>
              <li class="work__activity">
                Закупка матеріалів, пакування фотофонів, відправка;
              </li>
              <li class="work__activity">
                Комунікація з клієнтами, допомога з вибором кольорів і фактур фонів, вирішення проблем з продукцією або доставкою;
              </li>
              <li class="work__activity">SEO для Етсі-акаунту.</li>
            </ul>
          </div>
          
          <div>
            <h4 class="work__position">
              Конструктор <span class="organization">Alviss</span>
            </h4>
            <p class="period">
              Травень 2015 - Червень 2016 <span class="line">|</span> Україна
            </p>
            <ul class="work__list">
              <li class="work__activity">
                Проектування тимчасових конструкцій з алюмінія і заліза;
              </li>
              <li class="work__activity">
                Підготовка і роздруковування технічної документації для тимчасових конструкцій;
              </li>
              <li class="work__activity">
                Виїзд на майданчики для проведення замірювань для встановлювання тимчасових конструкцій;
              </li>
              <li class="work__activity">Авторський нагляд.</li>
            </ul>
          </div>
          
          <div>
            <h4 class="work__position">
              Сервісний майстер <span class="organization">Coffeeman</span>
            </h4>
            <p class="period">
              Травень 2014 - Травень 2015 <span class="line">|</span> Україна
            </p>
            <ul class="work__list">
              <li class="work__activity">
                Ремонт і обслуговування кавових апаратів;
              </li>
              <li class="work__activity">Комунікація з клієнтами;</li>
              <li class="work__activity">
                Замовлення запасних частин для ремонту кавових машин.
              </li>
            </ul>
          </div>
        </div>
        
        <div class="education">
          <h3 class="title">Освіта</h3>
          <h4 class="education__organization">GoIT</h4>
          <h5 class="facultat">Full-Stack Developer</h5>
          <p class="period">Березень 2022 і по сьогодні | Україна</p>

          <h4 class="education__organization">
            Національний технічний університет України <br />
            “Київський Політехнічний Інститут імені Ігоря Сікорського”
          </h4>
          <h5 class="facultat">
            Електромеханічні системи автоматизації та електропривод
          </h5>
          <p class="period">Вересень 2008 - Лютий 2014 | Україна</p>
        </div>
      </div>
      <!--Sidebar-->
      <aside class="sidebar">
        <img
          src="img/photo_2021-12-29_14-02-15.jpg"
          alt="Artem Karpenko photo"
          height="555"
          class="photo"
        />
        
        <div class="contacts">
          <h3 class="sidebar__title">Контакти</h3>
          <div>
            <p class="contacts__type">
              <svg class="icons" width="25" height="25">
                <use href="./img/icons.svg#telegram"></use>
              </svg>
              <a href="https://t.me/Chromaton" class="contacts__link" target="_blank"
                >+38 063 621 39 23</a
              >
            </p>
            <p class="contacts__type">
              <svg class="icons" width="25" height="25">
                <use href="./img/icons.svg#mail"></use>
              </svg>
              <a href="mailto:dante120591@gmail.com" class="contacts__link"
                >dante120591@gmail.com</a
              >
            </p>
            <p class="contacts__type">
              <svg class="icons" width="25" height="25">
                <use href="./img/icons.svg#github"></use>
              </svg>
              <a href="https://github.com/Ozozai12" class="contacts__link" target="_blank"
                >Ozozai12</a
              >
            </p>
          </div>
        </div>
        
        <div class="techskills">
          <h3 class="sidebar__title">Технічні навички</h3>
          <ul class="skills__list">
            <li><span class="skills__item">HTML5</span></li>
            <li><span class="skills__item">CSS3</span></li>
            <li><span class="skills__item">JavaScript</span></li>
          </ul>
        </div>
        <!--Softskills-->
        <div class="softskills">
          <h3 class="sidebar__title">Soft Skills</h3>
          <ul class="skills__list">
            <li><span class="skills__item">Комунікабельність</span></li>
            <li><span class="skills__item">Ввічливість</span></li>
            <li><span class="skills__item">Гнучкість</span></li>
            <li><span class="skills__item">Відповідальність</span></li>
            <li><span class="skills__item">Командна робота</span></li>
          </ul>
        </div>
        <!--AdditionalSkills-->
        <div class="addskills">
          <h3 class="sidebar__title">Додаткові навички</h3>
          <ul class="skills__list">
            <li><span class="skills__item">Водійське посвідчення кат.В</span></li>
            <li><span class="skills__item">AutoCAD</span></li>
            <li><span class="skills__item">Англійська - Intermediate</span></li>
            <li><span class="skills__item">Німецька - Intermediate</span></li>
          </ul>
        </div>
      </aside>
    </div>`; 
}

function onEngLangChange() {
    main.innerHTML = `
    <div class="main">
      
      <!--Main content-->
      <div class="main__content">
        <!--About me-->
        <div class="about">
          <h2 class="about__position">Front-End Developer</h2>
          <h1 class="about__name">Artem Karpenko</h1>
          <p class="about__discription">
            I am studying at GoIT as a full-stack developer. I have completed
            the HTML/CSS and JS training blocks and I am eager to put my knowledge into
            practice. Below you can see examples of my work. <br />
          </p>
        </div>
        <!--Projects-->
        <div class="projects">
          <h3 class="title">Projects</h3>
          <ul class="projects__list">
            <li class="projects__item">
              <span class="projects__description"
                ><a
                  href="https://ozozai12.github.io/goit-markup-hw-08/"
                  class="projects__link"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  >WebStudio</a
                >
                ............................................................................................
                <span class="projects__brecket">[</span> HTML5, CSS3
                <span class="project-brecket">]</span>
              </span>
            </li>
            <li class="projects__item">
              <span class="projects__description" id="donuts"
                ><a
                  href="https://ozozai12.github.io/donuts/"
                  class="projects__link"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  >Oh My Donuts (as Teamleader)</a
                >
                .....................................................
                <span class="projects__brecket">[</span> HTML5, CSS3
                <span class="project-brecket">]</span>
              </span>
            </li>
            <li class="projects__item">
              <span class="projects__description" id="filmoteka"
                ><a
                  href="https://ozozai12.github.io/filmoteka/"
                  class="projects__link"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  >Filmoteka (as Teamleader)</a
                >
                ..............................................................
                <span class="projects__brecket">[</span> HTML5, CSS3, JS
                <span class="project-brecket">]</span>
              </span>
            </li>
          </ul>
        </div>
        <!--Work-->
        <div class="work">
          <h3 class="title">Work Expirience</h3>
          <!--Company1-->
          <div>
            <h4 class="work__position" id="fotofon">
              Backdrops maker (individual entrepreneur)
              <span class="organization">Fotofon.Dream</span>
            </h4>
            <p class="period" id="fotofon-period">
              June 2016 - up to now <span class="line">|</span> Ukraine
            </p>
            <ul class="work__list">
              <li class="work__activity">
                Production and sale of natural wood backdrops and decorative
                plasters in Ukraine and on the Etsy marketplace.
              </li>
              <li class="work__activity">
                Purchase of materials, packaging of backdrops, sending them
                across Ukraine and abroad.
              </li>
              <li class="work__activity">
                Communication with customers, assistance with choosing a
                backdrop, solving problems related to the product or delivery.
              </li>
              <li class="work__activity">SEO for an Etsy account.</li>
            </ul>
          </div>
          <!--Company2-->
          <div>
            <h4 class="work__position" id="alviss">
              Constructor <span class="organization">Alviss</span>
            </h4>
            <p class="period" id="alviss-period">
              May 2015 - June 2016 <span class="line">|</span> Ukraine
            </p>
            <ul class="work__list">
              <li class="work__activity">
                Design of temporary structures made of iron and aluminum.
              </li>
              <li class="work__activity">
                Preparation and printing of technical documentation for
                temporary structures.
              </li>
              <li class="work__activity">
                Departure to the installation site and measurement of the site
                for the installation of temporary structures.
              </li>
              <li class="work__activity">Author's supervision.</li>
            </ul>
          </div>
          <!--Company3-->
          <div>
            <h4 class="work__position" id="coffeeman">
              Serviceman <span class="organization">Coffeeman</span>
            </h4>
            <p class="period" id="coffeeman-period">
              May 2014 - May 2015 <span class="line">|</span> Ukraine
            </p>
            <ul class="work__list">
              <li class="work__activity">
                Repair and maintenance of coffee machines.
              </li>
              <li class="work__activity">Communication with customers.</li>
              <li class="work__activity">
                Ordering spare parts for repairing coffee machines.
              </li>
            </ul>
          </div>
        </div>
        <!--Education-->
        <div class="education">
          <h3 class="title">Education</h3>
          <h4 class="education__organization">GoIT</h4>
          <h5 class="facultat">Full-Stack Developer</h5>
          <p class="period">March 2022 till now | Ukraine</p>

          <h4 class="education__organization">
            National Technical University of Ukraine <br />
            “Igor Sikorsky Kyiv Polytechnic Institute”
          </h4>
          <h5 class="facultat">
            Electromechanical automation systems and electric drive
          </h5>
          <p class="period">September 2008 - February 2014 | Ukraine</p>
        </div>
      </div>
      <!--Sidebar-->
      <aside class="sidebar">
        <img
          src="img/photo_2021-12-29_14-02-15.jpg"
          alt="Artem Karpenko photo"
          height="555"
          class="photo"
        />
        <!--Contacts-->
        <div class="contacts">
          <h3 class="sidebar__title">Contacts</h3>
          <div>
            <p class="contacts__type">
              <svg class="icons" width="25" height="25">
                <use href="./img/icons.svg#telegram"></use>
              </svg>
              <a href="https://t.me/Chromaton" class="contacts__link" target="_blank"
                >+38 063 621 39 23</a
              >
            </p>
            <p class="contacts__type">
              <svg class="icons" width="25" height="25">
                <use href="./img/icons.svg#mail"></use>
              </svg>
              <a href="mailto:dante120591@gmail.com" class="contacts__link"
                >dante120591@gmail.com</a
              >
            </p>
            <p class="contacts__type">
              <svg class="icons" width="25" height="25">
                <use href="./img/icons.svg#github"></use>
              </svg>
              <a href="https://github.com/Ozozai12" class="contacts__link" target="_blank"
                >Ozozai12</a
              >
            </p>
          </div>
        </div>
        <!--TechSkills-->
        <div class="techskills">
          <h3 class="sidebar__title">Tech Skills</h3>
          <ul class="skills__list">
            <li><span class="skills__item">HTML5</span></li>
            <li><span class="skills__item">CSS3</span></li>
            <li><span class="skills__item">JavaScript</span></li>
          </ul>
        </div>
        <!--Softskills-->
        <div class="softskills">
          <h3 class="sidebar__title">Soft Skills</h3>
          <ul class="skills__list">
            <li><span class="skills__item">Communicability</span></li>
            <li><span class="skills__item">Courtesy</span></li>
            <li><span class="skills__item">Agility</span></li>
            <li><span class="skills__item">Responsibility</span></li>
            <li><span class="skills__item">Teamwork</span></li>
          </ul>
        </div>
        <!--AdditionalSkills-->
        <div class="addskills">
          <h3 class="sidebar__title">Additional Skills</h3>
          <ul class="skills__list">
            <li><span class="skills__item">Сat.B driver's license</span></li>
            <li><span class="skills__item">AutoCAD</span></li>
            <li><span class="skills__item">English - Intermediate</span></li>
            <li><span class="skills__item">German - Intermediate</span></li>
          </ul>
        </div>
      </aside>
    </div>`;    
}

