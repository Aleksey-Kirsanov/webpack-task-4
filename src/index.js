import '../index.css';
import JS_IMAGE from '../assets/Unofficial_JavaScript_logo_2.svg.png';

const jsImage = document.createElement('img');
jsImage.className = 'js-image';
jsImage.src = JS_IMAGE;

document.body.append(jsImage);