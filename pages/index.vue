<template>
  <main role="main" class="main">
    <VHeader />
    <div class="container">
      <h1 class="title">Mis tableros</h1>
      <div class="input-container">
        <h3 class="input-message">Hora de crear un tablero de tareas</h3>
        <input 
          type="text"
          placeholder="¿Cómo se llama tu nuevo tablero?"
          class="input"
          v-model="boardName"
          @keyup.enter="addNewBoard()"
          >
        <button class="button button-primary" @click="addNewBoard()">
          Crear
        </button>
      </div>
      <div class="boards-container">
        <BoardCard
           v-for="(board, index) in boards"
           :key="index"
           :name="board.name"
           :id="board.id"
         />
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'IndexPage',
  head () {
    return {
      title: 'Home',
      description: 'Trello clon creado con Vue js'
    }
  },
  data () {
    return {
      boardName: '',
      boards: [
        { 
          id: 'vueTraining',
          name: 'Vue js Training'
        },
        { 
          id: 'nuxtTraining',
          name: 'Nuxt Training'
        },
        { 
          id: 'reactTraining',
          name: 'React js Training'
        },
        { 
          id: 'nextTraining',
          name: 'Next js Training'
        }
      ]
    }
  },
  methods: {
    addNewBoard () {
      this.boards.push({ name: this.boardName });
      this.boardName = ''
    }
  }
}
</script>


<style scoped>
  .main {
    height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .container {
    display: flex;
    flex-direction: column;
    padding: 4rem 2rem 2rem;
  }

  .boards-container {
    padding: 1rem;
    display: flex;
    flex-wrap: wrap;
  }
</style>
