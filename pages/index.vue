<template>
  <v-container fluid>
    <div class="header">
      <h1 class>The TodO LisT</h1>
    </div>
    <Newtodo/>
  </v-container>
</template>

<script>
'use strict';
import Newtodo from "@/components/Newtodo";

export default {
  components: {
    Newtodo,
  },
  data() {
    return {

    }
  },
};
</script>

<style scoped>
  html, body {
    background-color: lightblue;
  }
</style>

