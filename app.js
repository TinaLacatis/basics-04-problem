const app = Vue.createApp({
  data() {
    return {
      givenInput: "",
      toggleAction: true,
      givenBackground: "",
    };
  },
  computed: {
    classesVisibility() {
      return {
        visible: this.toggleAction,
        hidden: !this.toggleAction,
      };
    },
  },
  methods: {
    givenInputClass(event) {
      this.givenInput = event.target.value;
    },
    btnActions() {
      this.toggleAction = !this.toggleAction;
    },
    givenInputBackground(event) {
      this.givenBackground = event.target.value;
    },
  },
});
app.mount("#assignment");
