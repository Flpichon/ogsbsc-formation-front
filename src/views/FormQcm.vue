<template>
  <v-card
    class="mx-auto mt-5 border-shadow"
    max-width="500"
  >
   <v-row v-if="!triche"
    justify="center"
    class="shadow"
    >
     <v-col  class="shadow my-5"
     cols="12"
     sm="10"
     >
        <v-form
            ref="form"
            v-model="checkbox"
            lazy-validation
        >
            <div>
                <h2 class="my-5">
                    QCM en cybersécurité n°1
                </h2>
                <hr class="w50 mx-auto"/>
                <p class="text-justify pt-70 px-40 f11bold ">Vous êtes sur le point de participer au QCM: cybersécurité n°1</p>
                <p class="text-justify px-40 f11bold ">Nous vous rappelons qu'il est interdit de tricher et que vous allez avoir un temps limité pour chaque questions.</p>

            <v-checkbox class="pt-85 px-5 "
            v-model="checkbox"
            :rules="[v => !!v || '']"
            label="Je m'engage sur l'honneur à ne pas tricher durant l'intégralitée du QCM, au risque de poursuite et d'interdiction à participer à des examens d'OGSBC Formation."
            required
            ></v-checkbox>
            </div>
            <v-card-actions class="my-5 al">
                <v-btn
                :disabled="!checkbox"
                color="success"
                class="mr-4"
                @click="validate()"
                >
                Faire le Qcm
                </v-btn>
            </v-card-actions>
        </v-form>
      </v-col>
    </v-row>
    <FormQuestion v-if="triche"/>
  </v-card>
</template>
<script>
import FormQuestion from '@/components/FormQuestion.vue'
  export default {
    name:'FormQcm',
    components: {
        FormQuestion,
    },
    data: () => ({
      checkbox: false,
      triche:false,
    }),
    mounted() {
    },
    methods: {
      validate () {
        this.triche = true;
      },
      retour () {
        this.$router.push('/');
      },
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