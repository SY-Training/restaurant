import './style.css';
import contentFunc from './home.js';

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

    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', tabs)
    });
})();

function tabs(e) {
    
    let choice = e.currentTarget.className;
    
    switch(choice){
        case "home":
            //send to home tab
            break;
        case "about":
            //sent to about tab
            break;
        case "recipe":
            //send to recipe tab
            break;
        default:
            console.log("no choice");

    }
}

contentFunc();

