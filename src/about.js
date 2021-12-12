function AboutPage() {
    const content = document.querySelector('#content');

    let aboutText = `<p>This page is part of a used as part of a study to use\n
                    webpack and modules. I will now fill the page\n
                    with gool ol' lorem ipsum...\n\n\n
                    
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim\n
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip\n
                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in\n
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia\n
                    deserunt mollit anim id est laborum</p>`

    const about = document.createElement('div');
    about.setAttribute('class', 'about');
    about.innerHTML = aboutText;
    content.appendChild(about);

}

export default AboutPage;