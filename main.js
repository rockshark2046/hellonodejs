"use strict"

var fs = require('fs');

var data = fs.readFileSync('input.txt');

console.log('Sync '+data.toString());

fs.readFile('input.txt', function(err, data){
	if(err) return console.error(err);
	console.log('ASync '+data.toString());
});


console.log('程序执行结束');


