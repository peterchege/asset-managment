<template>
  <v-stepper  alt-labels v-model="e1">
    <v-stepper-header>
      <v-stepper-step editable :complete="e1 > 1" step="1">Personal Details</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step editable :complete="e1 > 2" step="2">Bank Details</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step editable :complete="e1 > 3" step="3">Source Of Funds</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step editable step="4">General Details</v-stepper-step>

    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-card
          class="mb-12"
          color="grey lighten-1"
        >

            <app-personal-form/>

        </v-card>

        <v-btn
          color="primary"
          @click="e1 = 2"
        >
          Continue
            <v-icon dark right>
                mdi-checkbox-marked-circle
            </v-icon>
        </v-btn>

        <v-btn text>Cancel</v-btn>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card
          class="mb-12"
          color="grey lighten-1"
        >
            
            <app-bank-form/>

        </v-card>

        <v-btn
          color="primary"
          @click="e1 = 3"
        >
          Continue
           <v-icon dark right>
                mdi-checkbox-marked-circle
            </v-icon>
        </v-btn>

        <v-btn text>Cancel</v-btn>
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-card
          class="mb-12"
        >

        <app-source-fund/>

        </v-card>

        

        <v-btn
          color="primary"
          @click="e1 = 1"
        >
          Continue
           <v-icon dark right>
                  mdi-checkbox-marked-circle
                  </v-icon>
        </v-btn>

        <v-btn text>Cancel</v-btn>
      </v-stepper-content>

      <v-stepper-content step="4">
        <v-card
          class="mb-12"
        ></v-card>

        <v-btn
          color="primary"
          @click="e1 = 3"
        >
          Continue
           <v-icon dark right>
                  mdi-checkbox-marked-circle
                  </v-icon>
        </v-btn>

        <v-btn text>Cancel</v-btn>
      </v-stepper-content>


    </v-stepper-items>
  </v-stepper>
</template>

<script>
  export default {
    data () {
      return {
        e1: 1,
      }
    },
    components: {
    appPersonalForm:() => import ('@/components/forms/PersonalInformation'),
    appBankForm:() => import ('@/components/forms/BankDetails'),
    appSourceFund:() => import ('@/components/forms/SourceFund'),
  },
  }
</script>