<template>
  <div class="view-not-found">
    <div class="content">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you are looking for doesn't exist or has been moved.</p>
      <RouterLink to="/" class="home-button">Return to Home</RouterLink>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NotFound"
});
</script>

<style scoped lang="scss">
.view-not-found {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 100px);
  background-color: #f5f5f5;
  font-family: "Oswald", sans-serif;

  .content {
    text-align: center;
    padding: 2rem;
    max-width: 600px;

    h1 {
      font-size: 8rem;
      margin: 0;
      color: #333;
      line-height: 1;
    }

    h2 {
      font-size: 2.5rem;
      margin: 0 0 1.5rem;
      color: #555;
    }

    p {
      font-size: 1.2rem;
      margin-bottom: 2rem;
      color: #666;
    }

    .home-button {
      display: inline-block;
      padding: 0.8rem 1.5rem;
      background-color: #333;
      color: white;
      text-decoration: none;
      border-radius: 4px;
      font-size: 1.1rem;
      transition: background-color 0.3s, transform 0.2s;

      &:hover {
        background-color: #555;
        transform: translateY(-2px);
      }
    }
  }
}
</style>
