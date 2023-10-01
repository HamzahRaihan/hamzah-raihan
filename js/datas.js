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
    name: 'Rock Paper Scissor',
    image: 'tailwind-rockpaper.png',
    github: 'https://github.com/HamzahRaihan/rock-paper-tailwind',
    link: 'https://hamzahraihan.github.io/rock-paper-tailwind/',
    desc: "This website i've built while im learning javascript. I built it using tailwind instead so learn both javascript and tailwind at the same time. Visit this website if you want to try my first game ever!",
    stack: ['icons8-tailwind-css.svg', 'icons8-html-5.svg', 'icons8-javascript.svg'],
    category: 'website',
  },
  {
    id: 4,
    name: 'Pokemon React App',
    image: 'pokemonweb.png',
    github: 'https://github.com/HamzahRaihan/rock-paper-tailwind',
    link: 'https://pokemon-api-web-app.vercel.app/',
    desc: 'The Pokemon React App is a web application developed using React.js and JavaScript, built to serve an information around pokemon. Users can search for specific pokemon and will provide detail about pokemon that you searched..',
    stack: ['icons8-tailwind-css.svg', 'icons8-react.svg', 'icons8-javascript.svg'],
    category: 'website',
  },
  {
    id: 5,
    name: 'Promptopia',
    image: 'promptopia.png',
    github: 'https://github.com/HamzahRaihan/promptopia-nextjs-app',
    link: 'https://promptopia-nextjs-app.vercel.app/',
    desc: 'This is my first dynamic website that using Next JS for fullstack and mongodb as a database. I built this website by following tutorial from javascript mastery. By creating this website i got motivated to learn and explore more about world of javascript',
    stack: ['icons8-tailwind-css.svg', 'nextjs-icon-svgrepo-com.svg', 'icons8-javascript.svg', 'icons8-mongodb.svg', 'icons8-node-js.svg'],
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
];

console.log(projects[1].stack);

export { tech, tools, projects };
