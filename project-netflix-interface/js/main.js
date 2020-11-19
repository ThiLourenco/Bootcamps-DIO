let btn_play = document.querySelector('.btn');
let btn_info = document.querySelector('.btn2');
let btn_close = document.querySelector('.close');
let btn_close_info = document.querySelector('.close-btn')

btn_play.addEventListener('click', e => {
  toggle();
});

btn_close.addEventListener('click', e => {
  toggle();
});

btn_info.addEventListener('click', e => {
  togglePopUp();
  
});

btn_close_info.addEventListener('click', e => {
  togglePopUp();
  
})

function toggle() {
  let trailer = document.querySelector('.trailer');
  trailer.classList.toggle('active'); 
}

function togglePopUp() {
  let popup = document.querySelector('.popup');
  popup.classList.toggle('active');
}