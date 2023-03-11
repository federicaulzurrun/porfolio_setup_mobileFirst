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

// projects info

const projectInfo = [
  {
    id: 0,
    name: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required',
    image: './img/Snapshoot Portfolio.png',
    technologies: ['html', 'css', 'javascript'],
    role: 'Back and dev',
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
    company: 'canopy',
    year: 2015,
    sourceLink: '#',
    demoLink: '#',
  },
];

// PopUp Window
const onMediaQueryModal = (width) => {
  if (window.matchMedia('(min-width: 767px)').matches) {
    return true;
  }
  return false;
};

const onMediaQueryModalMobile = (width) => {
  if (window.matchMedia('(max-width: 767px)').matches) {
    return true;
  }
  return false;
};

const onProjectButtonClick = (idProject, event) => {
  const modalTemplateMobile = document.getElementById('modal-template-mobile');
  const modalTemplateWeb = document.getElementById('modal-template-web');

  if ((onMediaQueryModal(event.screenX)) === true) {
    effectsOnModalWeb();
  }
  if ((onMediaQueryModalMobile(event.screenX)) === true) {
    effectsOnMobile();
  }

  const detail = projectDetailList.find((detail) => projectInfo.id === idProject);

  const arrayString = [];
  for (let el = 0; el < detail.technologies.length; el++) {
    const ListTech = `<li class="list-item col"><button type="button" class= "btn btn-tags">${projectInfo.technologies[el]}</button></li>`;
    arrayString.push(ListTech);
  }
  const projectString = arrayString.join('');

  // dynamic template for mobile
  const detailHtmlMobile = `

  <div class="d-flex bg-black h-100 w-100">
    <div class="d-flex flex-column justify-content-center m-5 pt-1 pb-4 px-3 row-gap-3 border rounded-3 border-primary" id="modal-heading-${projectInfo.id}">
      <div class="primary-text-block mx-2 d-flex flex-row">
        <h2 class="project-title pt-3 fs-1">${projectInfo.name}</h2>
        <div class="w-25">
          <button class="btn" onclick="MobileModaleClose()"><img src="./img/btncancelpopup.svg" alt=""></button>
        </div>
      </div> 
      <div class="frame-2 d-flex flex-row gap-3 mx-2 mt-2">
        <h6 class="client">${projectInfo.company}</h6>
        <img src="img/Counter.png" class="counter py-3">
        <p class= "client-role">${projectInfo.role}</p>
        <img src="img/Counter.png" class="counter py-3">
        <p class="client-year">${projectInfo.year}</p>
    </div> 
      <div class="m-2">
        <img src=${projectInfo.img} class="snapshoot w-100 px-0 mx-0">
      </div>
      <div class="mx-2 pt-4">
        <p class="mx-1">${projectInfo.description}</p>
        <ul class="tags-block d-flex flex-row list-unstyled gap-2">
          ${projectString}
        </ul>
        <div class="action">
          <button type="button" class="btn normal-b btn-outline-primary"> See live <img src="./img/live.svg" alt=""></button>
          <button type="button" class="btn normal-b btn-outline-primary"> See source <img src="./img/github.svg" alt=""></button>
        </div>
      </div>
    </div>
  </div>

    `;

  modalTemplateMobile.innerHTML = detailHtmlMobile;

  // dynamic template for web
  const detailHtmlWebModal = `
  <div class="d-flex bg-black h-100 w-100">
  <div class="d-flex flex-column justify-content-center m-5 pt-1 pb-4 px-3 row-gap-3 border rounded-3 border-primary" id="modal-heading-${projectInfo.id}">
  <div class="primary-text-block mx-2 d-flex flex-row">
    <h2 class="project-title pt-3 fs-1">${projectInfo.name}</h2>
        <div class="w-25 aling-item-end">
          <button class="btn btn-tags aling-self-end"><img src="./img/btncancelpopup.svg" alt=""></button>
        </div>
      </div> 
      <div class="frame-2 d-flex flex-row gap-3 mx-2 mt-2">
      <h6 class="client">${projectInfo.company}</h6>
      <img src="img/Counter.png" class="counter py-3">
      <p class= "client-role">${projectInfo.role}</p>
      <img src="img/Counter.png" class="counter py-3">
      <p class="client-year">${projectInfo.year}</p>
    </div> 
      <div class="m-2">
        <img src="img/Snapshoot Portfolio.png" class="snapshoot w-100 px-0 mx-0">
      </div>
      <div class="mx-2 pt-4 d-flex flex-row gap-3">
        <p class="mx-1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea</p>
        <div class=" d-flex flex-column">
          <ul class="tags-block d-flex flex-row list-unstyled gap-2 my-0">
            ${projectString}
          </ul>
          <ul class="tags-block d-flex flex-row list-unstyled gap-2 my-0">
            <li class="list-item col"><button type="button" class= "btn btn-tags">GitHub</button></li>
            <li class="list-item col"><button type="button" class= "btn btn-tags">Ruby</button></li>
            <li class="list-item col"><button type="button" class= "btn btn-tags">Bootstrap</button></li>
          </ul>
          <div class="action d-flex gap-2 pl-2 w-100">
            <button type="button" class="btn normal-b btn-outline-primary px-3"> See live <img src="./img/live.svg" alt=""></button>
            <button type="button" class="btn normal-b btn-outline-primary px-3"> See source <img src="./img/github.svg" alt=""></button>
          </div>
        </div>
      </div>
    </div>
  </div>
  `;
  modalTemplateWeb.innerHTML = detailHtmlWebModal;
};
