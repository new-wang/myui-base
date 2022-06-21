import { defineComponent } from "vue";

export default defineComponent({
    name: 'SButton',
    setup(props, { slots }){
        return () => {
            const defaultSlots = slots.default?slots.default():'按钮'

            return <button> { defaultSlots } </button>
        }
    }
})