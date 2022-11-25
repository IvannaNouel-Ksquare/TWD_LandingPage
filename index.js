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
