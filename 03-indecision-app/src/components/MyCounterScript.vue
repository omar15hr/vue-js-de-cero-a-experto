<template>
  <section>
    <h3>Counter: {{ counter }}</h3>
    <h3>Square: {{ squareCounter }}</h3>

    <div>
      <button @click="counter++">+1</button>
      <button @click="counter--">-1</button>
    </div>
  </section>
</template>

<script lang="ts">
import { useCounter } from '@/composables/useCounter';
import { computed, ref, defineComponent } from 'vue';

export default defineComponent({
  props: {
    value: { type: Number, required: true },
  },
  setup(props) {

    // const counter = ref(props.value);
    // const squareCounter = computed(() => counter.value * counter.value);

    const { counter, squareCounter } = useCounter(10);


    return {
      counter,
      squareCounter,
    };
  },
});
// import { computed, ref } from 'vue';

// interface Props {
//   value?: number;
// }

//   const props = defineProps<Props>();

//   const counter = ref(props.value ?? 5);
//   const squareCounter = computed(() => counter.value * counter.value);
</script>