<template>
<v-container class="mt-5">
   <v-row
    justify="center"
    >
     <v-col class="border shadow"
     cols="12"
     sm="8"
     >
        <v-form
            ref="form"
            v-model="checkbox"
            lazy-validation
        >
            <div>
                <h2>Vous aller commencer le QCM, il est vivement déconseiller de triché ! :p</h2>

            <v-checkbox
            v-model="checkbox"
            :rules="[v => !!v || 'vous devez accepté de ne pas triché pour continuer !']"
            label="acceptez-vous de ne pas triché ??"
            required
            ></v-checkbox>
            </div>

            <v-btn
            :disabled="!checkbox"
            color="success"
            class="mr-4"
            @click="validate()"
            >
            Faire le Qcm
            </v-btn>

            <v-btn
            color="error"
            class="mr-4"
            @click="retour()"
            >
            Retour
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