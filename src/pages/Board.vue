<template class="board bg-grey-lighten-4">
  <Popper placement="right">
    <h1><button type="button">Create Todo</button></h1>
    <template #content>
      <form @submit="onSubmit">
        <h2>Todo Form</h2>

        <!-- title -->

        <div><label class="label">Title:</label></div>
        <div>
          <input type="text" class="title" name="title" v-model="title" />
        </div>

        <!-- description -->
        <div><label class="label">Description:</label></div>
        <div>
          <textarea
            class="input"
            name="description"
            v-model="description"
          ></textarea>
        </div>

        <div class="field">
          <label class="label">Colour: </label>
          <ul class="colourList">
            <li class="colour1">
              <input
                type="radio"
                class="colourListinput"
                name="colourName"
                value="#bdd755"
                v-model="colourName"
              />
            </li>
            <li class="colour2">
              <input
                type="radio"
                class="colourListinput"
                name="colourName"
                value="aquamarine"
                v-model="colourName"
              />
            </li>
            <li class="colour3">
              <input
                type="radio"
                class="colourListinput"
                name="colourName"
                value="lavender"
                v-model="colourName"
              />
            </li>
            <li class="colour4">
              <input
                type="radio"
                class="colourListinput"
                name="colourName"
                value="lightpink"
                v-model="colourName"
              />
            </li>
          </ul>
        </div>

        <!-- submit -->
        <div class="field">
          <button type="submit">Create</button>
        </div>
      </form>
    </template>
  </Popper>

  <div class="board py-28 px-8">
    <div
      class="wrapper"
      v-for="todo of storeTodo.todos"
      :style="bgColor(todo.colourName)"
    >
      <div>
        <button
          class="removalBtn"
          @click="storeTodo.removeTodo(todo.title)"
          :style="bgColor(todo.colourName)"
        >
          <img src="../images/tick.png" alt="yes" />
        </button>
      </div>
      <h2 class="title">{{ todo.title }}</h2>
      <div class="description" v-if="todo?.description">
        {{ todo?.description }}
      </div>

      <div class="createdBy" v-if="todo?.createdBy">
        Created By: {{ todo?.createdBy }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.board {
  width: 100%;
}
.colourListinput {
  cursor: pointer;
  left: 0;
  opacity: 0;
}
form {
  background-color: white;
  padding: 64px;
  width: 100%;
  justify-content: center;
}

.wrapper {
  width: fit-content;
  padding: 16px;
  margin: 16px;
}

.description {
  inline-size: auto;
  overflow: hidden;
  padding: 16px 0px;
}

li {
  border-width: 2px;
  border-style: solid;
  border-image: initial;
  border-color: white;
  width: 24px;
  margin: 0.4rem;
}

.colourList {
  display: flex;
  margin-left: -0.2rem;

  flex-wrap: wrap;
  padding-left: 0px;
  padding-right: 0px;
  overflow: auto;
}

.colour1 {
  background-color: #bdd755;
}
.colour2 {
  background-color: aquamarine;
  display: inline;
}
.colour3 {
  background-color: lavender;
  display: inline;
}
.colour4 {
  background-color: lightpink;
  display: inline;
}

.removalBtn {
  width: 40px;
  float: right;
  border-width: 0;
  top: auto;
  right: auto;
}
img {
  width: 32px;
  height: 32px;
  justify-content: right;
}

button {
  width: 70%;
  font-size: 16px;
  font-weight: 600;
}

.createdBy {
  text-align: right;
  font-size: 12px;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import { useTodoStore } from "../store/todo";
import * as Vue from "vue";
import Popper from "vue3-popper";

const app = Vue.createApp({});
app.component("Popper", Popper);

export default defineComponent({
  name: "TodoForm",
  data() {
    return {
      title: "",
      description: "",
      colourName: "",
      createdBy: "",
    };
  },
  setup() {
    const storeTodo = useTodoStore();
    const userName = storeTodo.createdBy;
    const bgColor = (colorName: string): { backgroundColor: string } => {
      const color = colorName;
      return {
        backgroundColor: color,
      };
    };
    return { storeTodo, bgColor, userName };
  },
  components: {
    Popper,
  },
  methods: {
    onSubmit(e: Event) {
      e.preventDefault();

      if (!this.title) {
        return;
      }

      // save data into store
      this.storeTodo.addTodo(
        this.title,
        this.description,
        this.$route.query.createdBy,
        this.colourName
      );
    },
  },
});
</script>
