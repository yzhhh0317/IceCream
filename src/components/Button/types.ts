import type{ PropType } from "vue";
export type ButtonType='primary'|'success'|'warning'|'danger'|'info'
export type ButtonSize='large'|'small'
export type NativeType='button'|'submit'|'reset'

//现在这个版本不支持这种写法，需要插件VueMarcos实现
export interface ButtonProps{
    type?:ButtonType;
    size?:ButtonSize;
    plain?:boolean;
    round?:boolean;
    circle?:boolean;
    disabled?:boolean;
    nativeType?:NativeType
    autofocus?:boolean
    icon?:string
    loading?:boolean
}

export interface ButtonInstance{
    ref:HTMLButtonElement
}

export const buttonProps={
    type:{
        //proptype标注类型
        type:String as PropType<ButtonType>
    },
    size:{
        type:String as PropType<ButtonSize>
    },
    plain:{
        type:Boolean
    },
    round:{
        type:Boolean
    },
    circle:{
        type:Boolean
    },
    disabled:{
        type:Boolean
    },
}