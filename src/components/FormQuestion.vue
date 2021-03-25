<template>
  <v-card
    class="mx-auto mt-5 border-shadow"
    max-width="500"
  >
   <v-row
    justify="center"
    class="shadow"
    >
     <v-col  class="shadow my-5"
     cols="12"
     sm="10"
     >
        <v-form
            ref="form"
            v-model="next"
            lazy-validation
        >
          <loading-progress
          :progress="progress"
          :indeterminate="indeterminate"
          :counter-clockwise="counterClockwise"
          :hide-background="hideBackground"
          shape="line"
          size="200"
          width="200"
          height="6"
          />
            <div>
                <h3 class="my-5">
                    {{qcm.enonce}}
                </h3>
                <hr class="w50 mx-auto"/>
                <p class="text-justify pt-70 px-40 f11bold ">
                    <v-container
                      class="px-0"
                      fluid
                    >
                      <v-radio-group v-model="radioGroup">
                        <v-radio
                          v-for="rep in qcm.Reponses"
                          :key="rep.reponseId"
                          :label="rep.contenu"
                          :value="rep.reponseId"
                        ></v-radio>
                      </v-radio-group>
                    </v-container>
                </p>
            </div>
            <v-card-actions class="my-5 al">
                <v-btn
                color="primary"
                class="mr-4"
                @click="nextQ()"
                >
                Valider
                </v-btn>
            </v-card-actions>
        </v-form>
      </v-col>
    </v-row>
  </v-card>
</template>
<script>
import store from '../store';
import axios from 'axios';
  export default {
    name:'FormQestion',
    components: {

    },
    data: () => ({
        next:false,
        radioGroup: '',
        qcm: {
          enonce: '',
          questions: []
        },
        qcms: [],
        indeterminate: false,
        progress: 0,
        counterClockwise: false,
        hideBackground: false,
        interval: ''
    }),

    async mounted() {
      store.commit('setExamen', {statut: true});
      this.timer();
      const data = await axios({
        url: `http://localhost:8002/examen`,
        method: 'GET',
      });
      const qcms = data.data;
      this.qcms = qcms
      this.qcm = qcms[0];
    },

    methods: {
      nextQ() {
        this.next = true;
        if (this.radioGroup) {
          store.commit('addReponse', {reponseId: this.radioGroup});
        } else {
          store.commit('addReponse', {reponseId: false});
        }
        store.commit('nextQ');
        this.progress = 0;
        if (store.state.number < this.qcms.length) {
          this.qcm = this.qcms[store.state.number];
        } else {
          clearInterval(this.interval);
          store.commit('endTest');
          store.commit('setExamen', {statut: false});
          this.$router.push('/Result');
        }
      },
      timer() {
        this.interval = setInterval(() => {
          if ( this.progress < 1 && !store.state.testend) {
            this.progress += 0.05;
            +this.progress.toFixed();
          } else {
            this.nextQ();
            this.progress = 0;
          }
        }, 1000);
      }
    },
  }
</script>
<style>
.al {
  display: flex;
  justify-content: center !important;
  align-items: center !important;
} 
.w50{
  width: 40%;
}
.f11bold{
  font-size: 11px !important;
  font-weight: bold !important;
}
.pt-70{
  padding-top: 70px !important;
}
.pt-85{
  padding-top: 85px !important;
}
.px-40{
  padding-left: 40px !important;
  padding-right: 40px !important;
}
.v-label{
  font-size: 10px !important;
}
.border-shadow{
  border-radius: 4% !important;
  box-shadow: 0px 3px 20px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%) !important;
}

</style>