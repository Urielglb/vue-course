<template>
  <div class="container border rounded border-3 m-4
  p-2">
    <div class="row">
      <div class="col-md-4 mx-auto">
        <img
          :src="character.image"
          :alt="character.name"
          class="rounded-circle"
        />
      </div>
      <div class="col-md-8 mx-auto my-auto">
        <h3>{{ character.name }}</h3>
        <p>De {{ character.anime }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    character: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style  scoped>
img {
  width: 150px;
  height: 150px;
}
</style>