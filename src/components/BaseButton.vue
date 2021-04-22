<template>
  <button
    @click="sendEvent"
    class="rounded"
    :class="danger ? 'btn-danger' : 'btn-primary'"
  >
    <slot name="button"></slot>
  </button>
</template>

<script>
export default {
  props: {
    danger: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    sendEvent() {
      this.$emit("btn-triggered",'Vengo desde button');
    },
  },
};
</script>

<style scoped>
</style>