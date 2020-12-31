// A poor mans build, just doing what gotta be done.

const fs = require("fs");
const { DAYS_COUNT, TIMER_COUNT, TIMER_HTML} =  require("./settings");

console.log("Build: Reading html file...");
let html = fs.readFileSync("./timer.dev.html","utf-8");

console.log("Build: Populating content...");
html = html.replace("/* REPLACE_TIMER_COUNT */",TIMER_COUNT)
	.replace("/* REPLACE_DAYS_COUNT */",DAYS_COUNT)
	.replace("<!-- REPLACE_TIMER_HTML -->",TIMER_HTML);

console.log("Build: Writing file...");
fs.writeFileSync("./timer.html", html);

console.log("Build: Done");