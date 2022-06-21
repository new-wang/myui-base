import { defineComponent, toRefs, createVNode } from "vue";
const buttonProps = {
  type: {
    type: String,
    default: "secondary"
  },
  size: {
    type: String,
    default: "medium"
  },
  disabled: {
    type: Boolean,
    default: false
  },
  block: {
    type: Boolean,
    default: false
  },
  tag: {
    type: String,
    default: "button"
  },
  loading: {
    type: Boolean,
    default: false
  },
  onClick: {
    type: [Function, Array]
  }
};
var Button = defineComponent({
  name: "SButton",
  props: buttonProps,
  setup(props, {
    slots
  }) {
    const {
      type,
      size,
      disabled,
      block
    } = toRefs(props);
    return () => {
      const defaultSlots = slots.default ? slots.default() : "\u6309\u94AE";
      const blockCls = block.value ? "s-btn--block" : "";
      return createVNode("button", {
        "disabled": disabled.value,
        "class": `s-btn s-btn--${type.value} s-btn--${size.value} ${blockCls}`
      }, [defaultSlots]);
    };
  }
});
var index = {
  install(app) {
    app.component(Button.name, Button);
  }
};
export { Button, index as default };
