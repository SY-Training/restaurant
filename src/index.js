import './style.css';
import contentFunc from './home.js';
import AboutPage from './about.js';
import RecipePage from './recipe.js';

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

    return header;
})();

function tabs(e) {
    
    let choice = e.currentTarget.className;

    const content = document.querySelector('#content');
    while (content.firstChild){
        content.removeChild(content.lastChild);
    }

    switch(choice){
        case "home":
            contentFunc();
            break;
        case "about":
            AboutPage();
            break;
        case "recipe":
            RecipePage();
            break;
        default:
            console.log("no choice");

    }
}

contentFunc();

