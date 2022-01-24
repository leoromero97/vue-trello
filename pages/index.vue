<template>
  <main role="main" class="main">
    <VHeader />
    <div class="container">
      <h1 class="title">Mis tableros</h1>
      <div v-if="fetchingData">
          <p>Cargando tableros...</p>
      </div>
      <div class="input-container">
        <h3 class="input-message">Hora de crear un tablero de tareas</h3>
        <VInput 
          :placeholder="placeholderData"
          :addFunction="addNewBoard"
          v-model="boardName"
        />
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
import { mapState, mapActions } from 'vuex';

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
      placeholderData: '¿Como se llama tu tablero?'
    }
  },
  computed: {
    ...mapState([
      'boards',
      'fetchingData'
    ])
  },
  methods: {
    ...mapActions([
      'fetchBoards',
      'addBoard'
    ]),
    addNewBoard () {
      this.addBoard({ name: this.boardName });
      this.boardName = ''
    },
  },
  created () {
    this.fetchBoards({user: 1})
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
