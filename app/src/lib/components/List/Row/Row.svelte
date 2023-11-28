<script lang="ts">
  import RowItem from "./RowItem/RowItem.svelte";
  import type {
    TypeParametriLavorazioneIndexNames,
    TypeParametriLavorazioneValue,
  } from "$types/types";
  import { parametriLavorazioneStore } from "$data/stores/parametriLavorazioneStore";

  let parametriLavorazioneArray = Object.entries(
    $parametriLavorazioneStore,
  ) as [TypeParametriLavorazioneIndexNames, TypeParametriLavorazioneValue][];
</script>

<div class="grid 2xl:grid-cols-2 gap-5">
  {#each parametriLavorazioneArray as [thisKey, thisValue]}
    {#if !thisValue.hidden}
      <RowItem keyId={thisKey}></RowItem>
    {/if}
  {/each}
</div>
