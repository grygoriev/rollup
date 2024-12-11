import JS_IMAGE from './assets/js.png'
import "./index.css";

const hElement = document.createElement('h1');
hElement.textContent = 'I love JavaScript';
const imgElement = document.createElement('img');
imgElement.src = JS_IMAGE;
document.body.append(hElement, imgElement);