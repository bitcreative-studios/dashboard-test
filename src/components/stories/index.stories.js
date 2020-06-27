import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

// import "element-ui/lib/theme-chalk/index.css";
import MyButton from "../MyButton.vue";

export default {
  component: MyButton,
  title: "Button"
};

export const withText = () => ({
  components: { MyButton },
  template: '<my-button @click="action">Hello Button</my-button>',
  methods: { action: action("clicked") }
});
export const withSomeEmoji = () => ({
  components: { MyButton },
  template: "<my-button>😀 😎 👍 💯</my-button>"
});
