import {reqList} from '../api/index.js'
import {RECEVE_LIST} from './mutations-type'
export default{
  async getList({commit}){
    const result= await reqList()
    if(result.code==0){
      const shop=result.data
      // console.log(shop)
      commit(RECEVE_LIST,shop)
    }
  }
}