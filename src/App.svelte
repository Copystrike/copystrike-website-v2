<script lang="ts">
  import Home from "./Home.svelte";
  import Tailwindcss from "./Tailwindcss.svelte";
</script>

<Tailwindcss />

<main>
  <div class="absolute w-screen min-h-screen bg-fixed bg-center bg-cover border-8 border-blue-900 bg-background filter hue-rotate-30 blur-sm"/>
  <div class="flex items-center justify-center h-screen">
    <Home />
  </div>
</main>

<style>
</style>
