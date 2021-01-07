const App = {
  data() {
    return {
      title: 'Список заметок',
      placeholderString: 'Введите название заметки',
      inputValue: ''
    }
  },
  methods: {
    inputChangeHandler(event) {
      this.inputValue = event.target.value
    }
  }
}

Vue.createApp(App).mount('#app')
