import $ from '../core';

$.prototype.addAttributes = function (...attributes) {
    for (let i = 0; i < this.length; i++) {
        for (let j = 0; j < attributes.length; j++) {
            let attr = attributes[j].split('=');
            this[i].setAttribute(attr[0], attr[1]);
        }
    }
    return this;
};

$.prototype.removeAttributes = function (...attributes) {
    for (let i = 0; i < this.length; i++) {
        this[i].removeAttribute(...attributes);
    }
    return this;
};