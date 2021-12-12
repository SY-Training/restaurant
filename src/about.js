function AboutPage() {
    const content = document.querySelector('#content');

    let aboutText = `<p>This page is used as part of a study to use<br>
                    webpack and modules. I will now fill the page<br>
                    with gool ol' lorem ipsum...<br><br><br>
                    
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br>
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim<br>
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip<br>
                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in<br>
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br>
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia<br>
                    deserunt mollit anim id est laborum</p>`

    const about = document.createElement('div');
    about.setAttribute('class', 'about');
    about.innerHTML = aboutText;
    content.appendChild(about);

}

export default AboutPage;