import Icon from './scone.png';
import './style.css';

(function headerFunc() {

    const header = document.querySelector('#header');
    
    const home = document.createElement('button');
    home.setAttribute('class', 'home');
    home.innerText = "HOME";
    header.appendChild(home);

    const recipe = document.createElement('button');
    recipe.setAttribute('class', 'recipe');
    recipe.innerText = "RECIPE";
    header.appendChild(recipe);

    const about = document.createElement('button');
    about.setAttribute('class', 'about');
    about.innerText = "ABOUT"
    header.appendChild(about);
})();


(function contentFunc () {

    

    const content = document.querySelector('#content');

    const heading = document.createElement('div');
    heading.setAttribute('id', 'head');
    heading.innerHTML = "<h1> Scone but not forgotten</h1>";
    content.appendChild(heading);

    const sconeImg = new Image();
    sconeImg.src = Icon;
    sconeImg.setAttribute('class', 'scone');
    content.appendChild(sconeImg);

    const para = document.createElement('div');
    para.setAttribute('id', 'para');
    para.innerHTML = "<p>Jam then cream? Or cream then Jam?\nAre you a heathen, or a hero?</p>";
    content.appendChild(para);

})();
