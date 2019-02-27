<template>
  <v-hover>
    <v-card
      slot-scope="{ hover }"
      :class="`elevation-${hover ? 12 : 2}`"
      class="mx-auto"
      width="300"
    >
      <v-card-title>
        <v-text-field
          name="todoName"
          label="todoName"
          single-line
          icon="clear-icon"
          outline
          clearable
          v-model="todoName"
        >
        <!-- Here the todo -->
        </v-text-field>
        <div class="d-flex">
          <!-- <v-rating v-model="rating"  color="amber" dense half-increments size="20"></v-rating> -->
          <!-- Change here maybe for choose importance of the todo -->
        </div>
        <v-spacer></v-spacer>
        <v-btn color="error" @click="getId">supprimer</v-btn>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-actions>
         <div class="ml-2 grey--text text--darken-2">
            <!-- Author and Date of todo  -->
            <p>{{date}}date</p>
          </div>
      </v-card-actions>
    </v-card>
  </v-hover>
</template>

<script >
'use strict';

  export default {
    props: {
      id: {
        type: Number
      },
      todoName: {
        type: String,
        // required: true
      },
      rating: {
        type: Number,
        // required: true
      },
      date: {
        type: Date,
      }
    },
    methods: {
      getId(){
        // console.log(this.id);
        // return this.id;
        this.$emit('delete');
      }

    }

  };
</script>