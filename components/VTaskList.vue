<template>
  <ul class="containerList">
    <li 
      v-for="(task, index) in tasks"
      :key="index"
      :class="{ completed: task.completed }"
    >
      {{ task.title }}
    </li>
    <input
      type="text"
      placeholder="Agregar tarea"
      v-model="title"
      @keyup.enter="addNewTask()"
      class="input"
    >
    <button class="button button-primary" @click="addNewTask()">
      Agregar
    </button>
  </ul>
</template>

<script>
export default {
  name: 'TaskList',
  props: {
    listId: String,
    tasks: Array
  },
  data () {
    return {
      title: ''
    }
  },
  methods: {
    addNewTask () {
       this.tasks.push({ title: this.title });
       this.title = ''
    }
  }
}
</script>

<style scoped>
  .containerList {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
  }

  li {
    background-color: var(--secondary-50);
    border-radius: 1rem;
    box-shadow: 0 0 0.2rem var(--black);
    color: var(--black);
    font-size: 1.4rem;
    font-weight: 500;
    margin: 0.5rem 0 1rem 0;
    padding: 0.8rem;
    width: 100%;
  }

  .completed {
    background-color: var(--primary-50);
    color: var(--black);
  }
</style>
