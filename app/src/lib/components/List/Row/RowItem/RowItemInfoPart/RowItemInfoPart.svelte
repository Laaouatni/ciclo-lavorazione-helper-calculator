<script lang="ts">
  import type { TypeParametriLavorazioneIndexNames } from "$types/types";
  import { parametriLavorazioneStore } from "$data/stores/parametriLavorazioneStore";
  import RowCard from "../RowItemMain/RowItemMain/RowItemCard/RowCard.svelte";
  import { slide } from "svelte/transition";
  
  export let keyId;

</script>

<div transition:slide class="p-3 grid gap-2">
  {#each $parametriLavorazioneStore[keyId].formula.variablesToCheck as thisKeyId}
    <RowCard keyId={thisKeyId}></RowCard>
  {/each}
</div>
