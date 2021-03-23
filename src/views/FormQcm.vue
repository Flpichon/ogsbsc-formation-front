<template>
  <v-card
    class="mx-auto mt-5"
    max-width="500"
  >
   <v-row v-if="!triche"
    justify="center"
    class="shadow"
    >
     <v-col  class="shadow"
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
                    Vous aller commencer le QCM, il est vivement déconseiller de triché ! :p
                </h2>

            <v-checkbox
            v-model="checkbox"
            :rules="[v => !!v || 'vous devez accepté de ne pas triché pour continuer !']"
            label="acceptez-vous de ne pas triché ??"
            required
            ></v-checkbox>
            </div>
            <v-card-actions class="my-5">
                <v-btn
                :disabled="!checkbox"
                color="success"
                class="mr-4"
                @click="validate()"
                >
                Faire le Qcm
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn
                color="error"
                class="mr-4"
                @click="retour()"
                >
                Retour
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

    methods: {
      validate () {
        this.triche=true;
      },
      retour () {
        this.$router.push('/');
      },
    },
  }
</script>