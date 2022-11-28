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

(function (nav) {
  nav(document).ready(function () {
    nav(".navbar").hide();

    nav(function () {
      nav(window).scroll(function () {
        if (nav(this).scrollTop() > 100) {
          nav('.navbar').fadeIn();
        } else {
          nav('.navbar').fadeOut();
        }
      });
    });

  });
}(jQuery));

let audio = new Audio('sound/TWDOriginalSoundtrack.mp3');
audio.volume = 0.5;

document.body.addEventListener("mousemove", function () {
  audio.play()

})
