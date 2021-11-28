<template>
  <div class="about">
    <h1>This is an about page</h1>
    <HelloWorld msg="Das ist die About-Page" />
    <Home />
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import Home from "./Home.vue";

export default {
  components: { HelloWorld, Home },
};
</script>
