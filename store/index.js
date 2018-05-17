import Vuex from "vuex"
import fileStore from './fileStore/index'
const createStore = () => {
    return new Vuex.Store({   
        state:{},       
        modules:{
            fileStore
        }
    })
}
export default createStore