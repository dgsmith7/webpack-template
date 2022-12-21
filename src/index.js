"use strict";

import _ from 'lodash';
import './style.css';
import Img from './1.png';

(function () {
    function component() {
        const element = document.createElement('div');

        // Lodash, now imported by this script
        element.innerHTML = _.join(['Hello', 'webpack'], ' ');
        element.classList.add('hello');

        const myImage = new Image();
        myImage.src = Img;
        element.appendChild(myImage);

        return element;
    }

    document.body.appendChild(component());
}());