<script lang="ts">
  import RowItemInput from './input/RowItemInput.svelte';

  import type { TypeParametriLavorazioneValue } from "./../types/types.ts";

  export let thisParametro: TypeParametriLavorazioneValue;
</script>

<div class="border-2 dark:border-neutral-500 grid rounded-md overflow-hidden hover:scale-[0.98] transition">  <div class="dark:bg-neutral-900 bg-neutral-100 p-2">
    {thisParametro.info}
  </div>
  <RowItemInput bind:thisParametro></RowItemInput>
</div>
