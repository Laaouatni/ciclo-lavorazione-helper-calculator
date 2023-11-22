<script lang="ts">
  import { slide } from "svelte/transition";
  import CloseOpenButton from "./closeOpenButton/CloseOpenButton.svelte";
  let isOpen: boolean;

  $: console.log(isOpen)
</script>

<div class="dark:bg-neutral-900 bg-neutral-100">
  <CloseOpenButton bind:isOpen></CloseOpenButton>
  {#if isOpen}
    <div class="p-3" transition:slide>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quas
      suscipit quisquam cupiditate totam, aperiam aliquam nulla eaque voluptate
      ullam voluptatum laudantium soluta odio doloribus porro fugiat culpa nam
      magni.
    </div>
  {/if}
</div>
