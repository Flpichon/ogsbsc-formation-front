<template>
  <v-card
    class="mx-auto"
    max-width="650"
  >
  <v-form v-model="valid">
    <v-container>
      <p class="font-profil text-left">Profil<p>
      <hr/>
      <v-row class="pt-5">
        <v-col class="py-1"
          cols="12"
          sm="6"
        >
        <p class="text-left">Nom</p>
        </v-col>
        <v-col class="py-1"
          cols="12"
          sm="6"
        >
          <v-text-field
            v-model="message"
            solo
            label="Dupont"
            hide-details="auto"
          ></v-text-field>
        </v-col>
        <v-col class="py-1"
          cols="12"
          sm="6"
        >
        <p class="text-left">Prénom</p>
        </v-col>
        <v-col class="py-1"
          cols="12"
          sm="6"
        >
          <v-text-field
            v-model="message1"
            solo
            label="Jean"
            hide-details="auto"
          ></v-text-field>
        </v-col>
        <v-col class="py-1"
          cols="12"
          sm="6"
        >
        <p class="text-left">Date de naissance</p>
        </v-col>
        <v-col class="py-1"
          cols="12"
          sm="6"
        >
        <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                solo
                v-model="date"
                label="Birthday date"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
                hide-details="auto"
              ></v-text-field>
            </template>
            <v-date-picker
              ref="picker"
              v-model="date"
              :max="new Date().toISOString().substr(0, 10)"
              min="1950-01-01"
              @change="save"
            ></v-date-picker>
          </v-menu>
        </v-col>
        <v-col class="py-1"
          cols="12"
          sm="6"
        >
        <p class="text-left">Adresse mail</p>
        </v-col>
        <v-col class="py-1"
          cols="12"
          sm="6"
        >
          <v-text-field
            v-model="message2"
            solo
            label="*******@gmail.com"
            hide-details="auto"
          ></v-text-field>
        </v-col>
        <v-col class="py-1"
          cols="12"
          sm="6"
        >
        <p class="text-left">Mot de passe</p>
        </v-col>
        <v-col class="py-1"
          cols="12"
          sm="6"
        >
          <v-text-field
            v-model="message3"
            solo
            label="*******"
            hide-details="auto"
            type="password"
          ></v-text-field>
        </v-col>
        <v-col class="py-1"
          cols="12"
          sm="6"
        >
        <p class="text-left">Comfirmer nouveau mot de passe</p>
        </v-col>
        <v-col class="py-1"
          cols="12"
          sm="6"
        >
          <v-text-field
            v-model="message4"
            solo
            label="*******"
            hide-details="auto"
            type="password"
          ></v-text-field>
        </v-col>
        <v-col class="py-1"
          cols="12"
          sm="6"
        >
        <p class="text-left">Status</p>
        </v-col>
        <v-col class="py-1"
          cols="12"
          sm="6"
        >
        <v-select
          :items="items"
          label=". . ."
          solo
        ></v-select>
        </v-col>
        <v-col class="end mb-5"
          cols="12"
          sm="12"
        >
          <v-btn class="mx-2" @click="Retour()"
              depressed
              color="primary"
          >
              Annuler
          </v-btn>
          <v-btn class="mx-2" @click="Modifier()"
              depressed
              color="primary"
          >
              Modifier
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
  </v-card>
</template>
<script>
  export default {
    data: () => ({
      valid: false,
      message:'',
      message1:'',
      message2:'',
      message3:'',
      message4:'',
      date: null,
      menu: false,
      items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
    }),
    watch: {
      menu (val) {
        val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))
      },
    },
    methods: {
      save (date) {
        this.$refs.menu.save(date)
      },
      Retour(){
          this.$router.push('/');
      },
      Modifier(){
          return;
      }
    },
  }
</script>
<style>
.end{
  text-align: end !important;
}
.font-profil{
  font-size: 20px;
}
</style>