<template>
  <section class="container">
    <header>
      <h3>{{ name }}</h3>
    </header>
    <VTaskList 
      :listId="listId"
      :tasks="tasksList"
    />
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Column',
  props: {
    listId: String,
    name: String,
  },
  computed: {
    ...mapGetters([
      'getTasksFromList'
    ]),
    tasksList () {
      return this.getTasksFromList(this.listId);
    }
  },
  methods: {
    ...mapActions([
      'fetchTasks'
    ])
  },
  created () {
    this.fetchTasks({ list: this.listId })
  }
}
</script>

<style scoped>
  .container {
    background-color: var(--white);
    box-shadow: 0 0 1rem var(--secondary-50);
    border-radius: 1rem;
    margin: 1rem;
    max-width: 40rem;
    min-width: 20rem;
    width: 100%;
  }

  header {
    margin-bottom: 0.6rem;
  }

  h3 {
    color: var(--primary);
    font-size: 1.6rem;
    font-weight: 600;
  }
</style>
