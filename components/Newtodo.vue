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
        ></v-text-field>
        <v-btn color="success" @click="addTodo">ajouter un todo</v-btn>
      </v-form>
      <!-- <li v-for="todo in todosList"> -->
        <v-hover>
          <v-card
            slot-scope="{ hover }"
            :class="`elevation-${hover ? 12 : 2}`"
            class="mx-auto"
            width="300"
          >
            <v-card-title>
              <v-text-field name="name" label="label" single-line icon="clear-icon" readonly outline clearable>
                <!-- {{todo}} -->
              </v-text-field>
              <!-- Here the todo -->
              <div class="d-flex">
                <v-rating color="amber" dense half-increments size="20"></v-rating>
                <!-- Change here maybe for choose importance of the todo -->
                <div class="ml-2 grey--text text--darken-2">
                  <!-- Author and Date of todo  -->
                </div>
              </div>
              <v-spacer></v-spacer>
            </v-card-title>
            <v-divider></v-divider>
          </v-card>
        </v-hover>
      <!-- </li> -->
    </v-flex>
  </v-layout>
</template>

<script>
"use strict";

// import Atodo from "@/components/Atodo";

export default {
  data() {
    return {
      newtodo: "",
      todosList: []
    };
  },
  methods: {
    addTodo() {
      this.todosList.push(this.newtodo);
      console.log(this.todosList);
      this.newtodo = "";
    }
  }
};
</script>

<style scoped>
</style>