<template>
  <input 
    type="text"
    :placeholder="placeholder"
    @keyup.enter="addFunction"
    @input="$emit('input', $event.target.value)"
    v-bind:value="value"
    class="input"
  >
</template>

<script>
export default {
  name: 'VInput',
  props: {
    placeholder: String,
    value: String,
    addFunction: Function,
  }
}
</script>

<style>
  .input {
    border-radius: 1rem;
    color: var(--black);
    padding: 1rem;
    font-size: 1.6rem;
    margin-bottom: 1rem;
    margin-right: 1rem;
    max-width: 60rem;
    width: 100%;
  }

  .input:focus,
  .input:active {
    border: 1px solid var(--primary);
  }

  .input::placeholder {
    font-size: 1.4rem;
  }
</style>
