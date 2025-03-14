import { describe,expect,it } from 'vitest'
import { mount } from '@vue/test-utils'
import Input from './Input.vue'
import { wrap } from 'module'

describe('Input',()=>{
    it('基本展示',()=>{
        //针对动态的class，查看class是否正确
        //针对v-if，查看渲染的标签和内容是否正确
        //针对slots，查看渲染对应的slots内容是否正确
        const wrapper=mount(Input,{
            props:{
                size:'small',
                type:'text',
                modelValue:''
            },
            slots:{
                prepend:'prepend',
                prefix:'prefix'
            }
        })
        console.log(wrapper.html());
        //class
        expect(wrapper.classes()).toContain('yu-input--small')
        expect(wrapper.classes()).toContain('is-prepend')
        //should render input
        expect(wrapper.find('input').exists()).toBeTruthy()
        expect(wrapper.get('input').attributes('type')).toBe('text')
        //slots
        expect(wrapper.find('.yu-input__prepend').exists()).toBeTruthy()
        expect(wrapper.get('.yu-input__prepend').text()).toBe('prepend')
        //prefix
        expect(wrapper.find('.yu-input__prefix').exists()).toBeTruthy()
        expect(wrapper.get('.yu-input__prefix').text()).toBe('prefix')
        const wrapper2=mount(Input,{
        props:{
            type:'textarea',
            modelValue:''
        }
        })
        expect(wrapper2.find('textarea').exists()).toBeTruthy()
    })
    it('支持v-model',async()=>{
        const wrapper=mount(Input,{
            props:{
                modelValue:'test',
                'onUpdate:modelValue':(e:any)=>wrapper.setProps({modelValue:e})
            }
        })
        //初始值
        const input=wrapper.get('input')
        expect(input.element.value).toBe('test')
        //更新值
        //setValue会既触发input又出发change
        await input.setValue('update')
        expect(wrapper.props('modelValue')).toBe('update')
        expect(input.element.value).toBe('update')

        console.log('the event',wrapper.emitted());
        expect(wrapper.emitted()).toHaveProperty('input')
        expect(wrapper.emitted()).toHaveProperty('change')

        const inputEvent=wrapper.emitted('input')
        const changeEvent=wrapper.emitted('change')
        expect(inputEvent![0]).toEqual(['update'])
        expect(changeEvent![0]).toEqual(['update'])
        
        //v-model的异步更新
        await wrapper.setProps({modelValue:'prop update'})
        expect(input.element.value).toBe('prop update')
    })
    it('支持点击清空字符串',async()=>{
        const wrapper=mount(Input,{
            props:{
                modelValue:'test',
                clearable:true,
                type:'text'
            },
            global:{
                stubs:['Icon']
            }
        })
        //不应该出现对应的Icon区域
        expect(wrapper.find('.yu-input__clear').exists()).toBeFalsy()
        const input=wrapper.get('input')
        await input.trigger('focus')
        expect(wrapper.emitted()).toHaveProperty('focus')

        //出现Icon区域
        expect(wrapper.find('.yu-input__clear').exists()).toBeTruthy()
        //点击值变为空并消失
        await wrapper.get('.yu-input__clear').trigger('click')
        expect(input.element.value).toBe('')
        //点击值变为空并且消失，不仅仅会触发clear事件，对应的input以及change应该都会被测试
        expect(wrapper.emitted()).toHaveProperty('clear')
        expect(wrapper.emitted()).toHaveProperty('input')
        expect(wrapper.emitted()).toHaveProperty('change')

        const inputEvent=wrapper.emitted('input')
        const changeEvent=wrapper.emitted('change')
        expect(inputEvent![0]).toEqual([''])
        expect(changeEvent![0]).toEqual([''])
        await input.trigger('blur')
        expect(wrapper.emitted()).toHaveProperty('blur')
    })
    it('只支持切换密码显示',async()=>{
        const wrapper=mount(Input,{
            props:{
                modelValue:'',
                showPassword:true,
                type:'text'
            },
            global:{
                stubs:['Icon']
            }
        })
        //不出现对应的Icon区域，因为当前值为空
        expect(wrapper.find('.yu-input__password').exists()).toBeFalsy()
        const input=wrapper.get('input')
        expect(input.element.type).toBe('password')
        //出现Icon区域，并且Icon为特定的图标
        await input.setValue('123')
        const eyeIcon=wrapper.find('.yu-input__password')
        expect(eyeIcon.exists()).toBeTruthy()
        expect(eyeIcon.attributes('icon')).toBe('eye-slash')
        //点击值会切换input类型，并且Icon图标会切换
        await eyeIcon.trigger('click')
        expect(input.element.type).toBe('text')
        expect(wrapper.find('.yu-input__password').attributes('icon')).toBe('eye')
    })
})