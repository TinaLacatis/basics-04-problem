const app = Vue.createApp({
  data() {
    return {
      givenInput: "",
      toggleAction: true,
      givenBackground: "",
    };
  },
  computed: {
    givenClasses() {
      return {
        user1: this.givenInput === "user1",
        user2: this.givenInput === "user2",
        visible: this.toggleAction,
        hidden: !this.toggleAction,
      };
    },
  },
  methods: {
    btnActions() {
      this.toggleAction = !this.toggleAction;
    },
  },
});
app.mount("#assignment");
