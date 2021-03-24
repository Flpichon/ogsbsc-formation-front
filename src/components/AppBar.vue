<template>
  <div>
    <v-app-bar class="blue-bar"
      color=""
      dense
      dark
    >
      <v-toolbar-title>
        <v-img
          max-height="170"
          max-width="160"
          src="../img/logo.png"
        ></v-img>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <div @click="Deconnection()">
        <v-avatar color="">
          <v-icon dark>
            mdi-account-circle
          </v-icon>
        </v-avatar>
        <span v-if="isLoggedIn" class="black--text">
          Deconnexion
        </span>
        <span v-else class="black--text">
          Connexion
        </span>
      </div>

      <!-- <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            @click="Notes()"
          >
            <v-list-item-title>Notes</v-list-item-title>
          </v-list-item>
          <v-list-item
            @click="Compte()"
          >
            <v-list-item-title>Compte</v-list-item-title>
          </v-list-item>
           <v-list-item
            @click="Deconnection()"
          >
            <v-list-item-title>Déconnection</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu> -->
    </v-app-bar>
  </div>
</template>

<script>
  import store from './../store'
  export default {
    data: () => ({

    }),
    computed:{ 

      isLoggedIn(){
        return store.getters.isLoggedIn;
        } 
    },
    methods: {
        Compte(){
            this.$router.push('/Compte');
        },
        Notes(){
            this.$router.push('/Notes');
        },
        async Deconnection() {
          return store.dispatch('logout')
            .then(() => {
              console.log(store);
              this.$router.push('/login');
            })
        }
    },
  }
</script>
<style>
.blue-bar{
  background-color: #56CCF2 !important;
}
</style>