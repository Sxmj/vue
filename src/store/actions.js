import {reqList, reqShiwu,reqZxj} from '../api/index.js'
import {RECEVE_LIST,RECEVE_SHIWU,RECEVE_ZXJ} from './mutations-type'


export default{
  async getList({commit}){
    const result= await reqList()
    if(result.code==0){
      const shop=result.data
      // console.log(shop)
      commit(RECEVE_LIST,shop)
    }
  },
  async getShiwu({commit}){
    const result=await reqShiwu()
    if(result.code==0){
      const shiwu = result.data
      commit(RECEVE_SHIWU,shiwu)
      // console.log(shiwu)
    }
  },










async getZxj({commit}){
  const result = await reqZxj()
  console.log(result)
  if(result.code==0){
    // const zxj = result.data
    const zxj=result.data
    commit(RECEVE_ZXJ,zxj)
    console.log(zxj)
  }
}



  
}
