<template>
  <ul class="containerList">
    <li 
      v-for="(task, index) in tasks"
      :key="index"
      :class="{ completed: task.completed }"
    >
      {{ task.title }}
    <input type="checkbox" @click="markAsCompleted({ task })" >
    <input type="checkbox" @click="deleteTask({ taskId: task.id })" >
    </li>
    <VInput 
      :placeholder="placeholderData"
      :addFunction="addNewTask"
      v-model="title"
    />
    <button class="button button-primary" @click="addNewTask()">
      Agregar
    </button>
  </ul>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'TaskList',
  props: {
    listId: String,
    tasks: Array
  },
  data () {
    return {
      title: '',
      placeholderData: 'Agregar tarea'
    }
  },
  methods: {
    ...mapActions([
      'addTask',
      'markAsCompleted',
      'deleteTask'
    ]),
    addNewTask () {
       this.addTask({ list: this.listId, title: this.title });
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
