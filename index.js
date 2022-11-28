let imgZombie = document.querySelector('.img-zombie');
setTimeout(() => {
  divZombie.style.backgroundColor = 'rgba(199,85,85, 0.3)';
  divZombie.style.backgroundImage = 'url(/images/blood.png)';
  imgZombie.style.transform = 'scale(1)';
}, 400);

let divZombie = document.querySelector('.div-zombie');
divZombie.addEventListener('click', () => {
  divZombie.style.background = 'none';
  imgZombie.style.transform = 'scale(0)';
  let audio = new Audio('sound/TWDOriginalSoundtrack.mp3');
  audio.volume = 0.5;
  audio.play();
});

let events = [
  {
    title: 'Opening time',
    time: '11:00 ',
    presenter: 'Michelle Smith',
  },
  {
    title: 'Q&A with the cast',
    time: '12:00 ',
    presenter: 'Daniel Ward',
  },
  {
    title: 'Behind the scenes highlight',
    time: '14:00 ',
    presenter: 'Simon White',
  },
  {
    title: 'Q&A with the creators of the show',
    time: '16:00 ',
    presenter: 'Tim Bay',
  },
  {
    title: 'Never shown before material',
    time: '17:00 ',
    presenter: 'Sasha Daniels',
  },
  {
    title: 'Closing ceremony',
    time: '18:00 ',
    presenter: 'Sasha Daniels',
  },
];

let eventDivs = document.querySelectorAll('.event');
let modalHeader = document.querySelector('.modal-header');
let modalBody = document.querySelector('.modal-body');
let modalFooter = document.querySelector('.modal-footer');
let eventModal = document.querySelector('.event-modal');
const loadModal = (eventIdx) => {
  const event = events[eventIdx];
  const numEvent = parseInt(eventIdx) + 1;
  let pHeader = document.createElement('p');
  pHeader.innerText = `Attend event ${numEvent}`;
  modalHeader.innerHTML = pHeader.outerHTML;

  let pPresenter = document.createElement('p');
  pPresenter.innerText = `${event.title}`;
  modalBody.innerHTML = pPresenter.outerHTML;

  let pTime = document.createElement('p');
  pTime.innerText = `at ${event.time}`;
  modalFooter.innerHTML = pTime.outerHTML;
};

eventDivs.forEach((div) => {
  div.addEventListener('click', function (event) {
    event.stopPropagation();
    console.log('clicked');
    const eventClicked = event.currentTarget.dataset.eventIdx;
    eventModal.style.display = 'flex';
    loadModal(eventClicked);
  });
});

window.onclick = function (event) {
  if (event.target == eventModal) {
    eventModal.style.display = 'none';
  }
};
