import * as axios from "axios";
let options = {}

if (process.server) {
    options.baseURL = `http://${process.env.HOST || 'localhost'}:${process.env.PORT || 3002}`
}
export default axios.create(options)