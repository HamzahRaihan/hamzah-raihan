const tech = [
  {
    name: 'JavaScript',
    src: 'icons8-javascript.svg',
    level: 'Intermediate',
  },
  {
    name: 'HTML',
    src: 'icons8-html-5.svg',
    level: 'Advance',
  },
  {
    name: 'CSS',
    src: 'icons8-css.svg',
    level: 'Advance',
  },
  {
    name: 'Bootstrap',
    src: 'icons8-bootstrap.svg',
    level: 'Advance',
  },
  {
    name: 'Express JS',
    src: 'icons8-express-js.svg',
    level: 'Beginner',
  },
  {
    name: 'Node JS',
    src: 'icons8-node-js.svg',
    level: 'Beginner',
  },
  {
    name: 'React JS',
    src: 'icons8-react.svg',
    level: 'Beginner',
  },
  {
    name: 'Tailwind CSS',
    src: 'icons8-tailwind-css.svg',
    level: 'Beginner',
  },
  {
    name: 'Next JS',
    src: 'nextjs-icon-svgrepo-com.svg',
    level: 'Beginner',
  },
  {
    name: 'MongoDB',
    src: 'icons8-mongodb.svg',
    level: 'Beginner',
  },
  {
    name: 'CodeIgniter 4',
    src: 'codeigniter.svg',
    level: 'intermediate',
  },
  {
    name: 'MySQL',
    src: 'icons8-mysql.svg',
    level: 'intermediate',
  },
];

const tools = [
  {
    name: 'Figma',
    src: 'icons8-figma.svg',
    level: 'UI Design',
  },
  {
    name: 'Postman',
    src: 'icons8-postman.png',
    level: 'API',
  },
  {
    name: 'Github',
    src: 'icons8-github.svg',
    level: 'Repository',
  },
  {
    name: 'Git',
    src: 'icons8-git.svg',
    level: 'Version Control',
  },
];

const projects = [
  {
    id: 1,
    name: 'Landing Page GWA',
    image: 'landingpagegwa.png',
    github: 'https://github.com/HamzahRaihan/landing-page-gwa',
    link: 'https://landing-page-gwa.vercel.app/',
    desc: 'GreenWorldAware is a website for those of you who are environmentally aware, providing information, tips and platforms to help you make a clean contribution to a cleaner earth.',
    stack: ['icons8-css.svg', 'icons8-javascript.svg', 'icons8-html-5.svg'],
    category: 'website',
  },
  {
    id: 2,
    name: 'News York Times Clone',
    image: 'newsapp.png',
    github: 'https://github.com/HamzahRaihan/new-york-times-clone',
    link: 'https://new-york-times-clone-javascript.netlify.app/',
    desc: 'The New York Times Clone website is a website i built using javascript to train my knowledge about fetch, promise, async-await, and more. With this project i tried to create responsive yet visually appealing and UX friendly so user can use this website easily',
    stack: ['icons8-css.svg', 'icons8-javascript.svg', 'icons8-html-5.svg'],
    category: 'website',
  },
  {
    id: 3,
    name: 'Promptopia',
    image: 'promptopia.png',
    github: 'https://github.com/HamzahRaihan/promptopia-nextjs-app',
    link: 'https://promptopia-nextjs-app.vercel.app/',
    desc: 'This is my first dynamic website that using Next JS for fullstack and mongodb as a database. I built this website by following tutorial from javascript mastery. By creating this website i got motivated to learn and explore more about world of javascript',
    stack: ['icons8-tailwind-css.svg', 'nextjs-icon-svgrepo-com.svg', 'icons8-javascript.svg', 'icons8-mongodb.svg', 'icons8-node-js.svg'],
    category: 'website',
  },
  {
    id: 4,
    name: 'Rock Paper Scissor',
    image: 'tailwind-rockpaper.png',
    github: 'https://github.com/HamzahRaihan/rock-paper-tailwind',
    link: 'https://hamzahraihan.github.io/rock-paper-tailwind/',
    desc: "This website i've built while im learning javascript. I built it using tailwind instead so learn both javascript and tailwind at the same time. Visit this website if you want to try my first game ever!",
    stack: ['icons8-tailwind-css.svg', 'icons8-html-5.svg', 'icons8-javascript.svg'],
    category: 'website',
  },
  {
    id: 5,
    name: 'Pokemon React App',
    image: 'pokemonweb.png',
    github: 'https://github.com/HamzahRaihan/rock-paper-tailwind',
    link: 'https://pokemon-api-web-app.vercel.app/',
    desc: 'The Pokemon React App is a web application developed using React.js and JavaScript, built to serve an information around pokemon. Users can search for specific pokemon and will provide detail about pokemon that you searched..',
    stack: ['icons8-tailwind-css.svg', 'icons8-react.svg', 'icons8-javascript.svg'],
    category: 'website',
  },
  {
    id: 6,
    name: 'Notes API',
    image: 'notesapi.png',
    github: 'https://github.com/HamzahRaihan/submission-bookshelf',
    link: '',
    desc: 'The Notes API is a Node.js-based back-end development project created to fulfill the requirements of the Dicoding Back-End Development Challenge. It serves as a platform for managing a notes providing various endpoints for adding, retrieving, updating, and deleting notes data.',
    stack: ['icons8-node-js.svg'],
    category: 'website',
  },
  {
    id: 7,
    name: 'Personal Website',
    image: 'personalweb.png',
    github: 'https://github.com/HamzahRaihan/hamzah-raihan',
    link: '',
    desc: 'This website purposely made for my portfolio. I built this website to test how far i know about CSS, Semantic HTML, and JavaScript DOM. You currently in this website!',
    stack: ['icons8-css.svg', 'icons8-javascript.svg', 'icons8-html-5.svg'],
    category: 'website',
  },
  {
    id: 8,
    name: 'Movies React App',
    image: 'moviesreactapp.png',
    github: 'https://github.com/HamzahRaihan/movies-react-app',
    link: 'https://movietmdb-react-app.netlify.app/',
    desc: "I've built my first react website in this project. A very simple website to search your favorite movies. API i used in this project is TMDb API.",
    stack: ['icons8-bootstrap.svg', 'icons8-react.svg'],
    category: 'website',
  },
  {
    id: 9,
    name: 'GreenWorldAware UI Design',
    image: 'gwauidesign.png',
    github: '',
    link: '',
    desc: 'The Collaborative UI Design Project is a creative endeavor undertaken by a talented team of three individuals, aimed at conceptualizing, designing, and prototyping a user interface for a specific website called GreenWorldAware',
    stack: ['icons8-figma.svg'],
    category: 'uidesign',
  },
  {
    id: 10,
    name: 'Public Health Center Purwakarta',
    image: 'puskesmas.png',
    github: '',
    link: 'https://puskesmaskota.purwakartakab.go.id/',
    desc: 'The Public Health Center Website project is a web-based platform developed using CodeIgniter 4 and Bootstrap 5, designed to facilitate information around public health. This project was built for my internship program.',
    stack: ['codeigniter.svg', 'icons8-bootstrap.svg'],
    category: 'website',
  },
  {
    id: 11,
    name: 'Halo Medis',
    image: 'halomedis.png',
    github: '',
    link: '',
    desc: 'Halo Medis was designed for my university project. I was told to create a prototype for a topic that already been decided by lecturer. It was my first figma project.',
    stack: ['icons8-figma.svg'],
    category: 'uidesign',
  },
  {
    id: 12,
    name: 'Japan Blog',
    image: 'japanblog.png',
    github: '',
    link: '',
    desc: 'This UI Design was made by me to learn more about figma. This is UI Design for landing page of Japan Blog website',
    stack: ['icons8-figma.svg'],
    category: 'uidesign',
  },
];

const blog = [
  {
    blogId: 1,
    name: 'Building a New York Times Clone Website from Scratch with JavaScript, CSS, and HTML',
    image: 'newsapp.png',
    desc: "This is my first clone website made by nothing but JavaScript, CSS, and HTML. It took me quite some times to make, but it's worth it since i have to keep practicing my skills in web development.",
    date: 'October 2, 2023',
    detail: `
    <div class="card-image article">
      <img src="./img/newsapp.png" alt="image" loading="lazy" decoding="async" />
    </div>
    <div class="card-body">
      <div class="card-detail">
        <div class="title article">
          <h1>Building a New York Times Clone Website from Scratch with JavaScript, CSS, and HTML</h1>
          <p>Oktober 2, 2023</p>
        </div>
        <p>
          This is my first clone website made by nothing but JavaScript, CSS, and HTML. It took me quite some times to make, but it's worth it since i have to keep practicing my skills in web development. This website using
          <span class="link"><a href="https://developer.nytimes.com/">nytimes API</a></span> .Join me as I take you through the steps and challenges I faced in the making of new york times clone website.
        </p>
        <h1>Step 1: HTML Skeleton</h1>
        <p>
          I began by designing the basic structure of my website using HTML. I divided the page into sections like header, navigation, main content area, and footer. Each section had its own HTML tags and elements to replicate
          the structure of the New York Times site.
        </p>
        <h1>Step 2: Styling with CSS and Bootstrap 5</h1>
        <p>
          To make this website looks elegant, i began to search reference such what is new york times font used?, what colors they used?, responsive layout, and spacing. I've seen so many website of new york times clone so i
          decided to learn how they created it. I used CSS flexbox to organize and position the various content section. From this step, i leant about CSS nth-child that i thought i would never use it. This can create a very
          elegant layout
        </p>
        <h1>Step 3: Responsive Web</h1>
        <div class="card-image article" style="display: flex; align-items: flex-end; justify-content: center; gap: 20px">
          <img src="./img/responsivenytimes.png" alt="image" loading="lazy" decoding="async" style="width: 30%; height: 200px; object-fit: contain" />
          <img src="./img/responsivenytimesdesktop.png" alt="image" loading="lazy" decoding="async" style="width: 50%" />
        </div>
        <p>This step is to make website accessible by both mobile and desktop device. I use media queries and flexible layout to ensure that my clone website adapted to different screen size</p>
        <h1>Step 4: Dynamic Elements with JavaScript</h1>
        <p>
          One of the key features of the New York Times website is its dynamic navigation bar. To replicate this functionality, I used JavaScript to create a responsive menu that adapted to different screen sizes. To make my
          clone feel alive, I used JavaScript to fetch real-time news articles and headlines from an API. This dynamic content gave my clone a sense of authenticity, just like the New York Times.
        </p>
        <h1>At Last!</h1>
        <p>
          Building a New York Times clone website from scratch was a challenging yet rewarding endeavor. It pushed my skills in HTML, CSS, Bootstrap,and JavaScript to new level. Throughout this project, I gained a deeper
          appreciation for the work that goes into creating a sophisticated news website like the New York Times. <br /><br />While my clone may not have the vast resources and content of the original, it serves as a testament
          to what can be achieved with determination, creativity, and a solid foundation in web development. I hope this journey inspires you to take on ambitious projects of your own and explore the limitless possibilities of
          web development.
        </p>
      </div>
    </div>
  `,
  },
  {
    blogId: 2,
    name: 'My Journey as a Newcomer of Web Developer',
    image: 'webjourney.png',
    desc: 'When I first started my journey in web development, I had no idea what I was getting myself into. It was like diving into a vast ocean of coding languages, frameworks, and design principles.',
    date: 'October 2, 2023',
    detail: `
    <div class="card-image article">
      <img src="./img/webjourney.png" alt="image" loading="lazy" decoding="async" />
    </div>
    <div class="card-body">
      <div class="card-detail">
        <div class="title article">
          <h1>My Journey as a Newcomer of Web Developer</h1>
          <p>October 2, 2023</p>
        </div>
        <p>
          When I first started my journey in web development, I had no idea what I was getting myself into. It was like diving into a vast ocean of coding languages, frameworks, and design principles. But with determination and a little bit of googling, I slowly began to navigate my way through the world of web development. From learning the basics of HTML and CSS to mastering JavaScript and responsive design, every step of this journey has been a thrilling adventure. And now, after months of hard work and an incredible internship at Dinas komunikasi dan informasi, I can proudly say that I have gone from a beginner to a pro in web development.
        </p>
        <p>
          Starting as a beginner in web development has been both challenging and rewarding. It may seem like an intimidating task, but let me assure you, it is the best place to begin. Why? Because being a beginner means you have a clean slate and limitless potential. There is so much beauty in starting from scratch and building your skills from the ground up.
        </p>
        <p>
          One of the most exciting aspects of starting as a beginner is the rapid progress you'll make. Every small milestone that you achieve feels like a victory. From writing your first line of code to successfully designing your first webpage, each step forward fuels your enthusiasm and keeps you motivated.
        </p>
        <p>
          Moreover, starting as a beginner allows you to explore different programming languages and frameworks without any preconceived notions. You have the freedom to experiment and find what truly excites you. Whether you enjoy the structure of HTML and CSS or the logic of JavaScript, the possibilities are endless.
        </p>
        <p>
          As a beginner, you also have access to numerous online resources, tutorials, and communities that are specifically tailored to help you in your journey. Learning web development has never been easier, with platforms like Codecademy, Udemy, and YouTube offering a wealth of knowledge at your fingertips.
        </p>
        <p>
          Embrace your beginner status and embark on this joyful journey of learning web development. Don't be afraid to make mistakes and ask for help along the way. Remember, every expert was once a beginner, and each step you take brings you closer to becoming a pro.
        </p>
      </div>
    </div>
    `,
  },
];

export { tech, tools, projects, blog };
