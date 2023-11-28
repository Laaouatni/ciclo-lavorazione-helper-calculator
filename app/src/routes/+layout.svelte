<script>
  import "../app.pcss";
  import manifestRaw from "../../static/manifest.json?raw";
</script>

<svelte:head>
  <link rel="manifest" href="/manifest.json">
  <meta name="theme-color" content={JSON.parse(manifestRaw).theme_color}/>
</svelte:head>

<div
  class="dark:bg-neutral-950 bg-neutral-50 h-screen w-full dark:text-neutral-200 text-neutral-800 font-semibold font-jetbrain"
>
  <slot />
</div>

<style>
  @import url("https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@600&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
</style>
