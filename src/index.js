import Icon from './scone.png';
import './style.css';

(function component () {

    const content = document.querySelector('#content');
    const head = document.createElement('div');
    head.setAttribute('id', 'head');

    head.innerHTML = "<h1> Scone but not forgotten</h1>";
    content.appendChild(head);

    const sconeImg = new Image();
    sconeImg.src = Icon;
    sconeImg.setAttribute('class', 'scone');
    content.appendChild(sconeImg);

    const para = document.createElement('div');
    para.setAttribute('id', 'para');
    para.innerHTML = "<p>Jam then cream? Or cream then Jam?\nAre you a heathen, or a hero?</p>";
    content.appendChild(para);

})();
