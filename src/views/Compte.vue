<template>
  <v-card
    class="mx-auto mt-5"
    max-width="800"
  >
    <v-img
      class="white--text align-end"
      height="300px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    >
      <v-card-title>Arnaud Tortellini</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">
      Promotion :
    </v-card-subtitle>

    <v-card-text class="text--primary">
      <div>BTS SIO</div>

      <div>email : tortellini.arnaud@gmail.com</div>

      <div>Responsable pédagogie : M.Autonomie</div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="orange"
        text
      >
        Modifier
      </v-btn>

      <v-btn @click="Retour()"
        color="orange"
        text
      >
        Retour
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
  export default {
          methods: {
        Retour(){
            this.$router.push('/');
        },
        Modifier(){
            return;
        }
    },
  }
</script>