<template>
  <v-form ref="form" v-model="valid">
    <v-container>
      <v-row
        :align="alignment"
        :justify="justify"
      >
         <v-col class="border shadow lighten-3"
            cols="12"
            sm="8"
          >
          <v-row
            :align="alignment"
            :justify="justify"
          >
            <v-col class="my-5"
              cols="9"
              md="8"
            >
            <p class="display-1 cyan-custom font-weight-bold">Connexion</p>
            </v-col>
          </v-row>
          <v-row
            :align="alignment"
            :justify="justify"
          >
            <v-col
              cols="12"
              sm="8"
            >
              <v-text-field
                v-model="login"
                :rules="Rules"
                :counter="10"
                color="success"
                label="login"
                outlined
                required
              ></v-text-field>
            </v-col>
          </v-row>
                
          <v-row
            :align="alignment"
            :justify="justify"
          >   
            <v-col
              cols="12"
              sm="8" 
            >
              <v-text-field
                v-model="password"
                :rules="Rules"
                :counter="10"
                label="password"
                outlined
                color="success"
                required
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show1 ? 'text' : 'password'"
                name="input-10-1"
                hint="At least 8 characters"
                @click:append="show1 = !show1"
              ></v-text-field>
            </v-col>

          </v-row>
          <v-row
            :align="alignment"
            :justify="justify"
          >

            <v-col class="mt-5 text-center" 
            cols="12" 
            sm="8">
            <div class="my-2">
              <v-btn x-large color="success"
              :disabled="!valid"
              @click="validate">Valider</v-btn>
            </div>
            </v-col>
            <v-col class="mt-5 text-center" 
            cols="12" 
            sm="8">
              <div class="my-0">
                <p>Mot de passe oublié ?</p>
              </div>
            </v-col>
          </v-row>
         </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import axios from 'axios';
import store from './../store';
  export default {
    data: () => ({
      show1:false,
      valid: false,
      login: '',
      password: '',
      Rules: [
        v => !!v || 'input is required',
        v => v.length <= 10 || 'input must be less than 10 characters',
      ],
      alignmentsAvailable: [
          'start',
          'center',
          'end',
          'baseline',
          'stretch',
        ],
        alignment: 'center',
        dense: false,
        justifyAvailable: [
          'start',
          'center',
          'end',
          'space-around',
          'space-between',
        ],
        justify: 'center',
    }),
    methods: {
      validate () {
        const user = {
          username: this.login,
          password: this.password
        };
        store.dispatch('login', user).then(() => {
          console.log('yo', this.$router);
          this.$router.push('/').catch(e => {});
        })
      },
    },
  }
</script>
<style lang="scss">
 .border {
   border : solid 3px #ffffff;
   border-radius: 5%;
 } 
//  .shadow {
//    -webkit-box-shadow: 10px 4px 51px -3px rgba(0,0,0,0.75);
//     -moz-box-shadow: 10px 4px 51px -3px rgba(0,0,0,0.75);
//     box-shadow: 10px 4px 51px -3px rgba(0,0,0,0.75);
//  }
.cyan-custom {
  color: #42A9B7 !important;
}
</style>