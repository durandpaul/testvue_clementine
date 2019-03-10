<template>
  <section>
      <h4>Nombre de todos : {{todosCount}}</h4>
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
          <v-btn color="success" value= newtodo @click.prevent="add(newtodo)" >ajouter un todo</v-btn>
        </v-form>
        <div>
          <p v-show="empty">Votre TodO est vide !</p>
          <p v-show="todosExist">Ajouter votre Todo ! todocement.</p>
        </div>
        <v-list v-for="(todo, index) in todos" :key="index">
          <Atodo :id="index" :todoName="todo.name" :date="todo.date" @delete="deleteTodo(index)"/>
        </v-list>
      </v-flex>
    </v-layout>
  </section>
</template>

<script>
"use strict";

import Atodo from "@/components/Atodo";
import { mapGetters, mapActions } from "vuex";

export default {
  components: { Atodo },
  head () {
    return {
      title: 'The TodO LisT'
    }
  },
  data() {
    return {
      newtodo: '',
      empty: false,
      dateOptions: {
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      },
      filtered:'all',
    };
  },
  async fetch ({ store, params }) {
    await store.dispatch('GET_TODOS');
  },
  methods: {
    ...mapActions({
      addTodo: 'todostore/ADD_TODO',
    }),
    deleteTodo(id) {

    },
    add(name){
      
      if(name === ''){
        this.empty = true;
      } else {
        this.empty = false;
        this.addTodo(name);
        this.newtodo = '';
      }
    },
  },
  computed: {
    ...mapGetters({
      todos:'todostore/todos',
      todosCount:'todostore/todosCount',
    }),
    // todos () {
    //   return todos;
    // },
    todosExist() {
      if ( this.todosCount == 0) {
        return true;
      }
    },

  }
};
</script>

<style scoped>
section {
  background-color: darkgray;
}
div > p {
  color: rgb(240, 84, 23);
}
</style>