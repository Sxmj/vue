//包含多个直接修改状态数据的方法
import {RECEVE_LIST,RECEVE_SHIWU,RECEVE_ZXJ} from './mutations-type'
export default {
    [RECEVE_LIST](state,shop){
        state.shop=shop
    },
    [RECEVE_SHIWU](state,shiwu){
        state.shiwu=shiwu
    },
    [RECEVE_ZXJ](state,zxj){
        state.zxj=zxj
    }
}