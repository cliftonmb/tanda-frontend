<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newSessionParams: {},
      errors: [],
      isLoggedIn: false
    };
  },
  watch: {
    $route: function () {
      this.isLoggedIn = !!localStorage.jwt
    }
  },
  methods: {
    submit: function () {
      axios
        .post("/sessions", this.newSessionParams)
        .then((response) => {
          axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          this.$router.push("/");
        })
        .catch((error) => {
          console.log(error.response);
          this.errors = ["Invalid email or password."];
          this.email_address = "";
          this.password = "";
        });
    },
  },
};
</script>

<template>
  <div class="login">
    <u>
      <font color="blue">
        <h1>Adnat</h1>
      </font>
    </u>
    <form v-on:submit.prevent="submit()">
      <h2>Login Home</h2>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <p><label>Email:</label></p>
        <input type="email_address" v-model="newSessionParams.email_address" />
      </div>
      <div>
        <p><label>Password:</label></p>
        <input type="password" v-model="newSessionParams.password" />
      </div>
      <input type="submit" value="Log in" />
      <p>
        <router-link to="/signup">Sign up</router-link>
      </p>

      <h1 v-if="!isLoggedIn"><a href="http://localhost:8080/forgot_password">Forgot your password?</a></h1>

    </form>
  </div>
</template>
            <li v-if="!isLoggedIn"><a class="nav-link scrollto" href="/signup">Signup</a></li>
