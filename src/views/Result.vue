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
          <template v-slot:[`item.Reussite`]="{item}">
            <span
              :class="getColor(item.Reussite)"
              dark
            >
            {{ item.Reussite }}
            </span>
          </template>
        </v-data-table>
          <div class="font-30 pt-120">
            <span class="pa-5 color-note">
              Note : {{bonnesR.length}} / {{QCM.length}}
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
import axios from 'axios';
import store from '../store'
  export default {
    data () {
      return {
        pageText:'page suivante',
        itemsPerPageText:"lignes par page",
        dialog:'',
        rowPageText: 'éléments par page:',
        headers: [
          { text: 'Numéro', value: 'Numéro', sortable: false },
          { text: 'Reussite', value: 'Reussite', sortable: false,},
          { text: 'Enoncé', value: 'Enoncé', sortable: false },
          { text: 'Bonne réponse', value: 'BReponse', sortable: false },
          { text: 'Votre réponse', value: 'VReponse', sortable: false }
        ],
        QCM: [
        ],
        rawQcms: [],
        bonnesR: []
      }
    },
    async mounted() {
      const data = await axios({
        url: `http://localhost:8002/examen`,
        method: 'GET',
      });
      const qcms = data.data;
      this.rawQcms = qcms;
      console.log(store.state);
      this.rawQcms.forEach(rawQcm => {
        const VReponse = rawQcm.Reponses.find(reponse => {
          return store.state.resultats.some(res => res === reponse.reponseId)
        }) || {};
        const BReponse = rawQcm.Reponses.find(reponse => !!reponse.isValid);
        let ok;
        if (!!VReponse.reponseId && !!BReponse.reponseId) {
          ok = VReponse.reponseId === BReponse.reponseId;
        } else {
          ok = false;
        }
        if (ok) {
          this.bonnesR.push(BReponse);
        }
        this.QCM.push({
          Numéro: rawQcm.qcmId,
          Reussite: ok ? 'Oui' : 'Non',
          Enoncé: rawQcm.enonce,
          VReponse: VReponse.contenu || 'Non répondu',
          BReponse: BReponse.contenu
        });
      });
      if (this.QCM.length) {
        const ids = this.bonnesR.map(rep => rep.reponseId);
        const userId = store.state.userId;
        const nbr = this.rawQcms.length;
        console.log('yo');
        await axios({
          url: `http://localhost:8002/resultats`,
          method: 'POST',
          data: {
            ids,
            userId,
            nbr
          }
        });
      }
        this.rawQcms = [];
        this.QCM = [];
        this.bonnesR = [];
    },
    methods: {
      Retour(){
      this.$router.push('/');
      },
      filtre(){
        return;
      },
      getColor(resultat) {
        if (resultat === 'Oui') {
          return 'green--text';
        } else {
          return 'red--text';
        }
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