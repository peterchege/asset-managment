<template>
      <v-card outlined  class="my-7"  >
       
          <v-row class="mx-2 py-7 px-10" >
            <v-col
              class="align-center justify-space-between"
              cols="12" md="12" sm="12"
            >
              <v-row
                align="center"
                class="mr-0"
              >

            <v-col cols="4" md="4" sm="12">
              <v-text-field
                prepend-icon="mdi-account"
                label="First Name"
                v-model="companyName"
                :rules="InputRulescompanyName"
              ></v-text-field>
            </v-col>
            <v-col cols="4" md="4" sm="12">
              <v-text-field
                prepend-icon="mdi-account"
                label="First Name"
                v-model="companyName"
                :rules="InputRulescompanyName"
              ></v-text-field>
            </v-col>
            <v-col cols="4" md="4" sm="12">
              <v-text-field
                prepend-icon="mdi-email"
                label="Email"
                v-model="companyEmail"
                :rules="InputRulescompanyEmail"
              ></v-text-field>
            </v-col>
              </v-row>

            </v-col>
            <v-col cols="4">
              <v-text-field
                prepend-icon="mdi-phone"
                label="Phone Number"
                v-model="phoneNumber"
                :rules="InputRulesphoneNumber">
               </v-text-field>
            </v-col>
            <v-col cols="4" >
              <v-text-field
                prepend-icon="mdi-folder"
                label="KRA PIN"
                v-model="kra"
                :rules="InputRuleskra">
               </v-text-field>
            </v-col>

            <v-col cols="4">
              <v-text-field
                type="tel"
                prepend-icon="mdi-folder-account"
                label="VAT NO."
                v-model="vat"
                :rules="InputRulesbankVAT"
              ></v-text-field>
            </v-col>

            <v-col cols="4">
              <v-text-field
                prepend-icon="mdi-folder-account"
                label="Bank Name"
                v-model="bankName"
                :rules="InputRulesbankName"
              ></v-text-field>
            </v-col>
            <v-col cols="4">
              <v-text-field
                type="tel"
                prepend-icon="mdi-folder-pound"
                label="Bank Branch"
                v-model="bankBranch"
                :rules="InputRulesbankBranch"
              ></v-text-field>
            </v-col>
            <v-col cols="4">
              <v-text-field
                type="tel"
                prepend-icon="mdi-folder-table"
                label="Bank Account No."
                v-model="bankAccount"
                :rules="InputRulesbankAccount"
              ></v-text-field>
            </v-col>

            <v-col cols="6">
              <v-text-field
                type="tel"
                prepend-icon="mdi-badge-account-horizontal"
                label="Physical Address"
                v-model="address"
                :rules="InputRulesAddress"
              ></v-text-field>
            </v-col>

          </v-row>
       
      </v-card>
    
</template>

<script>
export default {
    data: () => ({
      companyName: '',
      companyEmail: '',
      phoneNumber:'',
      kra:'',
      bankName:'',
      bankBranch:'',
      bankAccount:'',
      vat:'',
      address:'',
      assignedRole: 5,
      assignedService:'',
      dialog: false,
      dialogInvite: false,
      alert: false,
      InputRulescompanyName: [ v => !!v || "enter your Name"],
      InputRulescompanyEmail: [ v => !!v || "enter your Email"],
      InputRulesphoneNumber: [ v => !!v || "enter your Phone Number"],
      InputRuleskra: [ v => !!v || "enter KRA PIN"],
      InputRulesbankName: [ v => !!v || "enter the Bank Name"],
      InputRulesbankBranch: [ v => !!v || "enter the Bank Branch"],
      InputRulesbankAccount: [ v => !!v || "enter the Bank Account"],
      InputRulesbankVAT: [ v => !!v || "enter the VAT"],
      InputRulesRole: [ v => !!v || "enter the ROle"],
      InputRulesAddress: [ v => !!v || "enter the Address"]
    }),
    
    methods:{
      inviteVendor(){        
         this.dialogInvite= true;

        const inviteData = {
          name : this.companyName,
          email: this.companyEmail,
          phone: this.phoneNumber,
          pin: this.kra,
          vat: this.vat,
          physical_address : this.address,
          bank_name: this.bankName,
          bank_account: this.bankAccount,
          bank_branch: this.bankBranch,
          role: this.assignedRole,
          service: this.assignedService
        }
        console.log(inviteData)
        this.$store.dispatch('inviteVendor', inviteData)
        this.$emit('userAdded')
        
      },
      vendorCancel(){        
        this.dialog = false;
        this.companyName= '',
        this.companyEmail= '',
        this.phoneNumber='',
        this.kra='',
        this.bankName='',
        this.bankBranch='',
        this.bankAccount='',
        this.vat='',
        this.address='',
        this.assignedRole= '',
        this.assignedService='',
        this.roles= ''
     
        }
    },
}
</script>

