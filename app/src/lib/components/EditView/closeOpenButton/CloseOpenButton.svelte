<script lang="ts">
  export let isOpen: boolean = true;
</script>

<button
  class="p-3 w-full dark:bg-neutral-700 bg-neutral-300 capitalize"
  on:click={() => {
    isOpen = !isOpen;
  }}>{isOpen ? "chiudi" : "apri"}</button
>
