import Icon from './scone.png';

function contentFunc () {

    

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

}

export default contentFunc;