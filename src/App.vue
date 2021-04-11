<template>
  <div id="app">
    <header>
      Header
      <h1>Vue.js SPA</h1>
      Count: {{ count }}.
      <span class="button" @click="increment">
        [+]
      </span>
      <!-- <br />
      truth: {{ $root.$data.thuth }}.
      <a @click="incrementTruth">
        [+]
      </a> -->
    </header>
    <main>
      <aside class="sidebar">
        Aside
      </aside>
      <div class="content">
        Content
      </div>
    </main>
    <footer>
      Footer
    </footer>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop(String)
  count: number = 0;

  increment() {
    this.count++;
  }
  // incrementTruth() {
  //   this.$root.$data.thuth += '?';
  // }
}
</script>

<style lang="scss">
header {
  background: lightblue;
}
aside {
  background: lightgreen;
}
.button {
  cursor: pointer;
  &:hover {
    color: red;
  }
}
</style>
