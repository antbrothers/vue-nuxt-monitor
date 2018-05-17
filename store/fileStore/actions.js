import * as types from "./mutationType";
import axios from "../../plugins/axios";

export const getHotFile = ({commit}) => {
    axios.get("/api/getRed")
      .then(res => {              
        commit(types.HOT, res.data)
      }).catch(e => {})     
}