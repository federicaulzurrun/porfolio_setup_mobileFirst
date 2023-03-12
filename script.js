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

const firstCards = [
  {
    id: 0,
    name: 'Tonic',
    nameDesk: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required',
    image: './img/SnapshootPortfolio.png',
    imgDesk: './img/SnapshootPortfolio.png',
    technologies: {
      tech1: 'HTML',
      tech2: 'CSS',
      tech3: 'JavaScript',
    },
    counter: './img/Counter.png',
    role: 'Back and dev',
    company: 'canopy',
    year: 2015,
  }, {
    id: 1,
    name: 'Multi-post stories',
    nameDesk: 'Multi-post stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required',
    image: 'img/SnapshootPortfolio2.png',
    imgDesk: './img/SnapshootPortfolio2.png',
    technologies: {
      tech1: 'HTML',
      tech2: 'CSS',
      tech3: 'JavaScript',
    },
    counter: './img/Counter.png',
    role: 'Back and dev',
    company: 'canopy',
    year: 2015,
  },
  {
    id: 2,
    name: 'Tonic',
    nameDesk: 'Facebook 360',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required',
    image: './img/SnapshootPortfolio3.png',
    imgDesk: './img/SnapshootPortfolio3.png',
    technologies: {
      tech1: 'HTML',
      tech2: 'CSS',
      tech3: 'JavaScript',
    },
    counter: './img/Counter.png',
    role: 'Back and dev',
    company: 'canopy',
    year: 2015,
  },
  {
    id: 3,
    name: 'Multi-post stories',
    nameDesk: 'Uber Navigation',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required',
    image: './img/SnapshootPortfolio4.png',
    imgDesk: './img/SnapshootPortfolio4.png',
    technologies: {
      tech1: 'HTML',
      tech2: 'CSS',
      tech3: 'JavaScript',
    },
    counter: './img/Counter.png',
    role: 'Back and dev',
    company: 'canopy',
    year: 2015,
  },
];

const cardContainer = document.getElementById('card-container-one');

const renderFirstCards = (firstCards, cardContainer) => {
  firstCards.forEach((item) => {
    const cardLayout = document.createElement('div');
    cardLayout.id = `card${item.id}`;
    cardLayout.innerHTML = ` 
    <div class="works  works-two aling-self-center m-5 d-flex  justify-content-center">
            <img src=${item.image} class="snapshoot w-75">
            <img src=${item.imgDesk} class="photo-one">
            <div class="left-block">
                <div class="primary-text-block">
                    <h2 class="project-title">${item.name}</h2>
                    <h2 class="project-title-desktop">${item.nameDesk}</h2>
                    <div class="frame-2">
                        <h6 class="client">${item.company}</h6>
                        <img src="img/Counter.png" class="counter">
                        <p class= "client-role">${item.role}</p>
                        <img src="img/Counter.png" class="counter">
                        <p class="client-year">${item.year}</p>
                    </div>
                </div>
                <p class= "primary-text mx-2 my-3">A daily selection of privately personalized reads; no accounts or sign-ups required</p>
                <ul class="tags-block mt-3">
                    <li class="list-item"><button type="button" class= "btn btn-tags">${item.technologies.tech1}</button></li>
                    <li class="list-item"><button type="button" class= "btn btn-tags"> ${item.technologies.tech2}</button></li>
                    <li class="list-item"><button type="button" class= " btn btn-tags">${item.technologies.tech3}</button></li>
                </ul>
                <div class="action">
                    <button type="button" class="btn normal-b" data-modal-target="#popup${item.id}" > See project</button>
                </div>
            </div>
        </div>
    `;
    cardContainer.appendChild(cardLayout);
  });
};

renderFirstCards(firstCards, cardContainer);

const projectInfo = [
  {
    id: 0,
    name: 'Tonic',
    nameDesk: 'Tonic',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    image: './img/SnapshootPortfolio.png',
    technologies: {
      tech1: 'HTML',
      tech2: 'CSS',
      tech3: 'JavaScript',
      tech4: 'GitHub',
      tech5: 'Ruby',
      tech6: 'Bootstrap',
    },
    counter: './img/Counter.png',
    role: 'Back and dev',
    company: 'canopy',
    year: 2015,
    sourceLink: '#',
    demoLink: '#',
  },
  {
    id: 1,
    name: 'Multi-post stories',
    nameDesk: 'Multi-post stories',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    image: 'img/SnapshootPortfolio2.png',
    technologies: {
      tech1: 'HTML',
      tech2: 'CSS',
      tech3: 'JavaScript',
      tech4: 'GitHub',
      tech5: 'Ruby',
      tech6: 'Bootstrap',
    },
    counter: './img/Counter.png',
    role: 'Back and dev',
    company: 'canopy',
    year: 2015,
    sourceLink: '#',
    demoLink: '#',
  },
  {
    id: 2,
    name: 'Tonic',
    nameDesk: 'Facebook 360',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    image: './img/SnapshootPortfolio3.png',
    technologies: {
      tech1: 'HTML',
      tech2: 'CSS',
      tech3: 'JavaScript',
      tech4: 'GitHub',
      tech5: 'Ruby',
      tech6: 'Bootstrap',
    },
    counter: './img/Counter.png',
    role: 'Back and dev',
    company: 'canopy',
    year: 2015,
    sourceLink: '#',
    demoLink: '#',
  },
  {
    id: 3,
    name: 'Multi-post stories',
    nameDesk: 'Uber Navigation',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    image: './img/SnapshootPortfolio4.png',
    technologies: {
      tech1: 'HTML',
      tech2: 'CSS',
      tech3: 'JavaScript',
      tech4: 'GitHub',
      tech5: 'Ruby',
      tech6: 'Bootstrap',
    },
    counter: './img/Counter.png',
    role: 'Back and dev',
    company: 'canopy',
    year: 2015,
    sourceLink: '#',
    demoLink: '#',
  },
];
const firstCardContainer = document.getElementById('popup-container');

const renderCards = (projectInfo, containerName) => {
  projectInfo.forEach((cards) => {
    const card = document.createElement('div');
    card.classList = 'popup';
    card.id = `popup${cards.id}`;
    card.innerHTML = `
    <div class="d-flex flex-column justify-content-center 
    py-1 px-3 row-gap-3 pop-conteiner-devp mt-3 pt-5" id="modal-heading-${cards.id}">
      <div class="primary-text-block mx-2 d-flex flex-row justify-content-between w100 gap-4">
        <h2 class="project-title pt-3 fs-1">${cards.name}</h2>
        <h2 class="project-title-desktop pt-3 fs-1">${cards.nameDesk}</h2>
        <div class="d-flex aling-self-end btnpopup">
          <button class="btn popup-close-btn aling-self-end pt-4" data-close-button><img src="./img/btncancelpopup.svg" alt=""></button>
        </div>
      </div> 
      <div class="frame-2 d-flex flex-row mt-2">
        <h6 class="client">${cards.company}</h6>
        <img src=${cards.counter} class="counter">
        <p class= "client-role">${cards.role}</p>
        <img src=${cards.counter} class="counter">
        <p class="client-year">${cards.year}</p>
    </div> 
      <div class="m-2">
        <img src=${cards.image} class="snapshoot px-0 mx-0 mt-0">
      </div>
      <div class="mx-2 pt-4 part-two-pop">
        <p class="mx-1 pop-up-desc">${cards.description}</p>
        <div class="part-three-pop">
          <ul class="tags-block d-flex flex-row list-unstyled gap-2">
            <li class="list-item"><button type="button" class= "btn btn-tags"> ${cards.technologies.tech1}</button></li>
            <li class="list-item"><button type="button" class= "btn btn-tags"> ${cards.technologies.tech2}</button></li>
            <li class="list-item"><button type="button" class= " btn btn-tags"> ${cards.technologies.tech3}</button></li>
          </ul>
          <div class="action">
            <button type="button" class="btn normal-b btn-outline-primary"> See live <img src="./img/live.svg" alt=""></button>
            <button type="button" class="btn normal-b btn-outline-primary"> See source <img src="./img/github.svg" alt=""></button>
          </div>
        </div>
      </div>
    </div>
    `;
    containerName.appendChild(card);
  });
};

renderCards(projectInfo, firstCardContainer);

const closePopupButtons = document.querySelectorAll('[data-close-button]');
const openPopupButtons = document.querySelectorAll('[data-modal-target]');
const overlay = document.getElementById('overlay');

/* Open Popups Function */
const openPopup = (modal) => {
  if (modal == null) return;
  modal.classList.add('active');
  overlay.classList.add('active');
};

/* Close Popups Function */
const closePopup = (modal) => {
  if (modal == null) return;
  modal.classList.remove('active');
  overlay.classList.remove('active');
};

/* Opening Popups */
openPopupButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const popup = document.querySelector(button.dataset.modalTarget);
    openPopup(popup);
  });
});

/* Closing Popups */
closePopupButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const popup = button.closest('.popup');
    closePopup(popup);
  });
});

/* Closing the popup when clicking outside */

overlay.addEventListener('click', () => {
  const popups = document.querySelectorAll('.popup.active');
  popups.forEach((modal) => {
    closePopup(modal);
  });
});

/* validationForm */

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = document.querySelector('.error');

  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success');
};

const checkLowerCase = (str) => {
  const check = str.toString().toLowerCase();
  if (str === check) {
    return true;
  }
  return false;
};

const validateInputs = (e) => {
  e.preventDefault();
  const form = document.getElementById('form');
  const email = document.getElementById('email').value;
  const emailChecker = checkLowerCase(email);
  if (emailChecker) {
    form.action = 'https://formspree.io/f/mgebklpe';
    form.submit();
  } else {
    setError(email, 'Email should be written in lower case');
  }
};

const form = document.getElementById('form');
form.addEventListener('submit', validateInputs);
