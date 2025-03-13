import {expect,test,describe,vi,Mocked} from 'vitest'
import { testFn,request } from './utils'
import axios from 'axios'
vi.mock('axios')
const mockAxios=axios as Mocked<typeof axios>

test('test common1',()=>{
    const name='viking'
    expect(name).toBe('viking')
    expect(2+2).toBe(4)
    expect(2+2).not.toBe(5)
})

test('test common2',()=>{
    expect(1).toBeTruthy()
    expect(0).toBeFalsy()
})

test('test common3',()=>{
    expect(4).toBeGreaterThan(3)
    expect(3).toBeLessThan(4)
})

test('test common4',()=>{
    expect({name:'viking'}).toEqual({name:'viking'})
})

//测试函数
describe('function',()=>{
    test('create a mock function',()=>{
        const callback=vi.fn()
        testFn(12,callback)
        expect(callback).toHaveBeenCalled()
        expect(callback).toHaveBeenCalledWith(12)
    })
    test('spy on method',()=>{
        const obj={
            getName:()=>1
        }
        const spy=vi.spyOn(obj,'getName')
        obj.getName()
        expect(spy).toHaveBeenCalled()
        obj.getName()
        expect(spy).toHaveBeenCalledTimes(2)
    })
    test('mock third party',async()=>{
        // mockAxios.get.mockImplementation(()=>Promise.resolve({data:123}))
        mockAxios.get.mockResolvedValue({data:123})
        const result=await request()
        expect(result).toBe(123)
    })
})