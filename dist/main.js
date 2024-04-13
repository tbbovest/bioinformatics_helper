"use strict";
const date_time = document.getElementById("date-time");
var today = new Date().toLocaleString().replace(",", "").replace(/:.. /, " ");
document.getElementById('terminal-back').style.color = "White";
document.getElementById('terminal-back').style.font = "Helvetica, sans-serif";
document.getElementById('terminal-back').style.fontWeight = "600";
//document.getElementById('terminal-back')!.style.letterSpacing = "1px";
date_time.textContent = today;
