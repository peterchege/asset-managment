<template>

    <div>

    <v-card outlined  class="my-7 pa-5"  >
        <v-row class="ma-auto">
            <v-col cols="12" md="6">
                <v-card-title>Preffered mode of recieving monthly correspondence :</v-card-title>
            </v-col>
            <v-col cols="12" md="3">
                <v-checkbox v-model="selected" label="E-mail" value="email"></v-checkbox>
            </v-col>
            <v-col cols="12" md="3">
                <v-checkbox v-model="selected" label="Post" value="post"></v-checkbox>
            </v-col>
        </v-row> 

        <v-row class="ma-auto">
            <v-col cols="12" md="6">
                <v-card-title>Have you previously invested in the Apollo Unit Trust Fund :</v-card-title>
                <v-card-subtitle class="pl-5">(if yes quote the account Number)</v-card-subtitle>
            </v-col>
            <v-col cols="12" md="3">
                <v-checkbox v-model="selected" label="Yes" value="yes"></v-checkbox>
            </v-col>
            <v-col cols="12" md="3">
                <v-checkbox v-model="show" label="No" value="no"></v-checkbox>
                <v-text-field
                    v-if="show"
                    label="Account Number"
                    v-model="accountNumber"
                    outlined
                ></v-text-field>
            </v-col>
        </v-row> 

        <v-row class="ma-auto">
            <v-col cols="12" md="6">
                <v-card-title>Are you an Apollo Investment Group Employess ?</v-card-title>
            </v-col>
            <v-col cols="12" md="3">
                <v-checkbox v-model="selected" label="yes" value="yes"></v-checkbox>
            </v-col>
            <v-col cols="12" md="3">
                <v-checkbox v-model="selected" label="No" value="no"></v-checkbox>
            </v-col>
        </v-row> 

        <v-row class="ma-auto">
            <v-col cols="12" md="6">
                <v-card-title>Preffered mode of recieving monthly correspondence :</v-card-title>
            </v-col>
            <v-col cols="12" md="3">
                <v-checkbox v-model="selected" label="E-mail" value="email"></v-checkbox>
            </v-col>
            <v-col cols="12" md="3">
                <v-checkbox v-model="selected" label="Post" value="post"></v-checkbox>
            </v-col>
        </v-row> 
        
    </v-card>            
    </div>
</template>

<script>
  export default {
    data () {
      return {
        selected: [],
        show: false,
        othersDetails:'',
        accountNumber:'',
      }
    },
  }
</script>