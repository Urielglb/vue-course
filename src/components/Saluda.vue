<template>
  <h1>Hola {{ name }}</h1>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: "Extraño",
    },
  },
};
</script>

<style scoped>
</style>