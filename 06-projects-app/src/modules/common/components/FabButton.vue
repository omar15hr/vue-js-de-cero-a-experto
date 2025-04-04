<template>
  <button @click="$emit('click')" :class="['btn btn-circle btn-secondary fixed', position]">
    <slot />
  </button>
</template>

<script lang="ts" setup>
interface Props {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

withDefaults(defineProps<Props>(), {
  position: 'bottom-right',
});

defineEmits(['click']);
</script>

<style scoped>
.top-left {
  top: 40px;
  left: 40px;
}

.top-right {
  top: 40px;
  right: 40px;
}

.bottom-left {
  bottom: 40px;
  left: 40px;
}

.bottom-right {
  bottom: 40px;
  right: 40px;
}
</style>