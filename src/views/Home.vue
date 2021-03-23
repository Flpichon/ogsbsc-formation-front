<template>
  <v-row class="mt-5"
  justify="center"
  >
    <v-col class="shadow"
    cols="12"
    sm="3"
    >
    <v-card
        class="mx-auto"
        max-width="350"
        min-height="270"
      >
    <v-icon class="mt-5 icon-size-80"
      x-large
      color="blue darken-2"
    >
      mdi-message-text
    </v-icon>

       <v-card-subtitle class="">
          Session en cours
        </v-card-subtitle>

        <v-card-text class="text--primary">
          <div>Un questionnaire est en cour.</div>
        </v-card-text>

        <v-card-actions>
          <v-btn block
            color="orange"
            text
            @click="GoToQcm()"
          >
            Faire le QCM
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
        <v-col class="shadow"
    cols="12"
    sm="3"
    >
    <v-card
        class="mx-auto"
        max-width="350"
        min-height="270"
      >
    <v-icon class="mt-5 icon-size-80"
      x-large
      color="blue darken-2"
    >
      mdi-message-text
    </v-icon>

        <v-card-subtitle class="">
          Voir les résultats
        </v-card-subtitle>

        <v-card-text class="text--primary">
          <div>Notes des QCM</div>

        </v-card-text>

        <v-card-actions>
          <v-btn block
            color="orange"
            text
            @click="Notes()"
          >
            Voir
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  components: {
  },
  data: () => ({
    valid: false,
    justify: [
        'start',
        'center',
        'end',
        'space-around',
        'space-between',
      ],
    }),
    methods: {
      GoToQcm(){
        this.$router.push('/FormQcm');
      },
      Notes(){
        this.$router.push('/Notes');
      }
    },
}
</script>
<style>
.icon-size-80{
  font-size: 80px !important;
}
</style>