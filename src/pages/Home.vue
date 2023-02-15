<template>
  <form>
    <h2 class="wrapper">
      <label for="new-todo-input" class="label__lg"> Join the board! </label>
    </h2>
    <p>Username:</p>
    <input
      type="text"
      id="new-todo-input"
      name="createdBy"
      class="input__lg"
      v-model="createdBy"
    />

    <button
      class="btn btn__primary btn__lg"
      type="submit"
      @click="
        this.$router.push({
          path: '/board',
          query: { createdBy: this.createdBy },
        })
      "
    >
      Join
    </button>
  </form>
</template>

<style>
.wrapper {
  background-color: white;
  width: 60%;
  min-width: 350px;
  padding: 20px;
}
form {
  background-color: white;
  padding: 64px;
  width: 60%;
  justify-content: center;
}

input {
  width: 100%;
  margin-top: 8px;
}

button {
  width: 100%;
  background-color: #bdd755;
  margin-top: 8px;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import { useTodoStore } from "../store/todo";

export default defineComponent({
  name: "userName",
  data() {
    return {
      createdBy: "",
    };
  },
  setup() {
    const storeTodo = useTodoStore();
    // const userName = storeTodo.userName;
    return { storeTodo };
  },
  methods: {
    onSubmit(e: Event) {
      e.preventDefault();

      if (!this.createdBy) {
        return;
      }

      // save data into store
      this.storeTodo.setUserName(this.createdBy);
    },
    submit() {},
  },
});
</script>
