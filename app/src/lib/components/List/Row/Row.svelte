<script lang="ts">
  import RowItem from "./RowItem/RowItem.svelte";
  import type { TypeParametriLavorazioneIndexNames } from "./utils/types/types";
  import { parametriLavorazioneStore } from "./utils/data/store/store";

  let parametriLavorazioneArray = Object.keys($parametriLavorazioneStore) as TypeParametriLavorazioneIndexNames[];
</script>

<div class="grid lg:grid-cols-2 2xl:grid-cols-3 gap-2">
  {#each parametriLavorazioneArray as thisKey}
    <RowItem keyId={thisKey}></RowItem>
  {/each}
</div>
