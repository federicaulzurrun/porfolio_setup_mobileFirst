/* eslint linebreak-style: ["error", "windows"] */

const hamburger = document.querySelector('.nav-log');
const navMenu = document.querySelector('.nav-menu');
const containerMain = document.querySelector('.container-main');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  containerMain.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
  containerMain.classList.remove('active');
}));

/* popUps */

const projectInfo = [
  {
    id: 0,
    name: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required',
    image: './img/Snapshoot Portfolio.png',
    technologies: ['html', 'css', 'javascript'],
    role: 'Back and dev',
    counter: './img/Counter.png',
    company: 'canopy',
    year: 2015,
    sourceLink: '#',
    demoLink: '#',
  },
  {
    id: 1,
    name: 'Multi-post stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required',
    image: './img/SnapshootPortfolio2.png',
    technologies: ['html', 'css', 'javascript'],
    role: 'Back and dev',
    counter: './img/Counter.png',
    company: 'canopy',
    year: 2015,
    sourceLink: '#',
    demoLink: '#',
  },
  {
    id: 2,
    name: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required',
    image: './img/SnapshootPortfolio3.png',
    technologies: ['html', 'css', 'javascript'],
    role: 'Back and dev',
    counter: './img/Counter.png',
    company: 'canopy',
    year: 2015,
    sourceLink: '#',
    demoLink: '#',
  },
  {
    id: 3,
    name: 'Multi-post stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required',
    image: './img/SnapshootPortfolio4.png',
    technologies: ['html', 'css', 'javascript'],
    role: 'Back and dev',
    counter: './img/Counter.png',
    company: 'canopy',
    year: 2015,
    sourceLink: '#',
    demoLink: '#',
  },
];

const projectsButtons = (idProject) => {
  const information = projectInfo.find((information) => information.id === idProject);
  const modalMobile = document.getElementById('modals');

  const arrayString = [];
  /* (let el = 0; el < information.technologies.length; el++) */

  for (let el = 0; el < information.technologies.length; el++) {
    console.log(information.technologies[el]);
    /* const li = `<li class="modal-btn-li">${information.technologies[el]}</li>`;
    arrayString.push(li); */
  }

  const projectString = arrayString.join('');

  const detail = `
    <div class="d-flex bg-black h-100 w-100">
    <div id="${information.id}" class="d-flex flex-column justify-content-center m-5 pt-1 pb-4 px-3 row-gap-3 border rounded-3 border-primary">
      <div class="primary-text-block mx-2 d-flex flex-row">
        <h2 class="project-title pt-3 fs-1">${information.name}</h2>
        <div class="w-25">
          <span class= "span-pop"></span>
          <span  class= "span-pop"></span>
        </div>
      </div> 
      <div class="frame-2 d-flex flex-row gap-3 mx-2 mt-2">
        <h6 class="client">${information.company}</h6>
        <img src="${information.counter}" class="counter py-3">
        <p class= "client-role">${information.role}</p>
        <img src="${information.counter}" class="counter py-3">
        <p class="client-year">${information.year}</p>
    </div> 
      <div class="m-2">
        <img src="${information.image}" class="snapshoot w-100 px-0 mx-0">
      </div>
      <div class="mx-2 pt-4">
        <p class="mx-1">${information.description}</p>
        <ul class="tags-block d-flex flex-row list-decoration-none gap-2">
          ${projectString}
        </ul>
        <div class="action">
          <button type="button" class="btn normal-b btn-outline-primary"> See live</button>
          <button type="button" class="btn normal-b btn-outline-primary"> See source</button>
        </div>
      </div>
    </div>
  </div>`;

  modalMobile.innerHTML = detail;
  modalMobile.display = 'block';
};

projectsButtons();
