<template>
  <v-card
    max-width="800"
    class="mx-auto mt-5"
  >
    <v-list
      subheader
    >
      <v-subheader inset>Notes</v-subheader>

      <v-list-item
        v-for="folder in folders"
        :key="folder.title"
      >
        <v-list-item-avatar>
          <v-icon
            class="grey lighten-1"
            dark
          >
            mdi-folder
          </v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title v-text="folder.title"></v-list-item-title>

          <v-list-item-subtitle v-text="folder.subtitle"></v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action>
            <span v-text="folder.note +'/20'"></span>
        </v-list-item-action>
      </v-list-item>

      <!-- <v-divider inset></v-divider> -->
    </v-list>
      <v-btn @click="Retour()"
        color="orange"
        text
      >
        Retour
      </v-btn>
  </v-card>
</template>
<script>
  export default {
    data: () => ({
      folders: [
        {
          subtitle: 'Jan 9, 2021',
          title: 'dst cybersécu 1',
          note:'8'
        },
        {
          subtitle: 'Jan 17, 2021',
          title: 'qcm surprise cybersécu',
          note:'4'
        },
        {
          subtitle: 'Jan 28, 2021',
          title: 'qcm cybersécu 1',
          note:'16'
        },
      ],
    }),
    methods: {
        Retour(){
            this.$router.push('/');
        },
    },
  }
</script>