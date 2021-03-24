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
            <div>
                <h3 class="my-5">
                    QCM en cybersécurité n°1
                </h3>
                <hr class="w50 mx-auto"/>
                <p class="text-justify pt-70 px-40 f11bold ">
                    <v-container
                      class="px-0"
                      fluid
                    >
                      <v-radio-group v-model="radioGroup">
                        <v-radio
                          v-for="n in 3"
                          :key="n"
                          :label="`Radio ${n}`"
                          :value="n"
                        ></v-radio>
                      </v-radio-group>
                    </v-container>
                </p>
            </div>
            <v-card-actions class="my-5 al">
                <v-btn
                color="primary"
                class="mr-4"
                @click="next()"
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
  export default {
    next:false,
    name:'FormQestion',
    components: {

    },
    data: () => ({
        radioGroup: 1,
    }),

    methods: {
      next(){
        this.next = true;
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