<script lang="ts">
  import type { TypeParametriLavorazioneIndexNames } from "$types/types";
  import RowCard from "./RowItemCard/RowCard.svelte";
  import RowItemInfoButton from "./RowItemInfoButton/RowItemInfoButton.svelte";
  import { parametriLavorazioneStore } from "$data/stores/parametriLavorazioneStore";

  export let keyId: TypeParametriLavorazioneIndexNames;
  export let isInfoOpen: boolean;

  let hasFormula = $parametriLavorazioneStore[keyId].formula;
</script>

<div
  class="grid {hasFormula && 'grid-cols-[1fr_auto] gap-2'} {isInfoOpen &&
    'border-b-2'} dark:border-neutral-600 border-neutral-400 dark:bg-neutral-600 bg-neutral-400 overflow-hidden"
>
  <RowCard {keyId}></RowCard>
  {#if hasFormula}
    <RowItemInfoButton on:click={() => (isInfoOpen = !isInfoOpen)}
    ></RowItemInfoButton>
  {/if}
</div>
