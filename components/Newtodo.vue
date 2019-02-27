<template>
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
        >
        </v-text-field>
          
        <v-btn color="success" @click="addTodo">ajouter un todo</v-btn>
      </v-form>
      <v-list v-for="(todo, index) in todosList" :key="index">
        <Atodo
          :id="index"
          :todoName="todo.name"
          @delete="deleteTodo(index)"
        />
      </v-list>
    </v-flex>
  </v-layout>
</template>

<script>
'use strict';

import Atodo from "@/components/Atodo";

export default {
  components: {Atodo},
  props: {},
  data() {
    return {
      newtodo: "",
      todosList: []
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
        completed: false
        });
      this.newtodo = "";
    },
    deleteTodo(id) {
      this.todosList.splice(id,1);
    }
  }
};
</script>

<style scoped>
</style>