<template>
  <div class="w-full">
    <section>
      <BreadCrumbs :name="project?.name ?? 'No name'" />
    </section>

    <section class="p-3">
      <div class="overflow-x-auto">
        <table class="table">
          <thead>
            <tr>
              <th>Completada</th>
              <th>Tarea</th>
              <th>Completada en</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="task in project?.tasks" :key="task.id" class="hover:bg-base-300">
              <th><input type="checkbox" :checked="!!task.completedAt" class="checkbox-primary checkbox"
                  @change="projectStore.toggleTask(project?.id ?? '', task.id)"></th>
              <td>{{ task.name }}</td>
              <td>{{ task.completedAt }}</td>
            </tr>
            <tr class="hover:bg-base-300">
              <th>

              </th>
              <td>
                <input type="text"
                  class="input input-primary w-full opacity-60 transition-all hover:opacity-100 focus:opacity-100"
                  placeholder="Nueva tarea" v-model="newTask" @keyup.enter="addTask">
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import BreadCrumbs from '@/modules/common/components/BreadCrumbs.vue';
import { useProjectsStore } from '../store/projects.store';
import { ref, watch } from 'vue';
import type { Project } from '../interfaces/project.interface';
import { useRouter } from 'vue-router';

interface Props {
  id: string;
}
const router = useRouter();
const props = defineProps<Props>();

const projectStore = useProjectsStore();
const project = ref<Project | null>();

const newTask = ref('');

const addTask = () => {
  if (!project.value) return;
  projectStore.addTaskToProject(project.value.id, newTask.value);
  newTask.value = '';
}

watch(() => props.id, () => {
  project.value = projectStore.projectList.find(project => project.id === props.id);
  if (!project.value) {
    router.replace('/');
  }
},
  {
    immediate: true,
  })
</script>