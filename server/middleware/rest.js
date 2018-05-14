/*
 * @Author: jianxi_lin 
 * @Dec:   处理结果中间件
 * @Date: 2018-05-10 15:53:42 
 * @Last Modified by: jianxi_lin
 * @Last Modified time: 2018-05-14 17:08:16
 */

module.exports = {
    restify: () => {
        return async (req, res, next) => {
            if (req.url.substring(0, 5) === '/api/') {
                res.rest = (data) => {
                    res.set({
                        'Content-Type': 'application/json;charset=utf-8',
                    })
                     if (typeof data.products.then == 'function') {
                        data.products.then(result => {
                            res.status(200).json({code: 200, message: '请求成功', data: result})
                         }).catch(function(error){
                            res.status(100).json({code: 200, message: error, data: []})
                        })   
                    } else {
                        res.status(200).json(data.products)
                    }
                }
                try {
                    await next();
                } catch (e) {
                    res.set({
                        'Content-Type': 'application/json;charset=utf-8',
                    })
                    res.status(e.code).json({
                        code: e.code,
                        message: e.message
                    })
                }
            } else {
                await next();
            }
        }
    }
}
