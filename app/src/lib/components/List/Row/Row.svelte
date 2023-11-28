<script lang="ts">
  import RowItem from "./RowItem/RowItem.svelte";
  import type { TypeParametriLavorazioneIndexNames } from "$types/types";
  import { parametriLavorazioneStore } from "$data/stores/parametriLavorazioneStore";

  let parametriLavorazioneArray = Object.keys($parametriLavorazioneStore) as TypeParametriLavorazioneIndexNames[];
</script>

<div class="grid 2xl:grid-cols-2 gap-3">
  {#each parametriLavorazioneArray as thisKey}
    <RowItem keyId={thisKey}></RowItem>
  {/each}
</div>
