<template>
<main>
  <VHeader />
    <section class="container">
      <h1 class="title">Tableros > {{ this.$route.params.name }}</h1>
      <div class="input-container">
        <h3 class="input-message">Crea una nueva lista de tareas</h3>
        <input 
          type="text"
          placeholder="¿Cómo se llama tu nueva lista?"
          class="input"
          v-model="listName"
          @keyup.enter="addNewList()"
          >
        <button class="button button-primary" @click="addNewList()">
          Crear
        </button>
      </div>
      <div class="containerColumns">
        <VColumn
          v-for="(list, index) in boardList"
          :key="index"
          :listId="list.id"
          :name="list.name"
         />
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'board',
  components: {},
  data () {
    return {
      id: this.$route.params.id
    }
  },
  props: {
    name: String,
    id: String
  },
  data () {
    return {
      listName: '',
      boardList: [
        { id: '1', name: 'Todo'},
        { id: '2', name: 'Doing'}
      ]
    }
  },
  methods: {
    addNewList () {
      this.boardList.push({ name: this.listName});
      this.listName = ''
    }
  }
}
</script>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    padding: 2rem;
  }

  .containerColumns {
    align-items: flex-start;
    display: flex;
    overflow-y: hidden;
    padding: 8px 0;
    overflow-x: scroll;
    height: 100%;
    margin-bottom: 6rem;
    width: 100%;
  }
</style>