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
            <div class="right-bubble" v-if="message.name === name"></div>
            <div class="left-bubble right-align"></div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
