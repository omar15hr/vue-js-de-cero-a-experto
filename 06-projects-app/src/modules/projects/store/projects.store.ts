import { defineStore } from "pinia";
import { computed, ref } from "vue";
import type { Project } from "../interfaces/project.interface";
import { v4 as uuid } from 'uuid';
import { useLocalStorage } from "@vueuse/core";

export const useProjectsStore = defineStore("projects", () => {

  const projects = ref(useLocalStorage<Project[]>('projects', []));

  const addProject = (name: string) => {
    if (name.length === 0) return;

    projects.value.push({
      id: uuid(),
      name, 
      tasks: [],
    })
  }

  return {
    // Properties
    projects,

    // Getters
    projectList: computed(() => [...projects.value]),
    noProjects: computed(() => projects.value.length === 0),

    // Actions
    addProject,
  };
})