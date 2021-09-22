<script>
  import SocialMedias from "./components/SocialMedias.svelte";
</script>

<div class="mx-4 mt-20 mb-auto h-50">
  <div
    class="border-opacity-25 rounded-lg shadow-box bg-gradient-to-br from-indigo-400 to-purple-500 opacity-95"
  >
    <div class="text-center">
      <h1
        class="px-4 py-3 text-4xl text-purple-900 break-words md:text-5xl gradient-to-r"
      >
        Hey, my name is <span class="font-bold">Nick</span>!
      </h1>
      <p class="font-thin text-gray-800">Welcome to my website, more will be added soon!<br>Check out my socials!</p>
      <div class="text-center">
        <div class="inline-block py-3">
          <SocialMedias />
        </div>
      </div>
    </div>
  </div>
</div>
