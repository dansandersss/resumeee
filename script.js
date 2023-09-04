const modaleWindow=document
.querySelector('.modale-window');
const modaleBtn=document.querySelector('.modale-btn')
const openBtn=document.querySelector('.open-window')
const body=document.querySelector('body');


modaleBtn.addEventListener("click", closeWindow);

openBtn.addEventListener('click', openModale);

function closeWindow(){
  modaleWindow.classList.toggle('none');
  openBtn.classList.toggle('seen');
}

function openModale(){
  modaleWindow.classList.remove('none');
  openBtn.classList.remove('seen')
  // body.style.opacity="0.3";

}






























































