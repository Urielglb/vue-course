<template>
  <div>
    <router-link
      class="text-decoration-none text-dark"
      v-for="character in characters"
      :key="character.id"
      :to="{ name: 'Character', params: { id: character.id } }"
    >
      <CharacterCard :character="character" class="mx-auto" />
    </router-link>
    <router-link
      v-if="getPage !== 1"
      :to="{ name: 'Home', query: { page: getPage - 1 } }"
      >Prev page</router-link
    >
    |
    <router-link
      v-if="getPage !== pages"
      :to="{ name: 'Home', query: { page: getPage + 1 } }"
      >Next Page</router-link
    >
  </div>
</template>

<script>
import CharacterCard from "@/components/CharacterCard";
import { mapGetters, mapState } from "vuex";
export default {
  async created() {
    await this.$store.dispatch("getEvents", { page: this.getPage });
  },
  components: {
    CharacterCard,
  },
  computed: {
    getPage() {
      return this.$route.query.page || 1;
    },
    ...mapGetters({ characters: "getElements" }),
    ...mapState(["pages"]),
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>