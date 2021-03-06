import { defineComponent, toRefs } from "vue";
import { ButtonProps, buttonProps } from './button-type'

export default defineComponent({
    name: 'SButton',
    props: buttonProps,
    // setup 可以不将类型传递给props参数，
    // 它将从props 组件选项推断类型
    // setup(props, { slots })
    setup(props: ButtonProps, { slots }){
        const { type, size, disabled, block } = toRefs(props)

        return () => {
            const defaultSlots = slots.default?slots.default():'按钮'
            // block
            const blockCls = block.value ? 's-btn--block' : ''

            return (
                <button 
                    disabled={ disabled.value }
                    class={`s-btn s-btn--${type.value} s-btn--${size.value} ${blockCls}`}
                >
                    { defaultSlots } 
                </button>
            )
        }
    }
})
