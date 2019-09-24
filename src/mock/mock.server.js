import data from './data.json'
import Mock from 'mockjs'

Mock.mock('/fenlei',{code:0,data:data.info})

Mock.mock('/shiwu',{code:0,data:data.shiwu})

Mock.mock('/faview',{code:0,data:data.zxj})