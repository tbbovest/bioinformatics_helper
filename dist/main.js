"use strict";
let date_time = document.getElementById('date-time');
var today = new Date().toLocaleString().replace(",", "").replace(/:.. /, " ");
date_time.textContent = today;
