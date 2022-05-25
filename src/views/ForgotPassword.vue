<script>
import axios from "axios";

export default {
  data: function () {
    return {
      userParams: {},
      errors: [],
    };
  },
  methods: {
    submit: function () {
      axios
        .patch("/users", this.userParams)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/login");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>

<template>
  <div class="signup">
    <form v-on:submit.prevent="submit()">
      <h1>Change Password</h1>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>

      <div>
        <label>Email:</label>
        <input type="email_address" v-model="userParams.email_address" />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" v-model="userParams.password" />
      </div>
      <div>
        <label>Password confirmation:</label>
        <input type="password" v-model="userParams.password_confirmation" />
      </div>
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>