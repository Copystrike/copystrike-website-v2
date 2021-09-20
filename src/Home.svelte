<script>
import Github from "./components/icons/Github.svelte";

import Spotify from "./components/icons/Spotify.svelte";

  import Twitter from "./components/icons/Twitter.svelte";
</script>

<div
  class="w-1/2 border-opacity-25 rounded-lg shadow-box bg-gradient-to-br from-indigo-400 to-purple-500 opacity-95 h-1/2"
>
  <div class="text-center">
    <h1 class="mt-2 text-5xl font-medium text-purple-900 gradient-to-r">
      Hey, my name is Nick!
    </h1>
    <p class="mt-16">Well not much too see here... Yet?</p>
    <div class="flex justify-center">
      <div class="flex justify-between w-1/3 mt-20 ">
        <Twitter />
        <Github />
        <Spotify />
      </div>
    </div>
  </div>
</div>
