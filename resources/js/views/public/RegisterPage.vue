<template>
  <div style="margin-top: 20vh">
    <v-row justify="center">
      <v-col cols="12" md="5">
        <v-card class="pa-6" flat>
          <v-toolbar
            class="d-flex justify-center font-weight-bold"
            flat
          >
            Create an account to use this App
          </v-toolbar>
          <v-form lazy-validation ref="form">
            <label>Email Address</label>
            <v-text-field
              v-model="form['email']"
              outlined
              dense
              placeholder="Enter Email"
            ></v-text-field>
            <v-text-field
              v-model="form.password"
              outlined
              dense
              placeholder="Enter Password"
            ></v-text-field>
            <v-card-actions class="px-0">
              <v-btn
                block
                depressed
                color="primary"
                class="mx-0"
              >Login</v-btn>
            </v-card-actions>
          </v-form>
          <v-card-text class="pa-0">Already have account yet?
            <v-btn to="/sign_in" text class="text-lowercase">Login</v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  export default {
    name: "RegisterPage",
    data() {
      return {
        form: {},
      };
    },
  };
</script>

<style scoped>

</style>