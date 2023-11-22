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
  };
</script>

<div class="grid lg:grid-cols-2 2xl:grid-cols-3 gap-2 ">
  {#each parametriLavorazioneArray as thisParametro}
    <RowItem bind:thisParametro={thisParametro[1]}></RowItem>
  {/each}
</div>
