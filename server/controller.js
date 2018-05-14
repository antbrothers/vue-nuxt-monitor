/*
 * @Author: jianxi_lin 
 * @Dec 向路由注册控制器
 * @Date: 2018-05-10 10:08:56 
 * @Last Modified by: jianxi_lin
 * @Last Modified time: 2018-05-14 17:15:33
 */

const fs = require('fs');
var path = require('path');
const basename = path.basename('index.js');
console.log(basename)
function addMapping(router, mapping) {     
   for (var url in mapping) {
       if (url.startsWith('GET ')) {
           var path = url.substring(4);
           router.get(path, mapping[url]);           
       } else if (url.startsWith('POST ')) {
           var path = url.substring(5);
           router.post(path, mapping[url]);          
       } else if (url.startsWith('PUT ')) {
           var path = url.substring(4);
           router.put(path, mapping[url]);            
       } else if (url.startsWith('DELETE ')) {
           var path = url.substring(7);
           router.delete(path, mapping[url]);           
       } else {
           console.log(`invalid URL: ${url}`);
       }
   }  
}

function addController(router, dir) {
   fs.readdirSync(__dirname + '/' + dir).filter((file) => {
       return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js') && (file.indexOf('mock') !== 0) ;
   }).forEach((file) => {
       // console.log(path.join(__dirname, dir, file))
        addMapping(router, require('./'+dir+'/'+file));
   })
}
module.exports = function(dir) {
    let controllers_dir = dir || 'controllers',    
    router = require('express').Router();
    addController(router, controllers_dir);
    return router;
}