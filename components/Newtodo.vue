<template>
  <section>
    <v-layout align-center justify-center row wrap>
      <v-flex xs2>
        <v-form ref="form" lazy-validation>
          <v-text-field
            name="newTodo"
            label="AdD My TodO"
            id="id"
            class="blue-grey--text text--lighten-1"
            v-model="newtodo"
            clearable
          ></v-text-field>
          <v-btn color="success" @click.prevent="addTodo">ajouter un todo</v-btn>
        </v-form>
        <div>
          <p v-show="todosExist">Ajouter votre Todo ! todocement.</p>
        </div>
        <v-list v-for="(todo, index) in todosList" :key="index">
          <Atodo :id="index" :todoName="todo.name" :date="todo.date" @delete="deleteTodo(index)"/>
        </v-list>
      </v-flex>
    </v-layout>
  </section>
</template>

<script>
"use strict";

import Atodo from "@/components/Atodo";
import { mapMutations } from "vuex";
import { mapGetters } from "vuex";

export default {
  components: { Atodo },
  props: {},
  data() {
    return {
      newtodo: "",
      todosList: [],
      dateOptions: {
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      }
    };
  },
  methods: {
    addTodo() {
      this.todosList.push({
        name: this.newtodo,
        rate: {
          type: Number,
          default: 0
        },
        completed: false,
        date: new Date().toLocaleString("fr", this.dateOptions)
      });
      this.newtodo = "";
    },
    deleteTodo(id) {
      this.todosList.splice(id, 1);
    }
  },
  computed: {
    todosExist() {
      if (this.todosList.length == 0) {
        return true;
      }
    },

  }
};
</script>

<style scoped>
div > p {
  color: rgb(240, 84, 23);
}
</style>