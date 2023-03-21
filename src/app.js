
import './style/main.scss'
const langArr = ['en','es','fr','ja','nl','ru','zh']

class App{
  getJSON(hash){
    const request = new XMLHttpRequest();
    request.open("GET",`./localization/${hash}.json`, false);
    request.send(null);
    const jsonData = JSON.parse(request.responseText);
    return jsonData
  }
  changeLanguage(){
    let hash = window.location.href.toString();
    hash = hash.slice(hash.indexOf("=")+1)
    if(!langArr.includes(hash)){
    history.pushState(null, "", `?lang=en`);
    hash = "en"
    }
    const result = this.getJSON(hash);
    for(let el in Object.values(result)){
      if(el == 2) continue
      document.querySelector('.lang-'+el).textContent = Object.values(result)[el];
      if(el == 0 && hash != "en"){
        document.querySelector('.header').style.marginBottom = '120px'
        document.querySelector('.footer').style.marginTop = '30px'
      }
      if(hash == "ru"){
        document.querySelector('.header').style.marginBottom = '85px'
      }
      if(hash == "fr"){
        document.querySelector('.header').style.marginBottom = '60px'
      }
      if(hash == "zh"){
        document.querySelector('.header').style.marginBottom = '170px'
      }
      if(hash == "nl"){
        document.querySelector('.header').style.marginBottom = '95px'
      }
      if(hash == "ja" || hash == 'es'){
        document.querySelector('.footer').style.marginTop = '50px'
      }
    }

  }
  eventListener(){
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
  }
}
const app = new App()
app.changeLanguage()
app.eventListener()



