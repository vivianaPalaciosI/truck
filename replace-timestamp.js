 // require:
 var replace = require("replace");
 let date = new Date().getTime();
 
 // use:
 replace({
     regex: "{{timestamp}}",
     replacement: date,
     paths: ['dist/index.html'],
     recursive: true,
     silent: true,
});

var fs = require('fs');
fs.rename('dist/conf-env/env.js', 'dist/conf-env/' + date + '.env'+'.js', function (err) {
    if (err) {}
});