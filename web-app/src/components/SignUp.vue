<script setup>
import { ref } from 'vue'

const showPassword = ref(false)
const password = ref(null) 

const confirmPassword= ref(null)
const showConfirm = ref(false)
const rules = {
    required: value => !!value || 'Required.',//if statements 
    min: v => v.length >= 8 || 'Min 8 characters', //if statements
    passwordMatch: () => password == confirmPassword || 'Passwords must match' //function to check passwords are matching
  }  

  //data models
  const firstName = ref(null) //ref makes it reactive 
  const lastName= ref(null)
  const email= ref(null)
  const address= ref(null)
  const phone= ref(null)
  const location= ref(null)

function register(){
    const data={
        firstName:firstName.value,
        lastName:lastName.value,
        email:email.value,
        address:address.value,
        phone:phone.value,
        location:location.value,
        password:password.value,
    }
    try{
        localStorage.setItem("user", JSON.stringify(data))
    }catch{
        console.log("Error signing up")
    }

}


</script>
<template>
<v-container align="center" class="mt-16">
    <v-row>
        <v-col>
            <v-card max-width="80%" class="bg-secondary" >
             <v-form class="ma-8">
                <v-row>
                    <v-col md="3">
                        <div>First Name</div>
                    </v-col>
                    <v-col md="3">
                        <v-text-field v-model="firstName" ></v-text-field>
                    </v-col>
                    <v-col md="3">
                        <div>Last Name</div>
                    </v-col>
                    <v-col md="3">
                        <v-text-field v-model="lastName"></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col md="3">
                        <div>Email</div>
                    </v-col>
                    <v-col md="3">
                        <v-text-field v-model="email"></v-text-field>
                    </v-col>
                    <v-col md="3">
                        <div >Phone</div>
                    </v-col>
                    <v-col md="3">
                        <v-text-field type="number" v-model="phone"></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col md="3">
                        <div>Location</div>
                    </v-col>
                    <v-col md="3">
                        <v-select :items="['Langata','Rongai','Muthaiga','Runda']" v-model="location"> 

                        </v-select>
                    </v-col>
                    <v-col md="3">
                        <div>Address</div>
                    </v-col>
                    <v-col md="3">
                        <v-text-field v-model="address"></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col md="3">
                        <div>Password</div>
                    </v-col>
                    <v-col md="3">
                        <v-text-field 
                                v-model="password"
                                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                :rules="[rules.required, rules.min]"
                                :type="showPassword ? 'text' : 'password'"
                                variant="outlined"
                                @click:append="showPassword = !showPassword"
                            ></v-text-field>
                    </v-col>
                    <v-col md="3">
                        <div>Confirm password</div>
                    </v-col>
                    <v-col md="3">
                        <v-text-field 
                                v-model="confirmPassword"
                                :append-icon="showConfirm ? 'mdi-eye' : 'mdi-eye-off'"
                                :rules="[rules.required, rules.min, rules.passwordMatch,]"
                                :type="showConfirm ? 'text' : 'password'"
                                variant="outlined"
                                @click:append="showConfirm = !showConfirm"
                            ></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col md="6">
                        <v-btn @click="register()">Sign up</v-btn>
                    </v-col>
                    
                    <v-col md="6">
                        <div>Already have an account?</div>
                    </v-col>
                    
                </v-row>
                

             </v-form>
            </v-card>
        </v-col>
    </v-row>
</v-container>


</template>

//data modelling in programming
//vue 3
//reactivity, v-model, data model Object
//give an example for wishlist- online booksStore