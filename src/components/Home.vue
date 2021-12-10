<template>
  <div class="row">
    <div class="col s8 offset-s2">
      <div class="container">
        <div class="card" v-if="loggedIn">
          <div class="card-content center-align">
            <form @submit.prevent="enterChat">
              <h4>Enter Your Name:</h4>
              <input type="text" v-model="name" />
              <p v-if="feedback">{{ feedback }}</p>
              <button class="btn green">Enter Chat</button>
            </form>
          </div>
        </div>
        <div class="card" v-if="!loggedIn">
          <div class="card-content center-align">
            <button class="btn green" @click="googleSignIn">
              Sign In with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "Home",
  data: function () {
    return {
      name: null,
      feedback: null,
      loggedIn: false,
    };
  },

  methods: {
    enterChat: function () {
      if (this.name) {
        this.$router.push({
          name: "Chat",
          params: {
            name: this.name,
          },
        });
      } else {
        this.feedback = "Please enter a name!";
      }
    },
    async googleSignIn() {
      const provider = new firebase.auth.GoogleAuthProvider();
      try {
        const response = await firebase.auth().signInWithPopup(provider);
        console.log(response);
        this.loggedIn = true;
      } catch (error) {
        alert(error);
      }
    },
  },
};
</script>
