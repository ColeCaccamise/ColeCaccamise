"use strict";

// don't have to reload page
if(module.hot) {
    module.hot.accept()
}

const dynamicYear = document.querySelector('#year');
dynamicYear.innerHTML = new Date().getFullYear();