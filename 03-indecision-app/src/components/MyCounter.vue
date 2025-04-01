<template>
  <section>
    <h3>Counter: {{ counter }}</h3>
    <h3 data-testid="square-label">Square: {{ squareCounter }}</h3>

    <div>
      <button @click="counter++">+1</button>
      <button @click="counter--">-1</button>
    </div>
  </section>
</template>

<script lang="ts" setup>
// import { computed, ref } from 'vue';
import { useCounter } from '../composables/useCounter';

interface Props {
  value?: number;
}
const props = defineProps<Props>();

const { counter, squareCounter } = useCounter(props.value);


// const counter = ref(props.value ?? 5);
// const squareCounter = computed(() => counter.value * counter.value);
</script>