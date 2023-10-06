import { blog, projects, tech, tools } from './datas.js';

// * Particles JS Library
// particlesJS('particles-js', {
//   particles: {
//     number: { value: 80, density: { enable: true, value_area: 800 } },
//     color: { value: '#ffffff' },
//     shape: { type: 'circle', stroke: { width: 0, color: '#000000' }, polygon: { nb_sides: 5 }, image: { src: 'img/github.svg', width: 100, height: 100 } },
//     opacity: { value: 0.5, random: true, anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false } },
//     size: { value: 3, random: true, anim: { enable: false, speed: 40, size_min: 0.1, sync: false } },
//     line_linked: { enable: true, distance: 150, color: '#ffffff', opacity: 0.4, width: 1 },
//     move: { enable: true, speed: 6, direction: 'none', random: false, straight: false, out_mode: 'out', bounce: false, attract: { enable: false, rotateX: 600, rotateY: 1200 } },
//   },
//   interactivity: {
//     detect_on: 'window',
//     events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'repulse' }, resize: true },
//     modes: { grab: { distance: 400, line_linked: { opacity: 1 } }, bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 }, repulse: { distance: 200, duration: 0.4 }, push: { particles_nb: 4 }, remove: { particles_nb: 2 } },
//   },
// });

// * Navbar Animation
const navbar = document.querySelector('.navbar');
let previousScrollPosition = window.scrollY;

function hideNavbar() {
  navbar.classList.add('hide');
  navbar.classList.remove('show');
}
function showNavbar() {
  navbar.classList.remove('show');
  navbar.classList.remove('hide');
}
function showNavbarBlur() {
  navbar.classList.add('show');
  navbar.classList.remove('hide');
}

window.addEventListener('scroll', () => {
  let currentScrollPosition = window.scrollY;
  if (currentScrollPosition == 0) {
    showNavbar();
  } else if (previousScrollPosition < currentScrollPosition) {
    hideNavbar();
  } else {
    showNavbarBlur();
  }
  previousScrollPosition = currentScrollPosition;
});

// * Burger Button
const burgerButton = document.querySelector('.dropdown-button');
const exitButton = document.querySelector('.exit');
const sidebar = document.querySelector('.sidebar');
const overlay = document.querySelector('.overlay');

function toggleBurgerButton() {
  burgerButton.classList.toggle('hide');
  sidebar.classList.toggle('active');
  overlay.classList.toggle('active');
  if (sidebar.classList.contains('active')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
}

burgerButton.addEventListener('click', () => toggleBurgerButton());
exitButton.addEventListener('click', () => toggleBurgerButton());
overlay.addEventListener('click', () => toggleBurgerButton());

// * Landing page Featured Project
const featuredContainer = document.querySelector('.featured-container');
const featuredItem = projects
  .slice(0, 3)
  .map((f) => showFeaturedProject(f))
  .join('');

if (featuredContainer !== null && featuredContainer !== undefined) {
  featuredContainer.innerHTML = featuredItem;
}

function showFeaturedProject(f) {
  return `
  <div class="project">
    <div class="image-project">
      <img src="./img/${f.image}" alt="image" loading="lazy" />
      <a href="${f.link}" target="_blank" rel="noopener noreferrer">
        <div class="overlay-project"></div>
      </a>
    </div>
    <div class="project-description">
      <div>
        <p>Featured Project</p>
        <h4>${f.name}</h4>
      </div>
      <div class="project-box">
        <p>${f.desc}</p>
      </div>
      <div class="project-tech list">
      <ul>
      ${f.stack.map((s) => `<li><img src="./svg/${s}" alt="icon"/></li>`).join('')}

      </ul>
      </div>
      <div class="project-link list">
        <ul>
          <li>
            <a href="${f.github}" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 496 512">
                <path
                  d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                />
              </svg>
            </a>
          </li>
          <li>
            <a href="${f.link}" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512">
                <path
                  d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  
  `;
}

// * selection active
const selected = document.querySelectorAll('.select div');
const selectContainer = document.querySelector('.select-detail');

selected.forEach((btn) => {
  btn.addEventListener('click', () => {
    if (btn.textContent === 'Education') {
      selectContainer.innerHTML = education();
    } else if (btn.textContent === 'Work Experience') {
      selectContainer.innerHTML = workExperience();
    } else if (btn.textContent === 'Participation') {
      selectContainer.innerHTML = participation();
    } else if (btn.textContent === 'Certification') {
      selectContainer.innerHTML = certification();
    } else {
      selectContainer.innerHTML = 'something went wrong';
    }
    selected.forEach((btn) => {
      btn.classList.remove('active');
    });
    btn.classList.add('active');
  });
});

if (selectContainer !== null && selectContainer !== undefined) {
  selectContainer.innerHTML = education();
}

// experience detail
function education() {
  return `
  <div class="detail">
    <div class="title">
      <h1>System Information</h1>
      <a href="https://www.instagram.com/official.unsika/" target="_blank" rel="noopener noreferrer">
        <h1 class="link">@University of Singaperbangsa Karawang</h1>
      </a>
      <h4>Sep 2020 - Present</h4>
    </div>
    <ul>
      <li>
        I enrolled in the System Information major because I have a deep passion for web development. I believe that the digital landscape and the internet are the future of how we interact, conduct business, and share
        information.
      </li>
      <li>
        In my third semester, I found my true passion for the world of web development. Exploring the intricacies of creating dynamic and user-friendly websites captivated my interest like never before. The ability to bring
        designs to life through coding and make information accessible to a global audience excited me.
      </li>
    </ul>
  </div>
  <div class="detail">
    <div class="title">
      <h1>Skilvul</h1>
      <a href="https://www.instagram.com/skilvul/" target="_blank" rel="noopener noreferrer">
        <h1 class="link">@Fullstack Development</h1>
      </a>
      <h4>Aug 2023 - Des 2023</h4>
    </div>
    <ul>
      <li>
        Following my growing interest in web development, I decided to take my skills to the next level by enrolling in Skilvul's Kampus Merdeka program as a full-stack developer. This step represented a significant milestone
        in my educational journey as it allowed me to immerse myself in a comprehensive curriculum tailored to web development.
      </li>
      <li>
        During my program, I've had the privilege of learning a wealth of knowledge and taking on numerous exciting projects. Each experience has been a valuable opportunity for growth and skill development. From mastering
        programming languages and frameworks to tackling real-world challenges through hands-on projects, I've gained a deep understanding of the field.
      </li>
      <div class="tech-learnt list">
        <h4>Technologies learnt</h4>
        <ul>
          <li>
            <img src="./svg/icons8-css.svg" alt="image" width="34" />
          </li>
          <li>
            <img src="./svg/icons8-html-5.svg" alt="image" width="34" />
          </li>
          <li>
            <img src="./svg/icons8-javascript.svg" alt="image" width="34" />
          </li>
          <li>
            <img src="./svg/icons8-react.svg" alt="image" width="34" />
          </li>
          <li>
            <img src="./svg/icons8-express-js.svg" alt="image" width="34" />
          </li>
          <li>
            <img src="./svg/icons8-node-js.svg" alt="image" width="34" />
          </li>
        </ul>
      </div>
    </ul>
  </div>`;
}

function workExperience() {
  return `
  <div class="detail">
    <div class="title">
      <h1>Fullstack Developer</h1>
      <a href="https://www.instagram.com/diskominfopwk/" target="_blank" rel="noopener noreferrer">
       <h1 class="link">@Dinas Komunikasi dan Informatika</h1>
      </a>
      <h4>Oct 2022 - Dec 2022</h4>
    </div>
    <ul>
      <li>
        During my internship at Diskominfo Purwakarta, I had the invaluable opportunity to work on a significant project that involved developing a website for Puskesmas Kota Purwakarta. This experience allowed me to apply my skills in web development, specifically utilizing CodeIgniter 4 and MySQL as the database. I played a pivotal role in the entire development process, from conceptualization to deployment.
      </li>
      <div class="tech-learnt list">
      <h4>Technologies used</h4>
      <ul>
        <li>
          <img src="./svg/icons8-css.svg" alt="image" width="34" />
        </li>
        <li>
          <img src="./svg/icons8-html-5.svg" alt="image" width="34" />
        </li>
        <li>
          <img src="./svg/icons8-javascript.svg" alt="image" width="34" />
        </li>
        <li>
          <img src="./svg/icons8-mysql.svg" alt="image" width="34" />
        </li>
        <li>
          <img src="./svg/codeigniter.svg" alt="image" width="34" />
        </li>
      </ul>
    </div>
    </ul>
  </div>
  `;
}

function participation() {
  return `
  <div class="detail">
    <div class="title">
      <h1>Scholarship for Learning Path of React Developer</h1>
      <a href="https://idcamp.ioh.co.id/" target="_blank" rel="noopener noreferrer">
      <h1 class="link">@IDCamp Indosat</h1>
      </a>
      <h4>Sep 2023 - Des 2023</h4>
    </div>
    <ul>
      <li>
        This initiative, sponsored by Indosat, provides a valuable scholarship opportunity to embark on a dedicated learning path focused on React. 
      </li>
      <li>
        As a participant, I have had the privilege of immersing myself in this dynamic and in-demand technology, gaining a comprehensive understanding of React and its applications.
      </li>
      <li>
        I earned a free course in dicoding to learn much about React JS.
      </li>
      <div class="tech-learnt list">
      <h4>Technologies learnt</h4>
      <ul>
        <li>
          <img src="./svg/icons8-javascript.svg" alt="image" width="34" />
        </li>
        <li>
          <img src="./svg/icons8-react.svg" alt="image" width="34" />
        </li>
      </ul>
    </div>
    </ul>
  </div>
  <div class="detail">
    <div class="title">
      <h1>Bapekraf Developer Day 2023 Participant</h1>
      <a href="https://bdd.kemenparekraf.go.id/" target="_blank" rel="noopener noreferrer">
        <h1 class="link">@kemenparekraf</h1>
      </a>
      <h4>May 2023</h4>
    </div>
    <ul>
      <li>
        I am deeply honored and grateful to have been awarded a scholarship to specialize in front-end web development through this program attend by Kemenparekraf.
      </li>
      <li>
        Learning path that i chose is front-end web developer
      </li>
      <div class="tech-learnt list">
      <h4>Technologies learnt</h4>
      <ul>
        <li>
          <img src="./svg/icons8-css.svg" alt="image" width="34" />
        </li>
        <li>
          <img src="./svg/icons8-html-5.svg" alt="image" width="34" />
        </li>
      </ul>
    </div>
    </ul>
  </div>
  <div class="detail">
    <div class="title">
      <h1>DevOps and Back-End Developer Scholarship Program</h1>
      <a href="https://aws.dicoding.com/?_gl=1*1g6u1vy*_gcl_au*OTY0NDM5MjY4LjE2ODg1MzAzODE." target="_blank" rel="noopener noreferrer">
        <h1 class="link">@AWS x Dicoding</h1>
      </a>
      <h4>Feb 2023</h4>
    </div>
    <ul>
      <li>
        Securing a spot from a thousands or more people in the AWS x Dicoding program for back-end development and DevOps.
      </li>
      <li>
        Chose a Back-end development for my learning path in this program to learn about web service, RESTful API, and Node JS(HAPI Framework).
      </li>
      <li>
        Built a project called Submission Bookshelf API.
      </li>
      <div class="tech-learnt list">
      <h4>Technologies learnt</h4>
      <ul>
        <li>
          <img src="./svg/icons8-node-js.svg" alt="image" width="34" />
        </li>
        <li>
          <img src="./svg/icons8-javascript.svg" alt="image" width="34" />
        </li>
      </ul>
    </div>
    </ul>
  </div>
  `;
}

function certification() {
  return `
  <div class="detail">
    <div class="title">
      <h1>Course</h1>
      <a href="https://www.instagram.com/diskominfopwk/" target="_blank" rel="noopener noreferrer">
       <h1 class="link">@Dicoding</h1>
      </a>
    </div>
    <ul>
      <li>
       <a href="https://drive.google.com/file/d/13-ZbZCOXADuZmcgusUFv8Js62NvCJ4vw/view?usp=sharing" target="_blank" rel="noopener noreferrer">Basic Web Programming</a>
      </li>
      <li>
       <a href="https://drive.google.com/file/d/1ks79PN8v5HAVjP1PcKm5V2OpQg_kPIH0/view?usp=sharing" target="_blank" rel="noopener noreferrer">Cloud Practitioner Essentials</a>
      </li>
      <li>
       <a href="https://drive.google.com/file/d/1Q_Cb1eM1f7rj-1nmW_cbr1lIaYNm1T0X/view?usp=sharing" target="_blank" rel="noopener noreferrer">Back-End for Beginner</a>
      </li>
      <li>
       <a href="https://drive.google.com/file/d/1QFVXh2ynRvtIkRoO3UzsjillNSLUAHPo/view?usp=sharing" target="_blank" rel="noopener noreferrer">Basic Javascript</a>
      </li>
      <div class="tech-learnt list">
      <h4>Technologies learnt</h4>
      <ul>
        <li>
          <img src="./svg/icons8-css.svg" alt="image" width="34" />
        </li>
        <li>
          <img src="./svg/icons8-html-5.svg" alt="image" width="34" />
        </li>
        <li>
          <img src="./svg/icons8-javascript.svg" alt="image" width="34" />
        </li>
        <li>
          <img src="./svg/icons8-node-js.svg" alt="image" width="34" />
        </li>
        <li>
          <img src="./svg/icons8-amazon-web-services.svg" alt="image" width="34" />
        </li>
      </ul>
    </div>
    </ul>
  </div>
  <div class="detail">
    <div class="title">
      <h1>Course</h1>
      <a href="https://www.instagram.com/skilvul/" target="_blank" rel="noopener noreferrer">
       <h1 class="link">@Skilvul</h1>
      </a>
    </div>
    <ul>
      <li>
       <a href="https://badgr.com/public/assertions/ilsKGOYOS2Sb5EKsvyt6vA?identity__email=hamzahraihanif@gmail.com" target="_blank" rel="noopener noreferrer">
        Basic HTML (Gold)
       </a>
      </li>
      <li>
       <a href="https://badgr.com/public/assertions/e9S1oovgQsC6PDh-NT4MVw?identity__email=hamzahraihanif@gmail.com" target="_blank" rel="noopener noreferrer">
        Basic CSS (Gold)
       </a>
      </li>
      <li>
       <a href="https://badgr.com/public/assertions/D_B6919AQRGJTDPOxBdTUA?identity__email=hamzahraihanif@gmail.com" target="_blank" rel="noopener noreferrer">
        Basic Javascript (Gold)
       </a>
      </li>
      <li>
       <a href="https://badgr.com/public/assertions/iUWJxGs_SwO--_t7aeEYYQ?identity__email=hamzahraihanif@gmail.com" target="_blank" rel="noopener noreferrer">
        Web Development Challenge (Silver)
       </a>
      </li>
      <div class="tech-learnt list">
      <h4>Technologies learnt</h4>
      <ul>
        <li>
          <img src="./svg/icons8-css.svg" alt="image" width="34" />
        </li>
        <li>
          <img src="./svg/icons8-html-5.svg" alt="image" width="34" />
        </li>
        <li>
          <img src="./svg/icons8-javascript.svg" alt="image" width="34" />
        </li>
      </ul>
    </div>
    </ul>
  </div>
  <div class="detail">
    <div class="title">
      <h1>Course</h1>
      <a href="https://www.sololearn.com/" target="_blank" rel="noopener noreferrer">
       <h1 class="link">@Sololearn</h1>
      </a>
    </div>
    <ul>
      <li>
       <a href="https://drive.google.com/file/d/18x0Rq7irUdKXFOddq55ICkmeR9HCT6gi/view?usp=sharing" target="_blank" rel="noopener noreferrer">
        CSS Course
       </a>
      </li>
      <div class="tech-learnt list">
      <h4>Technologies learnt</h4>
      <ul>
        <li>
          <img src="./svg/icons8-css.svg" alt="image" width="34" />
        </li>
      </ul>
    </div>
    </ul>
  </div>
  <div class="detail">
    <div class="title">
      <h1>Course</h1>
      <a href="https://www.sololearn.com/" target="_blank" rel="noopener noreferrer">
       <h1 class="link">@Progate</h1>
      </a>
    </div>
    <ul>
      <li>
       <a href="https://drive.google.com/file/d/1Fmi4YfOLrz9q5Mn2Fw-a4PesQ1ngPuTG/view?usp=sharing" target="_blank" rel="noopener noreferrer">
       Introduction to Programming Using HTML and CSS
       </a>
      </li>
      <div class="tech-learnt list">
      <h4>Technologies learnt</h4>
      <ul>
        <li>
          <img src="./svg/icons8-css.svg" alt="image" width="34" />
        </li>
        <li>
          <img src="./svg/icons8-html-5.svg" alt="image" width="34" />
        </li>
      </ul>
    </div>
    </ul>
  </div>
  `;
}

// * skill section
const techCardContainer = document.querySelector('.tech-container');
const techList = tech.map((tech) => showTechCard(tech)).join('');
if (techCardContainer !== null && techCardContainer !== undefined) {
  techCardContainer.innerHTML = techList;
}

function showTechCard(tech) {
  return `
  <div class="card">
    <img src="./svg/${tech.src}" alt="" width="40" />
    <div>
      <p class="language">${tech.name}</p>
      <p class="level">${tech.level}</p>
    </div>
  </div>
  `;
}

const toolsCardContainer = document.querySelector('.tools-container');
const toolsList = tools.map((tools) => showToolsCard(tools)).join('');
if (toolsCardContainer !== null && toolsCardContainer !== undefined) {
  toolsCardContainer.innerHTML = toolsList;
}

function showToolsCard(tools) {
  return `
  <div class="card">
    <img src="./svg/${tools.src}" alt="" width="40" height="40" />
    <div>
      <p class="language">${tools.name}</p>
      <p class="level">${tools.level}</p>
    </div>
  </div>
  `;
}

// * Card Project
const projectCardContainer = document.querySelector('.project-card-container');
const projectList = projects.map((prj) => showProjectsCard(prj)).join('');

if (projectCardContainer !== null && projectCardContainer !== undefined) {
  projectCardContainer.innerHTML = projectList;
}

// * filter project by category
const buttonsProject = document.querySelectorAll('.category');

buttonsProject.forEach((button) => {
  const selectedCategory = button.value;
  button.addEventListener('click', () => {
    selectedCategory == 'all' ? getAllProject() : getFilteredProjects(selectedCategory);
  });
});

function getAllProject() {
  const projectList = projects.map((prj) => showProjectsCard(prj)).join('');
  projectCardContainer.innerHTML = projectList;
}

function getFilteredProjects(selectedCategory) {
  const filteredProjects = projects.filter((project) => project.category == selectedCategory);
  const filtered = filteredProjects.map((prj) => showProjectsCard(prj)).join('');
  projectCardContainer.innerHTML = filtered;
}

function showProjectsCard(prj) {
  return `
  <div class="card-wrapper" id='${prj.category}'>
    <div class="card-image">
      <img src="./img/${prj.image}" alt="image" loading="lazy" decoding="async"/>
    </div>
    <div class="card-body">
      <div class="card-detail">
        <div class="title">
          <h3>${prj.name}</h3>
          ${
            prj.github
              ? `<a href="${prj.github}" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 496 512">
                    <path
                      d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                    />
                  </svg>
                </a>`
              : ''
          }
          
          ${
            prj.link
              ? `
                  <a href="${prj.link}" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 640 512">
                      <path
                        d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"
                      />
                    </svg>
                  </a>
                    `
              : ''
          }
         
        </div>
        <p>
          ${prj.desc}
        </p>
      </div>
      <div class="card-footer">
      ${prj.stack.map((s) => `<img src="./svg/${s}" alt="icon" />`).join('')}
      </div>
    </div>
  </div>
  `;
}

// * show blog list
const blogContainer = document.querySelector('.blog');
const cardArticles = blog.map((item) => blogList(item)).join('');

if (blogContainer !== null && blogContainer !== undefined) {
  blogContainer.innerHTML = cardArticles;
}

// if (blogContainer !== null && blogContainer !== undefined) {
//   blogContainer.addEventListener('click', (event) => {
//     const card = event.target.closest('.card-blog');
//     const close = event.target.closest('.exit-button');
//     if (card) {
//       const blogId = card.dataset.blogId;
//       const blogDetail = getBlogDetail(blogId);
//       if (blogContainer) {
//         blogContainer.innerHTML = blogDetail;
//       }
//     }
//     if (close) {
//       blogContainer.innerHTML = cardArticles;
//     }
//   });
// }

// function getBlogDetail(blogId) {
//   const blogItem = blog.find((b) => b.blogId == blogId);
//   return showBlogDetail(blogItem);
// }

function blogList(item) {
  return `
  <a href="blog-detail.html?blogId=${item.blogId}">
    <div class="card-blog card-wrapper" data-blog-id="${item.blogId}">
      <div class="card-image">
        <img src="./img/${item.image}" alt="image" loading="lazy" decoding="async" />
      </div>
      <div class="card-body">
        <div class="card-detail">
          <div class="title">
            <h3>${item.name}</h3>
          </div>
          <p>${item.date}</p>
          <p>
            ${item.desc}
          </p>
        </div>
      </div>
    </div>
  </a>
  `;
}

// * blog detail page
function getBlogIdFromURL() {
  const searchParams = new URLSearchParams(window.location.search);
  return searchParams.get('blogId');
}

function displayBlogDetail() {
  const detailContainer = document.querySelector('.detail-container');
  const blogId = getBlogIdFromURL();
  const blogItem = blog.find((b) => b.blogId == blogId);
  console.log(blogItem);
  if (blogItem) {
    detailContainer.innerHTML = showBlogDetail(blogItem);
  } else {
    detailContainer.innerHTML = `<p>Blog not Found</p>`;
  }
}

function showBlogDetail(b) {
  return `
  <div class="card-blog card-wrapper article">
    ${b.detail}
  </div>
  `;
}

window.addEventListener('DOMContentLoaded', displayBlogDetail);
