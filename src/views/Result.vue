<template>
  <v-row class="mt-5"
    justify="center"
    >
      <v-col class="shadow mx-0"
      cols="12"
      sm="9"
      >
        <v-data-table
          :headers="headers"
          :items="QCM"
          :items-per-page="5"
          class="elevation-1"
          :footerProps="{itemsPerPageText,pageText}"
        >
          <template v-slot:top>
            <v-toolbar
              flat
            >
              <v-toolbar-title>résultats QCM:</v-toolbar-title>
              <v-divider
                class="mx-4"
                inset
                vertical
              ></v-divider>
              <v-spacer></v-spacer>
            </v-toolbar>
          </template>
        </v-data-table>
          <div class="font-30 pt-120">
            <span class="pa-5 color-note">
              Note : 11/20
            </span>
            </div>
            <div class="pt-80">
              <v-btn class="mx-2" @click="Retour()"
                  depressed
                  color="primary"
              >
                  Retour au menu
              </v-btn>
            </div>
      </v-col>
  </v-row>
</template>
<script>
  export default {
    data () {
      return {
        pageText:'page suivante',
        itemsPerPageText:"lignes par page",
        dialog:'',
        rowPageText: 'éléments par page:',
        headers: [
          { text: 'Numéro', value: 'Numéro' },
          { text: 'Réussite', value: 'Réussite' },
          { text: 'Enoncé', value: 'Enoncé' },
          { text: 'Réponse', value: 'Reponse' },
        ],
        QCM: [
          {
            Numéro: '1',
            Réussite: 'Oui',
            Enoncé: 'Ipsum',
            Reponse: '4',
          },
        ],
      }
    },
    methods: {
      Retour(){
      this.$router.push('/');
      },
      filtre(){
        return;
      }
    },
  }
</script>
<style>
.al {
  justify-content: center !important;
  align-items: center !important;
}
.font-30{
  font-size: 30px !important;
}
.pt-120{
  padding-top: 120px !important;
}
.pt-80{
  padding-top: 80px !important;
}
.color-note{
  background-color: #DEF1FF;
  border-radius : 10px;
  font-weight: bold;
  text-shadow: 1px 3px 2px #b3b3b3;
}
</style>