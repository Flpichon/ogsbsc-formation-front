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
              <v-toolbar-title>résultats</v-toolbar-title>
              <v-divider
                class="mx-4"
                inset
                vertical
              ></v-divider>
              <v-spacer></v-spacer>
              <v-dialog
                v-model="dialog"
                max-width="500px"
              >
                <template v-slot:activator="{}">
                  <v-btn
                    class="mb-2"
                    @click="filtre()"
                  >
                    Filtres
                  </v-btn>
                </template>
              </v-dialog>
            </v-toolbar>
          </template>
            <template v-slot:item.Voir="{ item }">
              <div class="al">
                <v-icon
                  large
                  class="mr-2 al"
                  @click="retour(item)"
                >
                  mdi-arrow-top-right
                </v-icon>
              </div>
            </template>
        </v-data-table>
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
          { text: 'Id', value: 'Id' },
          { text: 'Date', value: 'Date' },
          { text: 'Difficulté', value: 'Difficulté' },
          { text: 'Nom QCM', value: 'NomQCM' },
          { text: 'Note', value: 'Note' },
          { text: 'Commentaire', value: 'Commentaire' },
          { text: 'Voir mes réponses', value: 'Voir' },
        ],
        QCM: [
          {
            Id: '120',
            Date: '25/11/2018',
            Difficulté: 'Expert',
            NomQCM: 'Linux',
            Note: '8/20',
            Commentaire: 'A revoir',
            Voir:'↗',
          },
          {
            Id: '121',
            Date: '02/12/2018',
            Difficulté: 'Débutant',
            NomQCM: 'Php et Mysql',
            Note: '14/20',
            Commentaire: 'Bien',
            Voir:'↗',
          },
          {
            Id: '122',
            Date: '04/06/2019',
            Difficulté: 'Intermédiaire',
            NomQCM: 'Deep learning',
            Note: '11/20',
            Commentaire: 'Peu mieux faire',
            Voir:'↗',
          },
          {
            Id: '123',
            Date: '10/02/2019',
            Difficulté: 'Expert',
            NomQCM: 'Macro',
            Note: '10/20',
            Commentaire: 'Trop juste',
            Voir:'↗',
          },
        ],
      }
    },
    methods: {
      retour(){
        return;
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
  
</style>