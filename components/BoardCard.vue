<template>
  <nuxt-link class="board" :to="{ name: 'board-id', params: { id, name }}">
    <p class="board-title">{{ name }}</p>
  </nuxt-link>
</template>

<script>
export default {
  name: 'BoardCard',
  props: {
    id: String,
    name: String
  }
}
</script>

<style scoped>
  .board {
    background-color: var(--secondary-50);
    border-radius: 0.8rem;
    box-shadow: 0 0 0.4rem var(--secondary);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.6rem 0;
    margin-right: 2rem;
    margin-bottom: 2rem;
    transition: .4s;
    min-width: 20rem;
  }

  .board:hover {
    background-color: var(--secondary);
  }

  .board-title {
    color: var(--black);
    font-size: 1.6rem;
    font-weight: 500;
  }
</style>
