<template>
  <div>
  <v-hover>
    <v-card
      slot-scope="{ hover }"
      :class="`elevation-${hover ? 12 : 2}`"
      class="mx-auto"
      width="300"
      background-color="grey darken-1"
    >
      <v-card-title>
        <v-text-field
          name="todoName"
          label="todoName"
          single-line
          icon="clear-icon"
          solo
          clearable
          v-model="todoName"
        >
          <!-- Here the todo -->
        </v-text-field>
        <div class="text-xs-center">
          <v-rating 
            v-model="rating"
            length="6"
            dense
            hover='hover'
            color="red darken-3"
            background-color="grey lighten-1"
            :readonly="readonly"
          >
          </v-rating>
        </div>
        <v-btn color="error" @click.prevent="getId">supprimer</v-btn>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-actions>
        <div class="ml-2 grey--text text--darken-2">
          <!-- Author and Date of todo  -->
          <p>date d'ajout : {{date}}</p>
        </div>
      </v-card-actions>
    </v-card>
  </v-hover>
  </div>
</template>

<script >
"use strict";

export default {

  props: {
    id: {
      type: Number
    },
    todoName: {
      type: String
      // required: true
    },
    rating: {
      type: Number
      // required: true
    },
    date: {
      type: String
    }
  },
  data () {
    return {
      hoverRate: true,
      readonly: false,
    }
  },
  methods: {
    getId() {
      // console.log(this.id);
      // return this.id;
      this.$emit("delete");
    }
  },
  computed: {
    hover (){
      return true
    }
  }
};
</script>


<style scoped>
div {
  /* background-color: darkgray; */
}
</style>