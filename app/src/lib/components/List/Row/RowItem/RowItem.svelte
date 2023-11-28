<script lang="ts">
  import type { TypeParametriLavorazioneIndexNames } from "$types/types";
  import RowItemInfoPart from "./RowItemInfoPart/RowItemInfoPart.svelte";

  import RowItemMain from "./RowItemMain/RowItemMain/RowItemMain.svelte";

  export let keyId: TypeParametriLavorazioneIndexNames;

  let isInfoOpen = false;
</script>

<div
  class="border-2 dark:border-neutral-600 border-neutral-400 dark:bg-neutral-700 bg-neutral-300 rounded-xl overflow-hidden"
>
  <RowItemMain {keyId} bind:isInfoOpen></RowItemMain>
  {#if isInfoOpen}
    <RowItemInfoPart {keyId} {isInfoOpen}></RowItemInfoPart>
  {/if}
</div>
