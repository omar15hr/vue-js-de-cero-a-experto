<template>
  <div class="overflow-x-auto w-full">
    <table class="table">
      <thead>
        <tr>
          <th></th>
          <th>Proyecto</th>
          <th>Tareas</th>
          <th>Avance</th>
        </tr>
      </thead>
      <tbody>
        <tr class="hover:bg-base-300">
          <th>2</th>
          <td>Hart Hagerty</td>
          <td>Desktop Support Technician</td>
          <td>Purple</td>
        </tr>
      </tbody>
    </table>

    <InputModal :open="modalOpen" @close="modalOpen = false" @value="onNewValue"
      placeholder="Ingrese el nombre del proyecto" title="Nuevo proyecto"
      subtitle="Dale un nombre único a tu proyecto" />

    <CustomModal :open="customModalOpen">
      <template #header>
        <h1>Header</h1>
      </template>

      <template #body>
        <h1>body</h1>
      </template>

      <template #actions>
        <div class="flex justify-end gap-2 mt-2">
          <button @click="customModalOpen = false" class="btn">Close</button>
          <button class="btn btn-primary">Aceptar</button>
        </div>
      </template>
    </CustomModal>

    <FabButton @click="modalOpen = true">
      <AddCircle />
    </FabButton>

    <FabButton @click="customModalOpen = true" position="bottom-left">
      <ModalIcon class="p-1" />
    </FabButton>
  </div>
</template>

<script lang="ts" setup>
import CustomModal from '@/modules/common/components/CustomModal.vue';
import FabButton from '@/modules/common/components/FabButton.vue';
import InputModal from '@/modules/common/components/InputModal.vue';
import AddCircle from '@/modules/common/icons/AddCircle.vue';
import ModalIcon from '@/modules/common/icons/ModalIcon.vue';
import { ref } from 'vue';

const modalOpen = ref(false);
const customModalOpen = ref(false);

const onNewValue = (projectName: string) => {
  console.log({ projectName });
}
</script>