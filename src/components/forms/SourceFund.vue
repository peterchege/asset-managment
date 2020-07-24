<template>
    <div>
            <p>{{ selected }}</p>

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
                <v-checkbox v-model="selected" label="John" value="John"></v-checkbox>
            </v-col>
            <v-col cols="12" md="4">
                <v-checkbox v-model="selected" label="John" value="John"></v-checkbox>
            </v-col>
            <v-col cols="12" md="4">
                <v-checkbox v-model="selected" label="John" value="John"></v-checkbox>
            </v-col>
        </v-row> 
                
    </div>
</template>

<script>
  export default {
    data () {
      return {
        selected: ['John'],
      }
    },
  }
</script>