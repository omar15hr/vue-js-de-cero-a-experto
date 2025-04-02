<template>
  <section>
    <img v-if="!showPokemon" :src="pokemonImage" alt="" class="brightness-0">
    <img v-else :src="pokemonImage" alt="" class="fade-in">
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  pokemonId: number;
  showPokemon?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  showPokemon: false,
});

const pokemonImage = computed(
  () => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.pokemonId}.png`
)
</script>

<style scoped>
img {
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  width: 200px;
  height: 200px;
}
</style>
