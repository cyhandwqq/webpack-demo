//main.js
// require(__dirname + '/../css/base.css');
// var greeter = require('./Greeter.js');
// import '../css/base.css';
import * as Greeter from './Greeter.js';
import jquery from './jquery-1.12.0.min.js';

window.$ = window.jquery = jquery;
// document.getElementById('root').appendChild(Greeter.greeter());
$("#root").html(Greeter.greeter());
Greeter.write();