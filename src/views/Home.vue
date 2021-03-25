<template>
  <div>
  <v-row class="mt-5"
    justify="center"
    >
      <v-col class="shadow mx-2"
      cols="12"
      sm="3"
      >
      <v-card @click="GoToQcm()"
          class="mx-auto al rounded-lg"
          :class="ended ? 'disabled' : 'green'"
          min-height="190"
        >
          <v-card-text class="mx-4">
            <span class="white--text font-26">Participer à la session du jour</span>
          </v-card-text>
        </v-card>
      </v-col>
          <v-col class="shadow mx-2"
      cols="12"
      sm="3"
      >
      <v-card @click="Notes()"
          class="mx-auto al rounded-lg cyan"
          min-height="190"
        >
          <v-card-text class="mx-4">
            <span class="white--text font-26">Voir les résultats des sessions précédentes</span>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
      <v-row class="mt-5"
    justify="center"
    >
      <v-col class="shadow mx-2"
      cols="12"
      sm="3"
      >
      <v-card @click="Compte()"
          class="mx-auto al rounded-lg pink"
          min-height="190"
        >
          <v-card-text class="mx-4">
            <span class="white--text font-26">Modifier mon profil</span>
          </v-card-text>
        </v-card>
      </v-col>
          <v-col class="shadow mx-2"
      cols="12"
      sm="3"
      >
      <v-card @click="Deconnection()"
          class="mx-auto al rounded-lg violet"
          min-height="190"
        >
          <v-card-text class="mx-4">
            <span class="white--text font-26">Déconnexion</span>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
// @ is an alias to /src
import store from '../store';
import axios from 'axios'
export default {
  name: 'Home',
  components: {
  },
  data: () => ({
    ended: false,
    valid: false,
    justify: [
        'start',
        'center',
        'end',
        'space-around',
        'space-between',
      ],
    }),
    mounted() {
      console.log(store.state);
      this.ended = store.state.testend;
    },
    methods: {
      async GoToQcm() {
        this.$router.push('/FormQcm');
      },
      Notes(){
        this.$router.push('/Notes');
      },
      Compte(){
          this.$router.push('/Compte');
      },
      async Deconnection(){
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
.icon-size-80{
  font-size: 80px !important;
}
div {
  font-family: roboto
}
.al {
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
}
.cyan {
  background-color: #42A9B7;
}
.green{
  background-color: #42B786;
}
.pink{
  background-color: #B7427A;
}
.violet{
  background-color: #7642B7 !important;
}
.font-26{
  font-size: 28px !important;
  text-shadow: 1px 1px 2px #000000;
}

.disabled {
  pointer-events: none;
  background-color: dimgray !important;
}
</style>