/*
 * @Author: jianxi_lin 
 * @Dec:  接入第三方api
 * @Date: 2018-05-10 15:32:19 
 * @Last Modified by: jianxi_lin
 * @Last Modified time: 2018-05-14 15:21:58
 */

 var http = require('http')
 module.exports = async (ctx) => {
     let options = {
         port: 80,
         hostname: 'www.123369.com.cn',
         methos: 'GET',
         path: '/api/ServiceList'
     }
     return new Promise((resolve, reject) => {
         let request = http.request(options, (socket) => {
             let data = '';
             socket.on('data', (chunk) => {
                 data += chunk
             });
             socket.on('end', () => {
                 return resolve(data)
             });
             socket.on('error', (e) => {
                 return reject(data)
             })
         })
         request.end()
     })
 }

