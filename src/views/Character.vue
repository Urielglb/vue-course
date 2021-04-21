<template>
  <div>
    <img
      class="rounded-circle mx-auto img-thumbnail"
      :src="character.image"
      alt="character.name"
    />
    <h3>{{ character.name }}</h3>
    <p>
      Personaje del anime {{ character.anime }} perteneciente al genero
      {{ character.category }} creado por {{ character.creator }} en el año
      {{ character.firstEpisode }}
      <span v-if="character.lastEpisode">
        y concluido en {{ character.lastEpisode }}</span
      >
    </p>
  </div>
</template>

<script>
import characterService from "@/services/characters";
export default {
  props: {
    id: [String],
  },
  data() {
    return {
      character: {},
    };
  },
  async created() {
    const character = await characterService.getCharacterById(this.id);
    this.character = character;
  },
};
</script>

<style lang="scss" scoped>
</style>