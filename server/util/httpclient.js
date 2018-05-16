/*
 * @Author: jianxi_lin 
 * @Dec:  接入第三方api
 * @Date: 2018-05-10 15:32:19 
 * @Last Modified by: jianxi_lin
 * @Last Modified time: 2018-05-16 17:14:30
 */

 var http = require('http')
 module.exports = async (host, method, path) => {
     let options = {
         port: 80,
         hostname: host,
         method: method,
         path: path
     }
     return new Promise((resolve, reject) => {
         let request = http.request(options, (socket) => {
             let data = '';
             socket.on('data', (chunk) => {
                 data += chunk
             });
             socket.on('end', () => {                                       
                 return resolve(JSON.parse(data).data)
             });
             socket.on('error', (e) => {
                 return reject(data)
             })
         })
         request.end()
     })
 }

