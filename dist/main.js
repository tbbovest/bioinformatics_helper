"use strict";
let date_time = document.getElementById('date-time');
const firstButton = document.getElementById('firstoption');
const secButton = document.getElementById('secoption');
var today = new Date().toLocaleString().replace(",", "").replace(/:.. /, " ");
date_time.textContent = today;
firstButton.addEventListener("click", secButton.classList.add('display: none'));
