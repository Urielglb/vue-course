<template>
  <div>
    <h1>Crear personaje</h1>
    <form @submit.prevent="createCharacter">
      <p class="ms-4 text-start">Nombre</p>
      <input v-model="character.name" type="text" class="form-control m-4" />
      <p class="ms-4 text-start">Imagen</p>
      <input v-model="character.image" type="text" class="form-control m-4" />
      <p class="ms-4 text-start">Anime</p>
      <input v-model="character.anime" type="text" class="form-control m-4" />
      <p class="ms-4 text-start">Creador</p>
      <input v-model="character.creator" type="text" class="form-control m-4" />
      <p class="ms-4 text-start">Genero</p>
      <input
        v-model="character.category"
        type="text"
        class="form-control m-4"
      />
      <p class="ms-4 text-start">Inicio</p>
      <input
        v-model="character.firstEpisode"
        type="text"
        class="form-control m-4"
      />
      <p class="ms-4 text-start">Final</p>
      <input
        v-model="character.lastEpisode"
        type="text"
        class="form-control m-4"
      />
      <BaseButton type="submit">
        <template v-slot:button>Crear</template>
      </BaseButton>
    </form>
  </div>
</template>

<script>
import characterServices from "@/services/characters";
export default {
  data() {
    return {
      character: this.newCharacter(),
    };
  },
  methods: {
    newCharacter() {
      return {
        id: 0,
        name: "",
        image: "",
        anime: "",
        category: "",
        creator: "",
        firstEpisode: "",
        lastEpisode: "",
      };
    },
    async createCharacter() {
      this.character.id = Math.floor(Math.random() * 10000 + 1);
      console.log(this.character.id);
      await characterServices.postCharacter(this.character);
      console.log(this.character.id);
      this.$router.push({
        name: "Character",
        params: { id: this.character.id },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>