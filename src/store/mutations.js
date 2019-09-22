//包含多个直接修改状态数据的方法
import {RECEVE_LIST} from './mutations-type'
export default {
    [RECEVE_LIST](state,shop){
        state.shop=shop
    }
}