// * Particles JS Library
particlesJS('particles-js', {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: '#ffffff' },
    shape: { type: 'circle', stroke: { width: 0, color: '#000000' }, polygon: { nb_sides: 5 }, image: { src: 'img/github.svg', width: 100, height: 100 } },
    opacity: { value: 0.5, random: true, anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false } },
    size: { value: 3, random: true, anim: { enable: false, speed: 40, size_min: 0.1, sync: false } },
    line_linked: { enable: true, distance: 150, color: '#ffffff', opacity: 0.4, width: 1 },
    move: { enable: true, speed: 6, direction: 'none', random: false, straight: false, out_mode: 'out', bounce: false, attract: { enable: false, rotateX: 600, rotateY: 1200 } },
  },
  interactivity: {
    detect_on: 'canvas',
    events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' }, resize: true },
    modes: { grab: { distance: 400, line_linked: { opacity: 1 } }, bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 }, repulse: { distance: 200, duration: 0.4 }, push: { particles_nb: 4 }, remove: { particles_nb: 2 } },
  },
});

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

// selection active
const selected = document.querySelectorAll('.select div');
console.log('🚀 ~ file: script.js:73 ~ selected:', selected);
const selectContainer = document.querySelector('.select-detail');
console.log('🚀 ~ file: script.js:85 ~ selectContainer:', selectContainer);

selected.forEach((btn) => {
  btn.addEventListener('click', () => {
    console.log(btn.textContent);
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

selectContainer.innerHTML = education();

// experience detail
function education() {
  return `
  <div class="detail">
    <div class="title">
      <h1>System Information</h1>
      <a href="https://www.instagram.com/official.unsika/" target="_blank" rel="noopener noreferrer">
        <h1 class="place">@University of Singaperbangsa Karawang</h1>
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
        <h1 class="place">@Fullstack Development</h1>
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
       <h1 class="place">@Dinas Komunikasi dan Informatika</h1>
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
      <h1 class="place">@IDCamp Indosat</h1>
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
        <h1 class="place">@kemenparekraf</h1>
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
        <h1 class="place">@AWS x Dicoding</h1>
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
       <h1 class="place">@Dicoding</h1>
      </a>
    </div>
    <ul>
      <li>
       <a href="https://drive.google.com/file/d/13-ZbZCOXADuZmcgusUFv8Js62NvCJ4vw/view?usp=sharing" target="_blank" rel="noopener noreferrer">Basic Web Programming</a>
      </li>
      <li>
       <a href=""target="_blank" rel="noopener noreferrer">Cloud Practitioner Essentials</a>
      </li>
      <li>
       <a href=""target="_blank" rel="noopener noreferrer">Back-End for Beginner</a>
      </li>
      <li>
       <a href=""target="_blank" rel="noopener noreferrer">Basic Javascript</a>
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
  `;
}
