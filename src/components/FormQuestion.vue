<template>
<v-container class="mt-5 shadow">
   <v-row
    justify="center"
    >
     <v-col class="shadow"
     cols="12"
     sm="10"
     >
        <v-form
            ref="form"
            v-model="checkbox"
            lazy-validation
        >
            <div>
                <h2 class="my-5">Question 1:</h2>
            </div>
             <v-radio-group v-model="reponse">
              <v-radio
                v-for="n in 3"
                :key="n"
                :label="`réponse ${n}`"
                :value="n"
              ></v-radio>
            </v-radio-group>

            <v-btn
            :disabled="!checkbox"
            color="success"
            class="mr-4 my-5"
            @click="validate()"
            >
            Suivant
            </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
  export default {
    data: () => ({
      checkbox: false,
      reponse: 1,
    }),

    methods: {
      validate () {
        return;
      },
      retour () {
        this.$router.push('/');
      },
    },
  }
</script>