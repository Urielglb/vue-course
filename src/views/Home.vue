<template>
  <div>
    <router-link
      class="text-decoration-none text-dark"
      v-for="character in characters"
      :key="character.id"
      :to="{ name: 'Character', params: { id: character.id } }"
    >
      <CharacterCard :character="character" />
    </router-link>
  </div>
</template>

<script>
import characterService from "@/services/characters";
import CharacterCard from "@/components/CharacterCard";
export default {
  data() {
    return {
      characters: [],
    };
  },
  async created() {
    const characters = await characterService.getCharacters();
    this.characters = characters;
  },
  components: {
    CharacterCard,
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>