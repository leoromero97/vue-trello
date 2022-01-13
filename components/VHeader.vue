<template>
  <header class="header">
    <p class="logo">Vue Trello</p>
    <nuxt-link :to="{name: 'index'}" class="link">
      Tableros
    </nuxt-link>
  </header>
</template>

<style scoped>
  .header {
    align-items: center;
    background-color: var(--primary);
    display: flex;
    justify-content: flex-start;
    margin: 0;
    padding: 1.5rem;
  }

  .logo {
    color: var(--white);
    font-weight: 700;
    margin-right: 2rem;
  }

  .link {
    color: var(--white);
    font-weight: 400;
  }
  
  .link:hover,
  .link:active {
    color: var(--tertiary-50);
    font-weight: 700;
  }
</style>