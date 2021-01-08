const App = {
  data() {
    return {
      title: 'Список заметок',
      placeholderString: 'Введите название заметки',
      inputValue: '',
      notes: ['Заметка 1', 'Заметка 2', 'Заметка 3']
    }
  },
  methods: {
    addNewNote() {
      if (this.inputValue !== '') {
        this.notes.push(this.inputValue)
        this.inputValue = ''
      }
    },
    toUpperCase(note) {
      return note.toUpperCase()
    },
    removeNote(idx, event) {
      console.log(event)
      this.notes.splice(idx, 1)  //delete element
    }
  },
  computed: {
    doubleCountComputed() {
      return this.notes.length * 2
    }
  },
  watch: {
    inputValue(value) {
      if (value.length > 10) {
        this.inputValue = ''
      }
    }
  }
}

Vue.createApp(App).mount('#app')
