<template>
  <section class="mt-5 flex flex-col">
    <button v-for="{ name, id } in options" :key="id" @click="$emit('selectedOption', id)"
      :class="['capitalize', {
        correct: id === correctAnswer && blockSelection,
        incorrect: id !== correctAnswer && blockSelection,
      }]" :disabled="blockSelection">
      {{ name }}
    </button>
  </section>
</template>

<script setup lang="ts">
import type { Pokemon } from '../interfaces/pokemon.interface';

interface Props {
  options: Pokemon[];
  blockSelection: boolean;
  correctAnswer: number;
}

defineProps<Props>();

defineEmits<{
  selectedOption: [id: number];
}>();
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

button:hover {
  background-color: #f3f4f6;
}

button:disabled {
  cursor: not-allowed;
}

.correct {
  background-color: #10b981;
  color: white;
}

.incorrect {
  background-color: #ef4444;
  opacity: 40%;
  color: white;
}
</style>