"use strict";
exports.__esModule = true;
var module_1 = require("./module");
//creating Object for HR for sub class
var hr1 = new module_1.Hr1("Yashu", 50000, "12pm", "HitechCity");
var sal = hr1.showSalary();
console.log(sal);
hr1.arragngeMeeting();
hr1.cancelMeeting();
//we are able to access interface from this
var schedule = hr1.schedule();
console.log(schedule);
