<template>
  <div class="container chat">
    <div class="center">
      <router-link to="/" class="btn green">Back to Home</router-link>
    </div>
    <div class="card">
      <div class="card-content">
        <ul class="messages" v-chat-scroll>
          <li
            class="chat-message"
            v-for="message in messages"
            :key="message.id"
          >
            <div class="right-bubble" v-if="message.name === name">
              <span class="green-text"> {{ message.name }}&nbsp;</span>
              <span class="grey-text text-darken-3">
                {{ message.content }}</span
              >
              <span class="grey-text time">
                {{ message.timestamp | moment }}</span
              >
            </div>
            <div class="left-bubble right-align" v-if="message.name !== name">
              <span class="green-text"> {{ message.name }}&nbsp;</span>
              <span class="grey-text text-darken-3">
                {{ message.content }}</span
              >
              <span class="grey-text time">
                {{ message.timestamp | moment }}</span
              >
            </div>
          </li>
        </ul>
      </div>
      <div class="card-content">
        <form @submit.prevent="addMessage">
          <label for="chatMessage">New Message from {{ name }}:</label>
          <input type="text" id="chatMessage" v-model="newMessage" />
          <p v-if="feedback">{{ feedback }}</p>
          <button class="btn green">Send Message!</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
