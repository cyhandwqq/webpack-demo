// var config = require('./config.json');
import config from './config.json';
function greeter() {
  var greet = document.createElement('div');
  greet.textContent = config.greetText;
  return greet;
};

function write() {
  console.log("write sometings!")
};

export {
	greeter,write
}