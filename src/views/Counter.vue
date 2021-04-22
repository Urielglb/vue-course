<template>
  <div>
    <button @click="add">Más</button>
    <p>{{ counter }}</p>
    <button @click="sus">Menos</button>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  computed: {
    ...mapState(["counter"]),
  },
  methods: {
    add() {
      this.SET_COUNTER(this.counter + 1);
    },
    sus() {
      this.SET_COUNTER(this.counter - 1);
    },
    ...mapMutations(["SET_COUNTER"]),
  },
};
</script>

<style lang="scss" scoped>
</style>