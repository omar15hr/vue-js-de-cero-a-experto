<template>
  <section v-if="isLoading || randomPokemon.id === null"
    class="flex flex-col items-center justify-center w-screen h-screen">
    <h1 class="text-3xl">Espere por favor...</h1>
    <h3 class="animate-pulse">Cargando Pokémons...</h3>
  </section>

  <section v-else class="flex flex-col items-center justify-center w-screen h-screen">
    <h1 class="m-5">¿Quién es este Pokémon?</h1>
    <h3 class="capitalize">{{ gameStatus }}</h3>
    <button v-if="gameStatus !== GameStatus.Playing" @click="getNextRound(4)">Nuevo Juego</button>
    <PokemonPicture :pokemon-id="randomPokemon.id" :show-pokemon="gameStatus !== GameStatus.Playing" />
    <PokemonOptions :options="options" @selected-option="checkAnswer"
      :block-selection="gameStatus !== GameStatus.Playing" :correct-answer="randomPokemon.id" />
  </section>
</template>

<script setup lang="ts">
import PokemonPicture from '../components/PokemonPicture.vue'
import PokemonOptions from '../components/PokemonOptions.vue'
import { usePokemonGame } from '../composables/usePokemonGame';
import { GameStatus } from '../interfaces/game-status.enum';

const { gameStatus, isLoading, randomPokemon, pokemonOptions: options, checkAnswer, getNextRound } = usePokemonGame();

</script>

<style scoped>
button {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -2px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  padding: 0.75rem;
  margin: 0.5rem;
  cursor: pointer;
  width: 10rem;
  text-align: center;
  transition: all 0.2s ease-in-out;
  background-color: white;
}
</style>