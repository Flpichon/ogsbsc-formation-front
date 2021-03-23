<template>
  <div id="app">
    <v-app class="height">
      <AppBar />
      <v-content>
        <v-container fill-height grid-list-md text-xs-center fluid>
          <v-layout row wrap align-center>
            <v-flex>
              <router-view></router-view>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import AppBar from '@/components/AppBar.vue'
export default {
  name: 'App',
  components: {
    AppBar,
  },
  data: () => ({
      
    }),
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.height {
  height: 100%;
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
