var httpClient = require('../util/httpclient')

module.exports = {
    getList: httpClient('bj.meituan.com', 'GET' , '/ptapi/getHotFilms?ci=1&limit=30')
}