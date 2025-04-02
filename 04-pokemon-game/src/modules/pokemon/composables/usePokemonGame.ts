import { computed, onMounted, ref } from "vue";
import { GameStatus } from "../interfaces/game-status.enum";
import { pokemonApi } from "../api/pokemonApi";
import type { PokemonListResponse } from "../interfaces/pokemon-list.response";
import type { Pokemon } from "../interfaces/pokemon.interface";
import confetti from 'canvas-confetti';

export function usePokemonGame() {

  const gameStatus = ref<GameStatus>(GameStatus.Playing);
  const pokemons = ref<Pokemon[]>([]);
  const pokemonOptions = ref<Pokemon[]>([]);

  const randomIndex = Math.floor(Math.random() * pokemonOptions.value.length);
  
  const randomPokemon = computed(() => pokemonOptions.value[randomIndex]);
  const isLoading = computed(() => pokemons.value.length === 0);

  const getPokemons = async(): Promise<Pokemon[]> => {
    const response = await pokemonApi.get<PokemonListResponse>('/?limit=151');

    const pokemonsArray = response.data.results.map( pokemon => {
      const urlParts = pokemon.url.split('/');
      const id = urlParts[urlParts.length - 2] ?? 0;
      return {
        name: pokemon.name,
        id: +id,
      }
    });

    return pokemonsArray.sort(() => Math.random() - 0.5);
  };

  const getNextRound = (howMany: number = 4) => {
    gameStatus.value = GameStatus.Playing;
    pokemonOptions.value = pokemons.value.slice(0, howMany);
    pokemons.value = pokemons.value.slice(howMany);
  }

  const checkAnswer = (id: number) => {
    const hasWon = randomPokemon.value.id === id;
    if (hasWon) {
      gameStatus.value = GameStatus.Won;
      confetti({
        particleCount: 300,
        spread: 150,
        origin: { y: 0.6 }
      });
      return;
    }

    gameStatus.value = GameStatus.Lost;
  }

  onMounted(async() => {
    pokemons.value = await getPokemons();
    getNextRound();
    console.log(pokemonOptions.value);
  });

  return {
    gameStatus,
    isLoading,
    pokemonOptions,
    randomPokemon,
    checkAnswer,
    getNextRound,
  };
}
