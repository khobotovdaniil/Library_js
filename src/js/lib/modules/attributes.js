import $ from '../core';

$.prototype.addAttributes = function (...attributes) {
    for (let i = 0; i < this.length; i++) {
        for (let j = 0; j < attributes.length; j++) {
            let attr = attributes[j].split('=');
            if (attr[1]) {
                this[i].setAttribute(attr[0], attr[1]);
            } else {
                this[i].setAttribute(attr[0], attr[0]);
            }
            
        }
    }
    return this;
};

$.prototype.removeAttributes = function (...attributes) {
    for (let i = 0; i < this.length; i++) {
        if (attributes.length) {
            this[i].removeAttribute(...attributes);
        }
    }
    return this;
};