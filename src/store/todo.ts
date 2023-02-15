import type { ListTodo } from "../types/todo";
import { defineStore } from "pinia";

export const useTodoStore = defineStore({
  id: "todoState",
  state: () => ({
    todos: [] as ListTodo[],
    createdBy: "" as String,
  }),
  getters: {
    totalTodos: (state) => state.todos.length,
  },
  actions: {
    setUserName(createdBy: String) {
      console.log("------createdBy------", createdBy);
      this.createdBy = createdBy;
    },

    addTodo(
      title: string,
      description?: string,
      createdBy?: string,
      colourName?: string
    ) {
      const todo: ListTodo = {
        title,
        description,
        colourName,
        createdBy,
      };
      this.todos = [todo, ...this.todos];
    },

    removeTodo(title: string) {
      // remove todos
      this.todos = this.todos.filter((todo) => todo.title !== title);
    },
  },
});
