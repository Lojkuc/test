import './style/main.scss'

const blockSubscribe = document.querySelectorAll('.main-container__subscribe__block')
blockSubscribe.forEach((el)=>el.addEventListener('click',(e)=>{
  const target = e.currentTarget;
  if(target.className.split(" ")[1] != "active"){
    document.querySelector('.active').classList.remove('active')
    target.classList.add('active')
  }
}))
const apply = document.querySelector('.apply');
apply.addEventListener('click',(e)=>{
  if(document.querySelector('.active').firstElementChild.textContent == "Monthly"){
    location.href = 'https://apple.com/';
  }
  else{
    location.href = 'https://google.com/ ';
  }
})
