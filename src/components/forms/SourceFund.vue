<template>

    <div>

            <!-- <p>{{ selected }}</p> -->
    <v-card outlined  class="my-7 pa-5"  >
        <v-card-title>The funds for this investment are from: <span class="red--text"> ( Please tick ) </span> </v-card-title>
        <v-row class="ma-auto">
            <v-col cols="12" md="4">
                <v-checkbox v-model="selected" label="Sale of an Investment portfolio" value="investment portfolio"></v-checkbox>
            </v-col>
            <v-col cols="12" md="4">
                <v-checkbox v-model="selected" label="Gift or inheritance" value="Gift or inheritance"></v-checkbox>
            </v-col>
            <v-col cols="12" md="4">
                <v-checkbox v-model="selected" label="Disposal of propert" value="Disposal of propert"></v-checkbox>
            </v-col>
        </v-row> 

        <v-row class="ma-auto">
            <v-col cols="12" md="4">
                <v-checkbox v-model="selected" label="Savings" value="Savings"></v-checkbox>
            </v-col>
            <v-col cols="12" md="4">
                <v-checkbox v-model="show" label="others (please state)" value="true"></v-checkbox>
                <v-text-field
                    v-if="show"
                    v-model="othersDetails"
                    outlined
                    :disabled="disable"
                ></v-text-field>
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
        othersDetails:''
      }
    },
  }
</script>