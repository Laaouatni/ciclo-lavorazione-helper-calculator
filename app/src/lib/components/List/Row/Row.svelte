<script lang="ts">
  import RowItem from "./RowItem/RowItem.svelte";
  import defaultParametriLavorazione from "./utils/data/defaultParametriLavorazione";
  import type TypeParametriLavorazione from "./utils/types/types";

  let parametriLavorazione: TypeParametriLavorazione =
    defaultParametriLavorazione;

  let parametriLavorazioneArray = Object.entries(parametriLavorazione);

  $: {
    parametriLavorazioneArray.forEach(([key, value]) => {
      // @ts-ignore
      parametriLavorazione[key] = value;
    });
  }

  $: console.log(parametriLavorazione);
</script>

<div class="grid gap-2">
  {#each parametriLavorazioneArray as thisParametro}
    <RowItem bind:thisParametro={thisParametro[1]}></RowItem>
  {/each}
</div>
