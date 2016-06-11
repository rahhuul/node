var path = require('path');
var webHome = "E:/wamp/www/gwt6/login.php";
var webNative = "E:/wamp/www/gwt6/dashboard.php";

console.log(path.normalize(webNative));
console.log(path.dirname(webNative));
console.log(path.basename(webNative));
console.log(path.extname(webNative));


/*setInterval(function () {
   console.log('Hi this is test for delay , 1000s');
}, 1000);*/

console.log(__dirname);
console.log(__filename);