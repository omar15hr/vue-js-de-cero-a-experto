<template>
  <h1>Mi primera app</h1>
  <hr>

  <MyCounter :value="4" />
  <hr>
  <MyCounterScript :value="7" />
  <hr>
  <MyCounterScript2 :value="9" />
</template>

<script lang="ts" setup>
import MyCounter from './components/MyCounter.vue';
import MyCounterScript from './components/MyCounterScript.vue';
import MyCounterScript2 from './components/my-counter-script/MyCounterScript2.vue';

</script> 