<template>
  <section>
    <h3>Counter: {{ counter }}</h3>
    <h3>Square: {{ squareCounter }}</h3>

    <div class="flex gap-3 text-white">
      <button @click="counter++" class="btn">+1</button>
      <button @click="counter--" class="btn">-1</button>
    </div>
  </section>
</template>

<script lang="ts" src="./MyCounterScript2.ts"></script>

<style scoped>@reference "tailwindcss";
.btn {
  @apply p-2 bg-blue-500 hover:bg-blue-400 rounded-md cursor-pointer;
}
</style>