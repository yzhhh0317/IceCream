import {test,describe,expect} from 'vitest'
import {mount} from '@vue/test-utils'
import Collapse from './Collapse.vue'

//测试函数
describe('Collapse.vue',()=>{
    test('basic collapse',()=>{
        const wrapper=mount(Collapse,{
            slots:{
                default:'<Item name="a" title="Title A">content a</Item>'
            }
        })
    console.log(wrapper.html());
    
    })
}) 